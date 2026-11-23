# NoMadLab Site

Next.js site for NoMadLab, No.Mad's tech brand. Built with the NoMadLab design system v1.1.

## Stack

- **Framework**: Next.js 16 (App Router, TypeScript, server-rendered)
- **Styling**: Tailwind CSS 4 + design system tokens
- **UI Components**: Custom components based on shadcn/ui primitives
- **Fonts**: Inter Tight + JetBrains Mono (self-hosted, SIL OFL 1.1)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Type check
npm run typecheck

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (es)/           # Spanish locale (default)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── en/             # English locale
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── sistema/        # Design system showcase (noindex)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css     # Design tokens + base styles
│   ├── layout.tsx      # Root layout
│   └── sitemap.ts      # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── button.tsx
│       └── link.tsx
└── lib/
    ├── i18n.ts         # Locale configuration
    ├── metadata.ts     # SEO utilities
    └── utils.ts        # Class utilities (cn)
public/
├── fonts/              # Self-hosted font files
│   ├── inter-tight-*.woff2
│   ├── jetbrains-mono-*.woff2
│   └── LICENSE-*.txt
└── robots.txt
```

## Design Tokens

All design tokens are defined in `src/app/globals.css` as CSS custom properties with the `--nml-` prefix:

### Colors
- `--nml-color-neutral-*`: Gray scale (0, 50, 100...1000)
- `--nml-color-bg-*`: Background colors (page, surface, inverse)
- `--nml-color-text-*`: Text colors (primary, secondary, disabled, inverse)
- `--nml-color-action-*`: Button colors

### Typography
- `--nml-type-display-*`: Display text (64/64)
- `--nml-type-headline-*`: Headlines (56/56, 48/56, 32/40)
- `--nml-type-title-*`: Titles (24/32)
- `--nml-type-body-*`: Body text (16/24)
- `--nml-type-label-*`: Labels (16/24, 14/20)
- `--nml-type-mono-*`: Monospace (12/20)

### Spacing
- `--nml-space-*`: 4, 8, 16, 24, 32, 48, 64, 96, 128

### Layout
- `--nml-layout-margin`: 24px
- `--nml-layout-gutter`: 24px
- `--nml-layout-columns`: 12 / 8 / 4 (responsive)
- `--nml-layout-header-height`: 64px

### Controls
- `--nml-control-height-md`: 40px (pointer) / 44px (touch)
- `--nml-control-height-sm`: 32px
- `--nml-radius-sm`: 6px

## Adding a Block

1. Create a new component in `src/components/blocks/`
2. Use design tokens from `globals.css` via CSS variables
3. Use the `page-wrapper` and `grid-container` classes for layout
4. Import and add to the relevant page

Example block structure:

```tsx
export function MyBlock() {
  return (
    <section className="py-[var(--nml-space-96)]">
      <div className="page-wrapper">
        <div className="grid-container">
          {/* Block content */}
        </div>
      </div>
    </section>
  );
}
```

## Internationalization

- Spanish: `/` (default)
- English: `/en/`

Each locale has its own layout with the correct `lang` attribute and hreflang alternates.

## SEO

- Server-rendered pages
- Per-page metadata via Next.js Metadata API
- JSON-LD schema (Organization, WebPage)
- Canonical URLs with hreflang alternates
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`

## Accessibility

- Skip link to main content
- AA contrast (minimum 7.55:1 measured)
- Visible focus states (double ring, 17.2:1 contrast)
- `prefers-reduced-motion` respected
- Semantic HTML with single H1 per page
- 44px touch targets

## Legacy Site

The previous static site is preserved in `legacy/` for reference. It is:
- Excluded from the build via `.vercelignore`
- Blocked in `robots.txt` with `Disallow: /legacy/`
- Not served in production (outside Next.js public/app directories)

## License

Fonts (Inter Tight, JetBrains Mono): SIL Open Font License 1.1
