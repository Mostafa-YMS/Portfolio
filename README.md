# Portfolio

A personal portfolio website for a frontend engineer, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Project Overview

This is a static-first portfolio showcasing professional experience, featured projects with case studies, technical skills, and engineering highlights. Content is managed through typed data files for easy updates without modifying UI components.

## Purpose

The portfolio demonstrates production frontend engineering work, including React/Next.js applications, design systems, internationalization, AI-powered interfaces, and complex interactive workflows.

## Key Features

- **Hero section** - Introduction with availability status and call-to-action links
- **Featured projects** - Project cards with links to detailed case studies at `/projects/[slug]`
- **Project case studies** - Structured pages covering problem, approach, trade-offs, and contributions
- **Professional experience** - Timeline of work history with engineering contributions
- **Technical skills** - Categorized skills emphasizing core strengths
- **Engineering highlights** - Concrete examples of technical problem-solving
- **Contact section** - Email, professional links, and contact form with validation
- **Resume** - Configurable PDF download
- **SEO** - Sitemap, robots.txt, canonical URLs, Open Graph metadata
- **Accessibility** - Semantic HTML, keyboard navigation, focus states, reduced motion support
- **Responsive design** - Mobile-first, works across screen sizes
- **Dark-first theme** - With light mode compatibility

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) 16.4.2 (App Router, Cache Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/) 5.9.3 (strict mode)
- **UI:** [React](https://react.dev/) 19.3.0
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) 4.3.3
- **Fonts:** [Geist](https://vercel.com/font) (via next/font)
- **Package Manager:** pnpm 11.12.0
- **Node:** >= 24.0.0

## Project Architecture

```
src/
├── app/              # Next.js App Router pages and routes
│   ├── api/contact/  # Contact form API route
│   ├── projects/     # Project case study pages
│   └── layout.tsx    # Root layout
├── components/       # React components
│   ├── ui/           # Reusable UI primitives
│   ├── layout/       # Header, footer, navigation
│   ├── projects/     # Project-related components
│   └── ...
├── content/          # Typed content data
│   ├── types.ts      # TypeScript type definitions
│   ├── profile.ts    # Profile information
│   ├── projects.ts   # Project data
│   └── ...
└── lib/              # Utilities and helpers
```

Content and UI are separated - update `src/content/` to change portfolio data without modifying components.

## Installation

### Prerequisites

- Node.js 24 or higher
- pnpm

### Install dependencies

```bash
pnpm install
```

## Local Development

```bash
# Start development server
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variable Configuration

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Configure required variables:

**Required:**
- `NEXT_PUBLIC_SITE_URL` - Production site URL for canonical links and sitemap (e.g., `https://yourdomain.com`)

**Optional (for contact form):**
See `.env.example` for configuration options:
- Resend API key and email addresses
- SendGrid API key and email addresses
- Custom webhook URL
- Spam protection (Cloudflare Turnstile, reCAPTCHA)
- Honeypot field name

**Important:** Server-side secrets (API keys) must never be exposed to client-side code. The `NEXT_PUBLIC_` prefix is only for values safe to expose to the browser.

## Production Build

```bash
# Run linting
pnpm lint

# Type check
pnpm typecheck

# Build for production
pnpm build

# Start production server
pnpm start
```

The build outputs static pages where possible and uses server rendering for the contact API route.

## Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

Tests use Vitest and React Testing Library.

## Deployment Guidance

This is a Next.js App Router application that can be deployed to platforms supporting Next.js:

- [Vercel](https://vercel.com/) - Recommended, zero-config deployment
- [Netlify](https://netlify.com/)
- [Railway](https://railway.app/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

**Deployment steps:**
1. Push repository to Git provider
2. Import project to hosting platform
3. Set environment variables (at minimum `NEXT_PUBLIC_SITE_URL`)
4. Deploy

Ensure `NEXT_PUBLIC_SITE_URL` is set to your actual production domain for correct canonical URLs and sitemap generation.

## Asset and Resume Configuration

### Resume
Place your resume PDF at `public/resume.pdf`, or update `resumeMetadata` in `src/content/contact.ts` to point to a different path or URL. The resume download button only appears when a valid resume is configured.

### Images
Project images can be added to `public/projects/` and referenced in `src/content/projects.ts`. Use descriptive alt text for accessibility.

### Favicon
Add your favicon to `src/app/` or `public/` following Next.js conventions.

## Contact Information Placeholders

Contact details are managed in `src/content/contact.ts` and `src/content/profile.ts`. Replace placeholders with actual information:
- Email address
- Professional social links (GitHub, LinkedIn, etc.)
- Location (optional)

## License

No license file has been added to this repository.
