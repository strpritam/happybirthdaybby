# Music Files for Birthday Surprise Portal

## Overview
This folder contains the music files for the **SceneMusic** component of the birthday surprise portal.

## Required Files
The application expects **20 music files** in this directory:

- `track-1.mp3`
- `track-2.mp3`
- `track-3.mp3`
- ... (continues)
- `track-20.mp3`

## File Format
- **Format**: MP3 (`.mp3`)
- **Sample Rate**: 44.1 kHz or higher recommended
- **Bitrate**: 128 kbps minimum (192 kbps+ recommended)
- **Duration**: Any duration (recommended 3-5 minutes per track)

## Track Titles (Predefined in Code)
The following track titles are already configured in `SceneMusic.tsx`:

1. Our First Dance
2. Midnight Love
3. You & Me
4. Forever Yours
5. Stardust Kisses
6. Sweet Surrender
7. My Sunshine
8. Heart of Mine
9. Slow Dance
10. Endless Love
11. Moonlight Serenade
12. Whispered Wishes
13. Beautiful Soul
14. Always You
15. Love Letters
16. Golden Hour
17. Tender Touch
18. Ocean Eyes
19. Sweet Dreams
20. Happy Birthday Love

## How to Add Music Files
1. **Place MP3 files** in this folder (`/public/music/`)
2. **Name them** exactly as: `track-1.mp3`, `track-2.mp3`, etc.
3. **Match titles** to the track numbers listed above (optional, but keeps consistency)
4. **Restart your dev server** after adding files: `npm run dev` or `bun dev`

## File Structure
```
public/
└── music/
    ├── track-1.mp3
    ├── track-2.mp3
    ├── track-3.mp3
    └── ... (up to track-20.mp3)
```

## Customization
To modify track titles or count, edit `src/components/birthday/SceneMusic.tsx`:

```typescript
const TRACKS: Track[] = Array.from({ length: 20 }, (_, i) => ({
  title: [
    "Our First Dance", "Midnight Love", "You & Me", // ... edit these
  ][i],
  artist: "For My Love ♡",
  src: `/music/track-${i + 1}.mp3`,
  cover: COVERS[i % COVERS.length],
}));
```

## Player Features
- **Play/Pause**: Toggle playback
- **Skip Forward/Back**: Navigate between tracks
- **Volume Control**: Adjust volume with slider
- **Progress Bar**: Click to seek
- **Like Button**: Heart icon to favorite tracks
- **Shuffle & Repeat**: Available controls
- **Album Art**: Displays cover image (uses hero photo or memory images)

## Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Supported

## Troubleshooting
- **Audio not playing**: Check file names match exactly (`track-1.mp3`, etc.)
- **Files not found**: Ensure files are in `public/music/` directory
- **CORS issues**: Files should be served from same origin (no external URLs needed)

---
**Created for**: Birthday Surprise Portal
**Component**: `SceneMusic.tsx`
**Last Updated**: May 5, 2026
