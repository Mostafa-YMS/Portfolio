# Portfolio Content Completion Checklist

The initial portfolio content has been populated from information currently available. Before publishing, review the following items and confirm they accurately represent your work.

## Required before launch

- [ ] Confirm the public headline and professional summary.
- [ ] Confirm that "Open to opportunities" accurately reflects your current situation.
- [ ] Add your verified employment history: exact job titles, company names you are permitted to disclose, dates, and work arrangement.
- [ ] Review each project description and contribution for accuracy and confidentiality.
- [ ] Confirm which sanitized case studies may be published. Project pages currently marked confidential are excluded from the sitemap and use noindex metadata.
- [ ] Add your actual resume PDF to `public/` and configure `resumeMetadata` in `src/content/contact.ts`.
- [ ] Confirm the professional email address in `src/content/contact.ts`.
- [ ] Confirm that the CS50x certificate entry uses the issuer/name you want shown; add a credential URL or date only if you have them.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the actual production URL before deployment.

## Optional improvements

- [ ] Add approved project screenshots with accurate alt text.
- [ ] Add public demos or repositories only when the links are real and safe to share.
- [ ] Add verified education details if you want to include them.
- [ ] Add additional professional links only when you actively use those profiles.
- [ ] Add verifiable project outcomes or metrics only when you can substantiate and are permitted to disclose them.

## Content source of truth

- `src/content/profile.ts` — headline, summary, focus areas, strengths.
- `src/content/experience.ts` — employment history (currently empty until exact details are verified).
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

Run the project's checks before merging:

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

Review any remaining matches before publication. Some component code intentionally handles placeholders; the content data itself should not contain unfinished public copy.
