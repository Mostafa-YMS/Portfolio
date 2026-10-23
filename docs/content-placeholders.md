# Portfolio Content Completion Checklist

The portfolio content has been populated from the professional details and resume provided. Review these items before publication.

## Required before launch

- [ ] Confirm the public headline, summary, and availability status.
- [ ] Confirm that "Wakeb_data" is the employer name you want displayed publicly.
- [ ] Review each role, responsibility, date, and metric for accuracy.
- [ ] Review each project description and contribution for accuracy and confidentiality.
- [ ] Confirm which sanitized case studies may be published. Proprietary projects should remain excluded from the sitemap and use noindex metadata.
- [ ] Add the provided resume PDF as `public/resume.pdf`, then set `resumeMetadata.filePath` to `/resume.pdf` and `filename` to `Mostafa-Youssef-Resume.pdf` in `src/content/contact.ts`.
- [ ] Confirm the public email address `mostafa.youssef.dev@gmail.com`.
- [ ] Confirm the CS50x issuer/date and other certification details against the original credentials.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the actual production URL before deployment.
- [ ] Confirm whether you want your phone number displayed. It is present in the supplied resume but has not been added to the website.
- [ ] Add your LinkedIn profile URL if you want it linked publicly.

## Optional improvements

- [ ] Add approved project screenshots with accurate alt text.
- [ ] Add public demos or repositories only when the links are real and safe to share.
- [ ] Add certificate verification links if available.
- [ ] Add verifiable project outcomes only when you can substantiate and are permitted to disclose them.

## Content source of truth

- `src/content/profile.ts` — headline, summary, location, focus areas, strengths.
- `src/content/experience.ts` — employment history.
- `src/content/projects.ts` — sanitized project descriptions and case studies.
- `src/content/skills.ts` — categorized technical skills.
- `src/content/education.ts` — education and certifications.
- `src/content/contact.ts` — contact methods, public links, and resume metadata.
- `src/content/highlights.ts` — engineering highlights.

## Integrity and privacy

- Do not invent employers, titles, dates, metrics, users, revenue, education, certifications, or outcomes.
- Distinguish personal contributions from team contributions.
- Keep proprietary code, internal URLs, credentials, customer data, and confidential product details out of the public repository.
- Use `confidential: true` for proprietary projects and omit public repository/demo links unless explicitly authorized.
- Omit unknown optional fields instead of publishing placeholders.
- Do not mark unverified claims as verified.

## Verification

Review the configured GitHub Actions workflow and run the available project checks before merging:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

Search for leftover placeholders with:

```bash
rg "\\[PLACEHOLDER" src/content
```

Review any remaining matches before publication. Some component code intentionally handles placeholders; content data should not contain unfinished public copy.
