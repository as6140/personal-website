# 🎵 Spotify Profile Setup Guide

## What's New

Your Music page now includes a **Spotify Profile section** that shows:
- Your Spotify profile with a "Follow" button
- Current listening activity (if enabled)
- Recently played tracks (if enabled)
- Quick stats about your music taste

## 🔧 How to Customize Your Profile

### 1. Update Your Profile Information

Edit `src/resources/spotify-config.js` and update the `profile` section:

```javascript
profile: {
  username: "your-spotify-username", // Your actual Spotify username
  displayName: "Your Name", // How you want your name displayed
  profileUrl: "https://open.spotify.com/user/your-username", // Your Spotify profile URL
  description: "Follow me on Spotify to see what I'm currently listening to and discover new music together!",
  showCurrentListening: true, // Set to false to hide current listening
  showRecentlyPlayed: true, // Set to false to hide recently played
},
```

### 2. Find Your Spotify Username

1. Open Spotify
2. Go to your profile
3. Your username is in the URL: `https://open.spotify.com/user/YOUR_USERNAME`
4. Copy your username and update the config

### 3. Customize the Description

Write a compelling description that encourages people to follow you:

```javascript
description: "Follow me on Spotify to discover new music! I share eclectic playlists and love finding hidden gems across all genres.",
```

### 4. Enable/Disable Features

You can control what shows up:

```javascript
showCurrentListening: true,  // Shows what you're playing now
showRecentlyPlayed: true,    // Shows your recent tracks
```

## 🎯 Features Included

### ✅ Profile Card
- Your name and username
- "Follow on Spotify" button
- Custom description
- Music taste stats

### ✅ Current Listening
- Shows what you're playing right now
- Embedded Spotify player
- Real-time updates

### ✅ Recently Played
- Your recent listening history
- Embedded track previews
- Discover your music taste

### ✅ Quick Stats
- Playlist count
- Following status
- Music taste description

## 🔄 How to Update

1. **Edit the config file**: `src/resources/spotify-config.js`
2. **Update your profile info**: Username, display name, description
3. **Customize features**: Enable/disable current listening and recently played
4. **Save and deploy**: Changes appear immediately

## 🎨 Customization Options

### Profile Display
- Change your display name
- Update your description
- Modify the follow button text

### Content Sections
- Show/hide current listening
- Show/hide recently played
- Customize section titles

### Styling
- The component uses your site's theme
- Automatically adapts to light/dark mode
- Responsive design for all devices

## 🚀 Next Steps

1. **Update your username** in the config file
2. **Customize your description** to match your personality
3. **Test the follow button** to make sure it works
4. **Deploy your changes** to see the profile live

Your Spotify profile will now be prominently displayed on your Music page, making it easy for visitors to follow you and discover your music taste! 