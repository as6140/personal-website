// Spotify Configuration - Easy playlist and album management
// To add a new playlist/album:
// 1. Copy the Spotify share link
// 2. Replace the URLs below
// 3. Update the metadata (title, description, category, featured status)

export const spotifyConfig = {
  // Your Spotify Profile Information
  profile: {
    username: "121433737", // Your Spotify username
    displayName: "Alex Shropshire", // How you want your name displayed
    profileUrl: "https://open.spotify.com/user/121433737", // Your Spotify profile URL
    description: "What I'm currently listening to in real-time!",
    showCurrentListening: true, // Whether to show current listening activity
    showRecentlyPlayed: true, // Whether to show recently played tracks
  },

  // Featured Playlists (appear at the top)
  featuredPlaylists: [
    {
      title: "7.25",
      description: "I build a multi-hour random assortment of favorites and discoveries every month. A way to access my headphones in near real-time. Vibes will vary.",
      spotifyUrl: "https://open.spotify.com/embed/playlist/03RDWrmyoG5wSwoQbe4loF",
      category: "Monthlies",
      featured: true,
    },
    {
      title: "Caribe vibras",
      description: "An essential and revisited playlist of energetic and chill music discovered at coffee shops, bars, restaurants, and radio stations in the Carribean & Latin America. You'll either learn Spanish or have a blast trying.",
      spotifyUrl: "https://open.spotify.com/playlist/0TeBLxVX66kJ1Vd3Y4V6h5?si=SfCTab42RBiGiXcqBH39bA",
      category: "Latin",
      featured: true,
    },
    {
      title: "U Lost, Bro?",
      description: "A mix of rock, pop, and folksy music about being on the road, seeking adventure & meaning, and generally journeying through life.",
      spotifyUrl: "https://open.spotify.com/playlist/73AeAyQGrvCw5LfLH8ePEM?si=OF0bRmQYQAGbIwaq2ekd6A",
      category: "Themed",
      featured: false,
    },
    {
      title: "This is Masayoshi Takanaka",
      description: "Discovered this guy recently, and he's blowing my mind. A Japanese funk legend with influences across the globe. Find a book and a hammock and let his intricate guitar vibes narrate your day.",
      spotifyUrl: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1wwxF8?si=Vsobi0F3R3CBj7-KQ6yS3Q",
      category: "Japanese Funk",
      featured: true,
    }
  ],

  // Regular Playlists (appear below featured)
  regularPlaylists: [
    
  ],

  // Featured Albums (appear at the top)
  featuredAlbums: [
    {
      title: "black british music (2025)",
      artist: "Jim Legxacy",
      description: "A new, more polished, more cohesive sound from a young British rapper, singer, and producer who is known for his a meticulous audio moodboards of spidery emo guitar lines, Afrobeat drums, recognizable samples, and Jersey club rhythms.",
      spotifyUrl: "https://open.spotify.com/album/0uqw8DmJjWCODFySYWx47f?si=-PkzF45TRjOcNswJ6KZS2Q",
      featured: true,
    },
    {
      title: "Canta en Espanol con Los Panchos",
      artist: "Eydie Gorme",
      description: "Grab a glass of wine and play this in the background of dinner - this legendary Mexican singer is a master of love ballads and has the voice of an angel. Los Panchos keeps the instrumentation classic. Warning: may require additional napkins (tissues*).",
      spotifyUrl: "https://open.spotify.com/album/09bB3v1b09ROK8YZkRd87w?si=eyFeAth5RnaDkmKs9z8tIg",
      featured: false,
    },
  ],

  // Regular Albums (appear below featured)
  regularAlbums: [
    
  ],
};

// Helper function to convert Spotify URLs to embed URLs
export const convertToEmbedUrl = (spotifyUrl) => {
  // Handle playlist URLs
  if (spotifyUrl.includes('/playlist/')) {
    const playlistId = spotifyUrl.split('/playlist/')[1].split('?')[0];
    return `https://open.spotify.com/embed/playlist/${playlistId}`;
  }
  
  // Handle album URLs
  if (spotifyUrl.includes('/album/')) {
    const albumId = spotifyUrl.split('/album/')[1].split('?')[0];
    return `https://open.spotify.com/embed/album/${albumId}`;
  }
  
  // Handle track URLs
  if (spotifyUrl.includes('/track/')) {
    const trackId = spotifyUrl.split('/track/')[1].split('?')[0];
    return `https://open.spotify.com/embed/track/${trackId}`;
  }
  
  return spotifyUrl; // Return original if no pattern matches
};

// Helper function to process all music items
export const processMusicItems = () => {
  const allPlaylists = [
    ...spotifyConfig.featuredPlaylists,
    ...spotifyConfig.regularPlaylists
  ];
  
  const allAlbums = [
    ...spotifyConfig.featuredAlbums,
    ...spotifyConfig.regularAlbums
  ];

  return {
    profile: spotifyConfig.profile,
    playlists: allPlaylists.map(item => ({
      ...item,
      embedUrl: convertToEmbedUrl(item.spotifyUrl)
    })),
    albums: allAlbums.map(item => ({
      ...item,
      embedUrl: convertToEmbedUrl(item.spotifyUrl)
    }))
  };
}; 