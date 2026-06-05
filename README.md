# Aniket Gade — 3D Portfolio (Nuxt 3)

A stunning dark-themed 3D portfolio with Three.js particle field, animated wireframe boxes, custom cursor, and scroll reveal animations.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server → http://localhost:3000
npm run dev

# Build for production
npm run build

# Generate static site (deploy anywhere)
npm run generate
```

## Tech Stack
- **Nuxt 3** — Vue-based SSR/SSG framework
- **Three.js** — 3D particle field & wireframe animations  
- **Tailwind CSS** — utility styling (via @nuxtjs/tailwindcss)
- **Syne + DM Mono + Instrument Serif** — Google Fonts

## Project Structure
```
aniket-portfolio/
├── nuxt.config.ts          # Nuxt configuration
├── package.json
├── assets/css/main.css     # Global CSS variables & base styles
├── pages/
│   └── index.vue           # Main page + scroll reveal observer
└── components/
    ├── AppCursor.vue        # Custom animated cursor
    ├── BgCanvas.vue         # Three.js 3D background
    ├── AppNav.vue           # Fixed navigation
    ├── HeroSection.vue      # Hero with animated name fill
    ├── SkillsSection.vue    # Tech stack grid
    ├── ExperienceSection.vue
    ├── ProjectsSection.vue
    ├── EducationSection.vue
    └── ContactSection.vue
```

## Deployment
```bash
# Netlify / Vercel / GitHub Pages
npm run generate
# Upload the .output/public/ directory
```
