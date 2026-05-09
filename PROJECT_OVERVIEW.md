# Birthday Surprise Portal - Project Overview

## 📋 Project Structure

```
birthday-surprise-portal/
├── public/
│   └── music/                    # 🎵 Music files for SceneMusic (20 tracks)
│       └── track-1.mp3 to track-20.mp3
├── src/
│   ├── assets/                   # Images and media
│   │   └── her-hero.jpg, memory-1.jpg to memory-6.jpg
│   ├── components/
│   │   ├── birthday/             # Main scene components
│   │   │   ├── EmojiRain.tsx     # Emoji falling animation effect
│   │   │   ├── SceneCake.tsx     # Birthday cake scene with candles
│   │   │   ├── SceneCelebrate.tsx # Celebration scene
│   │   │   ├── SceneFinale.tsx   # Final closing scene
│   │   │   ├── SceneHero.tsx     # Hero/landing scene
│   │   │   ├── SceneLetter.tsx   # Love letter scene
│   │   │   ├── SceneLovePlant.tsx # Growing love plant scene
│   │   │   ├── SceneMemories.tsx # Photo memories carousel
│   │   │   ├── SceneMusic.tsx    # 🎵 Music player with playlist
│   │   │   └── StarField.tsx     # Starfield background animation
│   │   └── ui/                   # Shadcn UI components (25+ components)
│   │       ├── accordion, alert, avatar, badge, button
│   │       ├── card, carousel, chart, checkbox, collapsible
│   │       ├── command, context-menu, dialog, drawer
│   │       ├── dropdown-menu, form, hover-card, input
│   │       ├── label, menubar, pagination, popover
│   │       ├── progress, radio-group, scroll-area, select
│   │       ├── separator, sheet, sidebar, skeleton, slider
│   │       ├── switch, table, tabs, textarea, toggle
│   │       └── tooltip
│   ├── hooks/
│   │   └── use-mobile.tsx        # Mobile detection hook
│   ├── lib/
│   │   └── utils.ts              # Utility functions
│   ├── routes/
│   │   ├── __root.tsx            # Root layout route
│   │   └── index.tsx             # Main birthday portal experience
│   ├── router.tsx                # TanStack router setup
│   ├── routeTree.gen.ts          # Auto-generated route tree
│   └── styles.css                # Global styles
├── .prettierrc                   # Code formatting config
├── eslint.config.js              # ESLint config
├── tsconfig.json                 # TypeScript config
├── vite.config.ts                # Vite build config
├── wrangler.jsonc                # Cloudflare Workers config
├── package.json                  # Dependencies & scripts
└── bunfig.toml                   # Bun package manager config
```

## 🎬 Scene Flow (User Journey)

```
Hero Scene
    ↓
Cake Scene (Blow candles)
    ↓
Celebrate Scene
    ↓
Memories Scene (Photo carousel)
    ↓
Love Plant Scene
    ↓
Letter Scene
    ↓
Music Scene (🎵 20-track playlist)
    ↓
Finale Scene (Restart available)
```

## 🎵 SceneMusic Component Details

**Location**: `src/components/birthday/SceneMusic.tsx`

### Features:
- ✨ Spinning CD album art animation
- ▶️ Play/Pause controls
- ⏭️ Skip forward/backward
- 🔊 Volume control with slider
- 📊 Progress bar with seek functionality
- ❤️ Like button for each track
- 🔀 Shuffle & Repeat buttons (UI placeholders)
- 📱 Responsive design (mobile & desktop)
- 🌙 Dark theme with gradient backgrounds

### Music Files Required:
- **Location**: `/public/music/`
- **Format**: MP3 files
- **Files Needed**: 20 tracks
- **Naming**: `track-1.mp3` through `track-20.mp3`

### Track Configuration:
```javascript
const TRACKS: Track[] = [
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
];

// All tracks show album art from COVERS array:
// - Her hero photo (7 variations with memory photos)
// - Cycles through covers in order
```

## 🎨 Styling & Theme

- **Framework**: Tailwind CSS + Shadcn UI
- **Color Scheme**: Dark theme with primary/gold accents
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React icons
- **Fonts**: Custom display & script fonts
- **Effects**: Shimmer text, glow effects, gradient backgrounds

## 🔧 Key Technologies

```json
{
  "Framework": "TanStack React Router v1",
  "Build Tool": "Vite",
  "Package Manager": "Bun (or npm)",
  "Language": "TypeScript",
  "Styling": "Tailwind CSS 4.2 + Shadcn UI",
  "Animation": "Framer Motion",
  "Icons": "Lucide React",
  "UI Library": "Radix UI (base for components)",
  "Forms": "React Hook Form",
  "Deployment": "Cloudflare Workers"
}
```

## 📁 File Dependencies

### Assets Required:
```
src/assets/
├── her-hero.jpg              # Hero photo (CD center)
├── memory-1.jpg through memory-6.jpg  # Memory photos (CD art)
```

### Music Files Required:
```
public/music/
├── track-1.mp3 through track-20.mp3  # 🎵 Playlist tracks
```

## 🚀 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run build:dev # Build in development mode
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🎁 Customization Points

1. **Birthday person's name**: Edit `NAME` in `src/routes/index.tsx`
2. **Scene order**: Modify `SCENES` array in `src/routes/index.tsx`
3. **Track titles**: Edit title array in `src/components/birthday/SceneMusic.tsx`
4. **Colors & theme**: Modify Tailwind classes throughout components
5. **Album art**: Replace/add images in `src/assets/`
6. **Music**: Add MP3 files to `public/music/` directory

## 📦 Component Dependencies

- **Motion effects**: EmojiRain, StarField, all scenes use Framer Motion
- **Image handling**: Asset imports from `@/assets/`
- **Routing**: TanStack React Router with file-based routing
- **Icons**: Lucide React used throughout UI

## 🌐 Deployment

- **Platform**: Cloudflare Workers (via wrangler.jsonc)
- **Build output**: Static site ready for deployment
- **Public assets**: Served from `/public/` directory

## 📝 Notes

- All scenes are responsive (mobile, tablet, desktop)
- The music player is fully functional with HTML5 audio API
- Album art auto-cycles through 7 cover images
- Graceful error handling with Try Again button in error boundary
- 404 page for unmatched routes

---
**Project Type**: Interactive Birthday Surprise Web App
**Tech Stack**: React + TypeScript + TanStack Router + Vite + Tailwind CSS
**Status**: Ready for customization with music files
**Last Updated**: May 5, 2026
