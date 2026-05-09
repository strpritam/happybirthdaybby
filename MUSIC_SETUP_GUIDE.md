# 🎵 Music Setup Guide for Birthday Surprise Portal

## Quick Start

Your project now has a `public/music/` folder ready to receive music files.

### Step 1: Add Your Music Files
1. Navigate to: `/public/music/`
2. Add 20 MP3 files named exactly as: `track-1.mp3` through `track-20.mp3`
3. Restart your dev server with: `npm run dev`

## SceneMusic Component Overview

**File**: `src/components/birthday/SceneMusic.tsx`

### What It Does
- Displays an interactive music player with spinning CD animation
- Shows a 20-track playlist
- Features album art cycling through 7 images
- Allows users to play, pause, skip, like tracks, and adjust volume

### How It Works

```typescript
const TRACKS: Track[] = Array.from({ length: 20 }, (_, i) => ({
  title: [
    "Our First Dance", "Midnight Love", "You & Me", // ... 20 titles
  ][i],
  artist: "For My Love ♡",
  src: `/music/track-${i + 1}.mp3`,  // ← Looks for files here
  cover: COVERS[i % COVERS.length],   // ← Cycles through 7 images
}));
```

## Music Files Directory Structure

```
public/
└── music/
    ├── track-1.mp3    (track: "Our First Dance")
    ├── track-2.mp3    (track: "Midnight Love")
    ├── track-3.mp3    (track: "You & Me")
    ├── track-4.mp3    (track: "Forever Yours")
    ├── track-5.mp3    (track: "Stardust Kisses")
    ├── track-6.mp3    (track: "Sweet Surrender")
    ├── track-7.mp3    (track: "My Sunshine")
    ├── track-8.mp3    (track: "Heart of Mine")
    ├── track-9.mp3    (track: "Slow Dance")
    ├── track-10.mp3   (track: "Endless Love")
    ├── track-11.mp3   (track: "Moonlight Serenade")
    ├── track-12.mp3   (track: "Whispered Wishes")
    ├── track-13.mp3   (track: "Beautiful Soul")
    ├── track-14.mp3   (track: "Always You")
    ├── track-15.mp3   (track: "Love Letters")
    ├── track-16.mp3   (track: "Golden Hour")
    ├── track-17.mp3   (track: "Tender Touch")
    ├── track-18.mp3   (track: "Ocean Eyes")
    ├── track-19.mp3   (track: "Sweet Dreams")
    └── track-20.mp3   (track: "Happy Birthday Love")
```

## Player Features Explained

### UI Controls
| Feature | Icon | Function |
|---------|------|----------|
| **Play/Pause** | ▶️/⏸️ | Start or stop playback |
| **Skip Forward** | ⏭️ | Jump to next track |
| **Skip Back** | ⏮️ | Jump to previous track |
| **Shuffle** | 🔀 | (UI only - not implemented) |
| **Repeat** | 🔁 | (UI only - not implemented) |
| **Volume** | 🔊 | Adjust volume 0-100% |
| **Like** | ❤️ | Mark track as favorite |
| **Playlist** | 📋 | View all 20 tracks |

### Display Elements
- **Spinning CD**: Rotates when music plays
- **Album Art**: Shows currently playing track's cover
- **Progress Bar**: Seek through track
- **Duration**: Current time / Total time format
- **Track Info**: Title and artist display
- **Playlist**: Clickable list of all tracks

## Customization Options

### Option 1: Change Track Titles
Edit `src/components/birthday/SceneMusic.tsx` line 20-26:

```typescript
const TRACKS: Track[] = Array.from({ length: 20 }, (_, i) => ({
  title: [
    "Your Custom Title 1", "Custom Title 2", // ... etc
  ][i],
  // ... rest stays same
}));
```

### Option 2: Change Number of Tracks
Modify the array length:

```typescript
// Change from 20 to 10 tracks:
const TRACKS: Track[] = Array.from({ length: 10 }, (_, i) => ({
  // ... and reduce title array to 10 items
}));
```

### Option 3: Change Album Art
Edit the COVERS array line 15:

```typescript
const COVERS = [
  herPhoto,     // Main hero photo
  m1, m2, m3, m4, m5, m6  // Memory photos
  // Add more images here
];
```

## Audio Format Specifications

### Recommended Specs
- **Codec**: MP3 (MPEG-3 Layer III)
- **Bitrate**: 192 kbps (good quality)
- **Sample Rate**: 44.1 kHz
- **Channels**: Stereo (2 channels)

### File Size Reference
- 3-minute song @ 192 kbps ≈ 4.3 MB
- All 20 tracks ≈ 86 MB

### Browser Support
| Browser | Support |
|---------|---------|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Safari | ✅ Full (iOS 3.0+) |
| Edge | ✅ Full |
| Opera | ✅ Full |

## Implementation Code Reference

### Track Interface
```typescript
type Track = {
  title: string;      // Song name
  artist: string;     // "For My Love ♡"
  src: string;        // Path to MP3: "/music/track-1.mp3"
  cover: string;      // Album art image
};
```

### Player State Management
```typescript
const [idx, setIdx] = useState(0);           // Current track index
const [playing, setPlaying] = useState(false); // Play state
const [progress, setProgress] = useState(0);  // Current time (seconds)
const [duration, setDuration] = useState(0);  // Total duration
const [volume, setVolume] = useState(0.8);    // Volume 0-1
const [liked, setLiked] = useState({});       // Liked tracks {index: bool}
```

### Audio Events
```typescript
onTimeUpdate   // Updates progress as song plays
onLoadedMetadata // Gets duration when ready
onEnded        // Auto-plays next track when finished
```

## Troubleshooting

### Issue: "No audio playing"
**Solution**: Check that:
- Files are named exactly: `track-1.mp3`, `track-2.mp3`, etc.
- Files are in `/public/music/` directory
- Files are valid MP3 format
- Dev server is restarted after adding files

### Issue: "Wrong album art showing"
**Solution**: 
- Check COVERS array in SceneMusic.tsx
- Ensure image imports are correct
- Verify cover images exist in `src/assets/`

### Issue: "Player controls not working"
**Solution**:
- Check browser console for errors
- Verify audioRef is properly initialized
- Check that audio HTML element is rendering

### Issue: "CORS error"
**Solution**: Music files must be served from the same origin
- Use local files in `/public/music/`
- Don't use external URLs for production
- Test in development mode first

## File Checklist

Before deploying, ensure you have:

- ✅ `/public/music/` directory created
- ✅ 20 MP3 files added (track-1.mp3 to track-20.mp3)
- ✅ `/src/assets/` images present (her-hero.jpg, memory-1.jpg to memory-6.jpg)
- ✅ SceneMusic.tsx edited if changing titles/count
- ✅ Dev server restarted after file additions
- ✅ Music player tested in browser
- ✅ Mobile responsiveness verified

## Next Steps

1. ✨ Prepare your 20 music tracks
2. 📁 Place them in `/public/music/`
3. 🏷️ Ensure proper naming (track-1.mp3 to track-20.mp3)
4. 🎬 Restart dev server: `npm run dev`
5. 🎵 Test the music player
6. 🎉 Deploy and enjoy!

---
**Component**: SceneMusic.tsx
**Music Directory**: public/music/
**Ready to customize**: Yes! Add your MP3 files now.
