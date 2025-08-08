#!/usr/bin/env node

/**
 * Spotify Playlist/Album Adder Script
 * 
 * Usage:
 * 1. Copy a Spotify share link (playlist, album, or track)
 * 2. Run: node scripts/add-playlist.js
 * 3. Follow the prompts to add metadata
 * 4. The script will update spotify-config.js automatically
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

const convertToEmbedUrl = (spotifyUrl) => {
  if (spotifyUrl.includes('/playlist/')) {
    const playlistId = spotifyUrl.split('/playlist/')[1].split('?')[0];
    return `https://open.spotify.com/embed/playlist/${playlistId}`;
  }
  
  if (spotifyUrl.includes('/album/')) {
    const albumId = spotifyUrl.split('/album/')[1].split('?')[0];
    return `https://open.spotify.com/embed/album/${albumId}`;
  }
  
  if (spotifyUrl.includes('/track/')) {
    const trackId = spotifyUrl.split('/track/')[1].split('?')[0];
    return `https://open.spotify.com/embed/track/${trackId}`;
  }
  
  return spotifyUrl;
};

const getTypeFromUrl = (url) => {
  if (url.includes('/playlist/')) return 'playlist';
  if (url.includes('/album/')) return 'album';
  if (url.includes('/track/')) return 'track';
  return 'unknown';
};

const updateConfigFile = (newItem, type) => {
  const configPath = path.join(__dirname, '../src/resources/spotify-config.js');
  let configContent = fs.readFileSync(configPath, 'utf8');
  
  // Determine which array to add to
  let targetArray = '';
  if (type === 'playlist') {
    targetArray = newItem.featured ? 'featuredPlaylists' : 'regularPlaylists';
  } else if (type === 'album') {
    targetArray = newItem.featured ? 'featuredAlbums' : 'regularAlbums';
  }
  
  // Find the array in the config
  const arrayRegex = new RegExp(`(${targetArray}: \\[)([\\s\\S]*?)(\\],)`, 'g');
  const match = arrayRegex.exec(configContent);
  
  if (match) {
    const beforeArray = match[1];
    const arrayContent = match[2];
    const afterArray = match[3];
    
    // Create the new item string
    const newItemString = `    {
      title: "${newItem.title}",
      description: "${newItem.description}",
      spotifyUrl: "${newItem.spotifyUrl}",
      ${newItem.category ? `category: "${newItem.category}",` : ''}
      ${newItem.artist ? `artist: "${newItem.artist}",` : ''}
      featured: ${newItem.featured},
    },`;
    
    // Add the new item to the array
    const updatedArrayContent = arrayContent + '\n' + newItemString;
    const updatedConfig = configContent.replace(match[0], beforeArray + updatedArrayContent + afterArray);
    
    fs.writeFileSync(configPath, updatedConfig);
    console.log(`✅ Added ${newItem.title} to ${targetArray}`);
  } else {
    console.log('❌ Could not find the target array in the config file');
  }
};

async function main() {
  console.log('🎵 Spotify Playlist/Album Adder\n');
  
  try {
    // Get Spotify URL
    const spotifyUrl = await question('Paste your Spotify share link: ');
    
    if (!spotifyUrl.includes('open.spotify.com')) {
      console.log('❌ Please provide a valid Spotify URL');
      rl.close();
      return;
    }
    
    const type = getTypeFromUrl(spotifyUrl);
    if (type === 'unknown') {
      console.log('❌ Could not determine if this is a playlist, album, or track');
      rl.close();
      return;
    }
    
    // Get metadata
    const title = await question('Title: ');
    const description = await question('Description: ');
    const category = type === 'playlist' ? await question('Category (optional, press Enter to skip): ') : '';
    const artist = type === 'album' ? await question('Artist: ') : '';
    const featured = await question('Featured? (y/n): ').then(answer => answer.toLowerCase() === 'y');
    
    const newItem = {
      title,
      description,
      spotifyUrl,
      category: category || undefined,
      artist: artist || undefined,
      featured,
    };
    
    updateConfigFile(newItem, type);
    
    console.log('\n🎉 Successfully added your music!');
    console.log('The changes will be reflected on your Music page.');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

if (require.main === module) {
  main();
} 