# Portfolio

Personal portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Hero section with availability, CTAs, and specialties
- Featured projects with case study pages (`/projects/[slug]`)
- Professional experience timeline
- Technical skills organized by category
- Engineering highlights with problem/approach/trade-offs
- Contact section with email and external links
- Resume download (local PDF or configured URL)
- Responsive design, dark-first theme, accessibility-focused
- Static generation with Next.js 16 Cache Components

## Setup

### Prerequisites

- Node.js 24+
- pnpm

### Installation

```bash
pnpm install
```

### Environment variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Required for production:

- `NEXT_PUBLIC_SITE_URL` - Your production domain (e.g., https://yourdomain.com)

For contact form (optional, email fallback always available):

- See `.env.example` for Resend, SendGrid, webhook, and spam protection options

### Development

```bash
pnpm dev
```

### Build & verify

```bash
pnpm lint
pnpm typecheck
pnpm build
```

### Testing

```bash
# Run unit and component tests
pnpm test

# Run tests in watch mode
pnpm test:watch
```

## Content

All content is in `src/content/` with TypeScript types. Replace placeholders with verified information:

- `profile.ts` - Name, headline, summary
- `contact.ts` - Email, external links, resume metadata
- `experience.ts` - Work history
- `projects.ts` - Projects and case studies
- `skills.ts` - Technical skills
- `highlights.ts` - Engineering highlights

See `docs/content-placeholders.md` for a complete checklist.

## Resume

Place your resume PDF at `public/resume.pdf` or update `resumeMetadata.filePath` in `src/content/contact.ts`. The resume button appears only when a valid resume is configured.

## Contact Form

The contact form requires server-side configuration. Options:

1. **Resend** - Add `RESEND_API_KEY`, `CONTACT_FORM_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL`
2. **SendGrid** - Add `SENDGRID_API_KEY`, `CONTACT_FORM_FROM_EMAIL`, `CONTACT_FORM_TO_EMAIL`
3. **Webhook** - Add `CONTACT_FORM_WEBHOOK_URL`

Spam protection (recommended):

- Cloudflare Turnstile: `TURNSTILE_SECRET_KEY`
- Google reCAPTCHA: `RECAPTCHA_SECRET_KEY`
- Honeypot field (built-in)

A direct email link is always available as fallback.

## License

MIT
