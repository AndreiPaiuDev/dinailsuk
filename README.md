# Dinails UK – Luxury Nail Studio Website

This is a premium, editorial-style website for Dinails UK, built with [Next.js](https://nextjs.org). The site features a luxury design, full-width hero, WhatsApp contact, Google Maps integration, and is ready for static deployment (e.g., GitHub Pages).

## Features
- Luxury, editorial-inspired design
- Responsive and mobile-friendly
- Full-width hero image
- Services, Portfolio, and Contact sections
- WhatsApp-only contact and Google Maps embed
- Multilingual support (EN/RO)
- Easy to customize

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Static Export & GitHub Pages Deployment

1. **Update `next.config.mjs`** for static export:
   ```js
   export const output = 'export';
   // Optionally set assetPrefix and basePath if deploying to a subfolder
   ```
2. **Build and export static site:**
   ```bash
   npm run build
   npm run export
   ```
   The static site will be in the `out/` folder.
3. **Deploy `out/` to GitHub Pages**
   - Push the `out/` folder to the `gh-pages` branch, or use a GitHub Action for deployment.
   - Update repository settings to serve from `gh-pages` branch (or `/docs` folder).

## Customization
- Edit content in `src/components/` (Hero, Services, Portfolio, Contact, etc.)
- Update styles in `src/app/styles.css` and `globals.css`
- Change translations in `src/components/translations.js`

## License
This project is for demonstration and personal use. For commercial use, please contact the author.
