# Content Model Guide

All portfolio content lives in `src/content/`. UI components must import from here rather than hardcoding personal details. This keeps copy separate, type-safe, and prevents accidental publication of incomplete data.

## Principles

- **Separation of concerns**: Content ≠ presentation. Components read from `src/content/index.ts`.
- **Type safety**: All shapes are enforced by TypeScript in `src/content/types.ts`. Invalid data will fail `pnpm typecheck`.
- **Placeholders are explicit**: Missing personal details use `[PLACEHOLDER: ...]` markers so they are easy to find and cannot be mistaken for real data.
- **Verification flag**: Use `verified: true` only for facts you can confirm. Leave `verified: false` or omit unverifiable claims.
- **No invented facts**: Do not add company names, dates, education, certifications, metrics, users, revenue, or outcomes unless you provide them. The templates do not guess.
- **Confidential projects**: Set `confidential: true`, `hasPublicRepo: false`, and only add `links` if you have permission to share them. Do not expose internal URLs, credentials, or business details.
- **Stable routes**: Projects use `slug` (kebab-case). Never change slugs after publishing to avoid breaking links.
- **Optional without placeholders**: If a field is optional and unknown, omit it entirely rather than rendering an empty string/placeholder in UI.

## Files

| File                        | Purpose                                                                          |
| --------------------------- | -------------------------------------------------------------------------------- |
| `src/content/types.ts`      | All TypeScript types and unions. Update types here if the model needs to evolve. |
| `src/content/profile.ts`    | Professional profile, positioning, languages, focus areas, strengths.            |
| `src/content/experience.ts` | Career history. Each entry has `highlights` with `verified` flags.               |
| `src/content/projects.ts`   | Project entries. Supports confidential projects and flexible links.              |
| `src/content/skills.ts`     | Technical skills grouped by category.                                            |
| `src/content/education.ts`  | Education and certifications (empty until verified data is provided).            |
| `src/content/contact.ts`    | Contact methods, external links, resume metadata.                                |
| `src/content/index.ts`      | Barrel export for convenient imports.                                            |

## Usage

```ts
import { profile, projects, experiences } from "@/content";
// or
import type { Project } from "@/content";
```

### Adding a project

1. Create a stable kebab-case `slug` (e.g., `ai-chat-interface`).
2. Set `confidential: true` if code is not public or details are sensitive.
3. Set `hasPublicRepo`/`hasLiveDemo` correctly. If `confidential` or private, omit or avoid public links.
4. Add only verified `highlights`. Mark each as `verified: true/false`.
5. Leave optional fields undefined if unknown. Do not invent outcomes.
6. Set `featured: true` only for projects you want surfaced on the home page.

### Adding experience

1. Use ISO-like dates: `YYYY-MM` or `YYYY`. Set `current: true` if ongoing.
2. Each highlight must be a concrete, verifiable action/responsibility.
3. Keep `technologies` to items you actually used.
4. Avoid metrics (users, performance %, revenue). Only include them if you have written permission and verified numbers.

### Skills

Group by category. Mark `featured: true` for skills you want emphasized in the hero/toolbox. Do not inflate proficiency; use `proficient`/`expert` only when accurate.

## Placeholders to complete

See **[docs/content-placeholders.md](./content-placeholders.md)** for the complete checklist of every placeholder you must replace before publication. The build will not fail on placeholders, but they must be removed and replaced with verified information.

## Safety notes

- Never commit secrets, private API keys, internal URLs, or confidential client names/details.
- Do not add testimonials without explicit written permission.
- Resume goes in `public/resume.pdf` as referenced by `resumeMetadata.filePath`. Ensure the filename matches.
- If in doubt, omit the field rather than guessing.
- All `verified` flags default to assumptions of unverified until you change them.
