# Fondation Mariam Website

A world-class multilingual humanitarian website for Fondation Mariam, a non-profit organization supporting orphaned children, vulnerable women, and communities in Burundi since 1978.

## Features

- **13 Pages**: Home, About, Programs, Donate, Sponsor, Impact, Gallery, News, Volunteer, Partnerships, Contact, Privacy, Terms
- **4 Languages**: French (default), English, Kirundi, Swahili
- **Premium Design**: Gold (#D4AF37), Navy (#1E3A5F), Green (#10B981) color scheme
- **Responsive**: Mobile-first design with smooth animations
- **Bank Integration**: Donation page includes BCB bank details (Account: 20311600016, SWIFT: BCBUBIBI)

## Tech Stack

- Vite + React 18 + TypeScript
- React Router v7
- Framer Motion (animations)
- Tailwind CSS
- Lucide React (icons)
- Custom i18n system

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation with language switcher
│   ├── Footer.tsx      # Newsletter, links, contact info
│   └── Layout.tsx      # Page wrapper
├── pages/              # 13 page components
├── i18n/
│   ├── index.tsx       # I18n context provider
│   └── translations.ts # All translations (FR, EN, Kirundi, Swahili)
├── theme/
│   └── index.ts        # Design system (colors, gradients, shadows)
├── App.tsx             # Router configuration
├── main.tsx           # Entry point
└── index.css           # Tailwind + custom styles
public/
├── logo.svg            # FM logo
├── favicon.svg         # Browser icon
└── robots.txt          # SEO
```

## Real Statistics

The Impact page displays real figures:
- **76 children** currently supported
- **42 boys** (55%)
- **34 girls** (45%)

## Bank Donation Details

- **Bank**: Banque Commerciale du Burundi (BCB)
- **Account**: 20311600016
- **SWIFT**: BCBUBIBI

## Organization

- **Name**: Fondation Mariam
- **Slogan**: La Lumière de la Nation (The Light of the Nation)
- **Registration**: Ord. Min. N°550/936 du 05/06/2020
- **Address**: Kinama, Quartier Ruyigi, 24e Avenue N°57, BP 398, Bujumbura, Burundi
- **Phone**: +257 79 97 64 45
- **Email**: mariamfondation@gmail.com

## Development

Built with Vite + React + TypeScript

© 2026 Fondation Mariam. Designed & Developed by GLWT.
