# Luiggis Home Cucuta

Landing page for **Luiggis Home Cucuta**, a cozy bed & breakfast located in Cucuta, Colombia.

## Live Site

**https://drag0n9.github.io/luiggis-home-cucuta/**

## Tech Stack

- **Next.js 16** (App Router) with static export
- **Tailwind CSS v4** for styling
- **Phosphor Icons** for iconography
- **TypeScript**
- **GitHub Pages** for hosting via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open **http://localhost:3000/luiggis-home-cucuta** in your browser.

### Build

```bash
# Generate static export
npm run build
```

The static files are output to the `out/` directory.

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout, fonts, SEO metadata
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Tailwind config, design tokens
└── components/
    ├── Header.tsx       # Sticky nav with mobile menu
    ├── Hero.tsx         # Full-viewport hero section
    ├── About.tsx        # About the B&B
    ├── Rooms.tsx        # Room cards with WhatsApp CTA
    ├── Amenities.tsx    # Amenities grid with icons
    ├── Gallery.tsx      # Photo gallery
    ├── Location.tsx     # Google Maps embed
    ├── Contact.tsx      # Contact info & WhatsApp CTA
    └── Footer.tsx       # Footer with social links
```

## Customization

Before going live, update the following:

| Item | File(s) | What to change |
|------|---------|----------------|
| WhatsApp number | `Header.tsx`, `Hero.tsx`, `Rooms.tsx`, `Contact.tsx`, `Footer.tsx` | Replace `573000000000` with your real number |
| Contact info | `Contact.tsx`, `Footer.tsx` | Phone, email, social media links |
| Google Maps | `Location.tsx` | Replace embed URL with your exact location |
| Room details | `Rooms.tsx` | Names, descriptions, features |
| Images | All components | Replace placeholder divs with real `<Image>` tags |

## Deployment

Deployment is automated via GitHub Actions. Every push to `main` triggers:

1. Install dependencies
2. Build static export
3. Deploy to GitHub Pages

See [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) for the workflow configuration.

## License

MIT License. See [LICENSE](LICENSE) for details.
