# Content Placeholders To Complete

Replace every `[PLACEHOLDER: ...]` with verified information before publishing. Fields marked **Required** must be filled; **Optional** can be omitted if not applicable. Do **not** invent values.

## Profile (`src/content/profile.ts`)

| Field              | Status   | What to provide                                                                                    |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------- |
| `displayName`      | Required | Your full name as you want it displayed.                                                           |
| `preferredName`    | Optional | Name to use in casual contexts (if different).                                                     |
| `subheadline`      | Optional | One short line that adds context (avoid buzzword stacking).                                        |
| `summary`          | Required | Professional summary. Focus on what you build and who you help. No unverifiable claims or metrics. |
| `location`         | Optional | City/country (e.g., "Cairo, Egypt"). Only include if you want it shown.                            |
| `timezone`         | Optional | IANA timezone (e.g., "Africa/Cairo"). Useful for availability, not required.                       |
| `availability`     | Required | `full-time` \| `contract` \| `freelance` \| `open` \| `unavailable`. Set to reflect reality.       |
| `openToRelocation` | Required | `true`/`false`.                                                                                    |
| `keyStrengths`     | Optional | Replace the 3 placeholders with your actual strengths, or remove items.                            |

## Experience (`src/content/experience.ts`)

Add one entry per role you want to feature (or multiple). You currently have a single placeholder entry.

| Field            | Status   | What to provide                                                                                                |
| ---------------- | -------- | -------------------------------------------------------------------------------------------------------------- |
| `id`             | Required | Stable unique ID (e.g., `exp-acme-2024`).                                                                      |
| `company`        | Required | Verified company name.                                                                                         |
| `role`           | Required | Your job title.                                                                                                |
| `startDate`      | Required | `YYYY-MM` or `YYYY`.                                                                                           |
| `endDate`        | Optional | Omit or leave undefined if `current: true`. Use `YYYY-MM`/`YYYY` if ended.                                     |
| `current`        | Required | `true` if ongoing.                                                                                             |
| `location`       | Optional | Location or "Remote".                                                                                          |
| `locationType`   | Optional | `onsite` \| `hybrid` \| `remote`.                                                                              |
| `summary`        | Optional | Brief role summary. Avoid metrics.                                                                             |
| `highlights[]`   | Required | Concrete, verifiable responsibilities/actions. Set `verified: true` only when confirmed. Replace placeholders. |
| `technologies[]` | Optional | Technologies you actually used in this role.                                                                   |

## Projects (`src/content/projects.ts`)

Add real projects. You currently have a single placeholder entry. For each project:

| Field              | Status   | What to provide                                                                                                                                     |
| ------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`               | Required | Stable unique ID.                                                                                                                                   |
| `slug`             | Required | Kebab-case, stable for routes (e.g., `presentation-editor`). Never change after publishing.                                                         |
| `title`            | Required | Project name.                                                                                                                                       |
| `shortDescription` | Required | 1-2 sentence description of problem/context and approach. No unverifiable outcomes.                                                                 |
| `longDescription`  | Optional | Longer description for case study page.                                                                                                             |
| `year`             | Optional | Year of project/release.                                                                                                                            |
| `role`             | Optional | Your role (e.g., "Frontend Engineer").                                                                                                              |
| `team`             | Optional | "Solo" or team context.                                                                                                                             |
| `category`         | Optional | `web-app` \| `ai` \| `editor` \| `design-system` \| `internal` \| `other`.                                                                          |
| `stack`            | Required | Technologies used.                                                                                                                                  |
| `links[]`          | Optional | Add only if you have permission to share. For `confidential: true`, prefer no public links. Use `type`: `live` \| `repo` \| `case-study` \| `demo`. |
| `media[]`          | Optional | Screenshots. Provide accurate `alt` text. Only add images you have rights to use.                                                                   |
| `featured`         | Required | `true` to surface on home page.                                                                                                                     |
| `confidential`     | Required | `true` if code/details cannot be public.                                                                                                            |
| `hasPublicRepo`    | Required | `true` only if repo is public and shareable.                                                                                                        |
| `hasLiveDemo`      | Required | `true` only if live demo is public and shareable.                                                                                                   |
| `highlights[]`     | Optional | Verified highlights. Mark `verified: true/false`.                                                                                                   |
| `challenge`        | Optional | Verifiable problem statement.                                                                                                                       |
| `approach`         | Optional | Your decisions/techniques.                                                                                                                          |
| `learnings`        | Optional | Lessons learned (optional, avoid self-congratulatory metrics).                                                                                      |
| `verified`         | Required | `true` only if all content for this project is verified and safe to publish.                                                                        |

## Skills (`src/content/skills.ts`)

The list is pre-populated based on your background. Review and adjust:

| Field         | Status   | What to provide                                             |
| ------------- | -------- | ----------------------------------------------------------- |
| `name`        | Required | Skill name.                                                 |
| `category`    | Required | See `SkillCategory` in `types.ts`.                          |
| `proficiency` | Optional | `expert` \| `proficifient` \| `familiar`. Only if accurate. |
| `featured`    | Required | `true` to emphasize.                                        |

## Education & Certifications (`src/content/education.ts`)

Currently empty. Add only if verified:

| Field              | Status   | What to provide                                                                                   |
| ------------------ | -------- | ------------------------------------------------------------------------------------------------- |
| **Education**      | Optional | `institution`, `degree`, `field`, `startYear`/`endYear`, `location`, `verified: true`.            |
| **Certifications** | Optional | `name`, `issuer`, `issuedDate`, `expiresDate`, `credentialId`, `credentialUrl`, `verified: true`. |

---

## Contact & Links (`src/content/contact.ts`)

| Field | Status | What to provide |
| --- : | --- | --- |
| `contactMethods[]` email | Required | Your professional email address. Replace `mailto:[PLACEHOLDER: EMAIL_ADDRESS]` with the actual address. |
| `contactMethods[]` location | Optional | Location if you want it displayed. |
| `externalLinks[]` github | Required (if used) | Full GitHub URL and handle. |
| `externalLinks[]` linkedin | Required (if used) | Full LinkedIn URL and handle. |
| `externalLinks[]` other platforms | Optional | Add if desired (X/Bluesky/Mastodon/Medium/Devto/Stack Overflow/website). Only add verified URLs. |
| `resumeMetadata.filePath` | Required | Path to resume in `public/` (currently `/resume.pdf`). Put the actual file there. |
| `resumeMetadata.filename` | Required | Download filename (e)g., `Mostafa-Firstname-Lastname-Resume.pdf).}$ }{i; }$| |\(\]\)}\n| `resumeMetadata.version`/`lastUpdated` | Optional | Track versioning if desired. |

## Action items checklist

- [ ] Replace all `[PLACEHOLDER: YOUR_FULL_NAME]` etc. in `src/content/profile.ts`.
- [ ] Replace all placeholders in `src/content/experience.ts` or add new verified entries.
- [ ] Add real projects to `src/content/projects.ts` with stable slugs; mark confidential ones correctly.
- [ [ ] Add verified education/certifications to `src/content/education.ts` if any, or leave empty.
- [ ] Update `src/content/contact.ts` with real email, links, and put resume at `public/resume.pdf`.
- [ ] Review `src/content/skills.ts` and adjust featured/proficiency as needed.
- [ ] Search the repo for `[PLACEHOLDER` to ensure nothing remains before publication: `rg "\[PLACEHOLDER" src/content docs`.
- [ ] Run `pnpm typecheck` after filling in content.
- [ ] Only mark `verified: true` for facts you can confirm. Omit unverifiable claims/metrics.
- [ ] Ensure no confidential business details or secrets are committed.

**Reminder:** The site will render only what exists in these files. Empty arrays and omitted optional fields are fine; placeholders are not real content.
