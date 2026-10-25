# Design System

This document defines the design tokens, primitives, and conventions used in this portfolio. Treat these as the source of truth for all new UI. Do not introduce a second styling system.

## Principles

- **System-aware theme**: Refined light and dark palettes are defined at the token level and switch automatically via `prefers-color-scheme`.
- **Engineering-focused**: Strong hierarchy, generous whitespace, a consistent brand accent across content sections, and purposeful motion.
- **Accessible by default**: Meet WCAG AA for text, communicate meaning without relying on color alone, respect `prefers-reduced-motion`, and always provide visible focus states.
- **Composable**: Prefer Server Components and small client islands. Primitives compose via props, not global overrides.
- **Token-driven**: All colors, radii, shadows, and timing come from CSS custom properties in `src/app/globals.css`.

## Tokens

Tokens live in `src/app/globals.css` under `@theme` and `:root` / `@media (prefers-color-scheme: dark)`. Access them via Tailwind color/shadow/radius utilities or `var(...)`.

### Color

| Token              | Purpose                               | Light                  | Dark                     |
| ------------------ | ------------------------------------- | ---------------------- | ------------------------ |
| `--canvas`         | Page background                       | `#f8f7fb`              | `#08080c`                |
| `--canvas-subtle`  | Subtle background regions             | `#f1f0f7`              | `#0d0d13`                |
| `--surface`        | Default cards/sections                | `#ffffff`              | `#121218`                |
| `--surface-raised` | Elevated surfaces/cards               | `#ffffff`              | `#181820`                |
| `--surface-inset`  | Inset/interactive surfaces            | `#f5f4fa`              | `#0c0c11`                |
| `--overlay`        | Modal/backdrop scrims                 | `rgba(17,17,19,0.4)`   | `rgba(5,5,7,0.65)`       |
| `--ink`            | Primary text                          | `#16161c`              | `#f7f7fb`                |
| `--ink-strong`     | Emphasized text/headings              | `#0c0c12`              | `#ffffff`                |
| `--muted`          | Secondary/supporting text             | `#4e4e5a`              | `#c4c4d0`                |
| `--subtle`         | Tertiary/metadata text                | `#666674`              | `#a2a2b2`                |
| `--line`           | Hairline borders/dividers             | `rgba(22,22,28,0.10)`  | `rgba(247,247,251,0.12)` |
| `--line-strong`    | Stronger borders/focus-adjacent rules | `rgba(22,22,28,0.20)`  | `rgba(247,247,251,0.22)` |
| `--accent`         | Interactive accent                    | `#1d4ed8`              | `#60a5fa`                |
| `--accent-ink`     | Text on accent surfaces               | `#ffffff`              | `#07101f`                |
| `--accent-subtle`  | Accent tints/selection                | `rgba(29,78,216,0.12)` | `rgba(96,165,250,0.20)`  |
| `--success`        | Success states                        | `#047857`              | `#4ade80`                |
| `--warning`        | Warning states                        | `#a16207`              | `#fbbf24`                |
| `--danger`         | Error states                          | `#b91c1c`              | `#f87171`                |
| `--focus`          | Focus ring color                      | `#2563eb`              | `#93c5fd`                |
| `--glow`           | Ambient background glow               | `rgba(29,78,216,0.14)` | `rgba(96,165,250,0.28)`  |

Tailwind color names (from `@theme inline`): `canvas`, `canvas-subtle`, `surface`, `surface-raised`, `surface-inset`, `overlay`, `ink`, `ink-strong`, `muted`, `subtle`, `line`, `line-strong`, `accent`, `accent-ink`, `accent-subtle`, `success`, `warning`, `danger`, `focus`, `glow`, `tone-blue`, `tone-blue-2`.

### Section tones

The portfolio uses a single blue brand tone. Add `tone-blue` to each `.section-shell` wrapper, including the hero. Gradients stay within the same hue by pairing `--tone-blue` with `--tone-blue-2`. Cards inherit the nearest `--section-accent`; do not add per-card accent tones.

| Tone class    | Light     | Dark      | Used by                                      |
| ------------- | --------- | --------- | -------------------------------------------- |
| `tone-blue`   | `#1d4ed8` | `#60a5fa` | Hero, all content sections, case studies     |
| `tone-blue-2` | `#3b82f6` | `#93c5fd` | Gradient endpoint for accents and highlights |

Tone-aware helpers: `.section-shell`, `.section-eyebrow`, `.section-title`, `.tone-chip`, `.focus-tile`, `.specialty-chip`, `.card-surface`, `.card-surface-raised`, `.card-hover`, `.highlight-item`, `.detail-item`, `.outcome-panel`, `.timeline-dot`.

### Typography

Fluid scales are defined in `@theme`. Use the utility classes below for consistency.

| Token/class    | Size (fluid)                    | Weight | Tracking | Line height | Use                                 |
| -------------- | ------------------------------- | ------ | -------- | ----------- | ----------------------------------- |
| `text-display` | `clamp(3.25rem, 10vw, 8rem)`    | 600    | -0.055em | 0.92        | Hero titles, large statements       |
| `text-heading` | `clamp(1.875rem, 4vw, 3rem)`    | 600    | -0.035em | 1.08        | Section titles, card titles         |
| `text-lede`    | `clamp(1.125rem, 2vw, 1.25rem)` | 400    | -0.015em | 1.8         | Intro paragraphs, card descriptions |
| `text-body`    | `1rem`                          | 400    | -0.01em  | 1.8         | Body text, lists                    |
| `text-caption` | `0.875rem`                      | 400    | -0.01em  | 1.6         | Supporting text, metadata           |
| `text-eyebrow` | `0.75rem`                       | 500    | 0.16em   | 1.4         | Overline labels                     |
| `text-micro`   | `0.8125rem`                     | 500    | 0.14em   | 1.6         | Metadata, tags, tiny labels         |
| `font-mono`    | —                               | —      | —        | —           | Labels, metadata, code snippets     |

Utility helpers: `text-balance` (headings/hero), `text-pretty` (paragraphs).

### Spacing & containers

**Containers** (`src/components/ui/container.tsx`): `size` options are `narrow` (48rem), `default` (72rem), `wide` (88rem), `full`. Padding is responsive: `px-4 xs:px-5 sm:px-6 lg:px-8 xl:px-10`. Always center with `mx-auto w-full`.

**Sections** (`src/components/ui/section.tsx`): `spacing` options are `compact` (`py-10 sm:py-14 lg:py-16`), `default` (`py-14 sm:py-20 lg:py-24`), `generous` (`py-20 sm:py-28 lg:py-36`), `hero` (`pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36`). Use `Section` with a `Container` inside it.

### Radii, shadows, transitions

| Token/utility     | Value                             | Use                                             |
| ----------------- | --------------------------------- | ----------------------------------------------- |
| `rounded-sm`      | 0.375rem                          | Subtle inputs, small elements                   |
| `rounded-md`      | 0.5rem                            | Buttons/inputs in tight contexts                |
| `rounded-lg`      | 0.75rem                           | Tags, list items                                |
| `rounded-xl`      | 1rem                              | Medium cards/lists                              |
| `rounded-2xl`     | 1.25rem                           | Primary cards, panels                           |
| `rounded-pill`    | 9999px                            | Buttons, pills, badges                          |
| `shadow-soft`     | `var(--shadow-soft)`              | Elevated surfaces, primary buttons              |
| `shadow-elevated` | `var(--shadow-elevated)`          | Stronger elevation when needed                  |
| `duration-fast`   | 150ms                             | Micro interactions                              |
| `duration-medium` | 200ms                             | Default transitions (color, background, border) |
| `duration-slow`   | 320ms                             | Larger motions (rare)                           |
| `ease-out`        | `cubic-bezier(0.25,0.8,0.25,1)`   | Default easing                                  |
| `ease-spring`     | `cubic-bezier(0.25,0.8,0.25,1.2)` | Subtle springy motion (use sparingly)           |

### Motion

Motion is CSS-first and progressive:

- **Scroll reveal**: add `data-reveal` to a section header or card and optionally `style={revealDelay(index)}` for stagger. `RevealOnScroll` marks below-the-fold elements as pending after hydration and reveals them with `IntersectionObserver`. Content is visible without JavaScript.
- **Ambient motion**: hero orbs, showcase drift, section eyebrow pulses, timeline pings, and the hero gradient use slow, low-amplitude keyframes. Avoid adding more than one continuous animation to a single element.
- **Interaction motion**: cards lift and gain a tone glow on hover, chips nudge upward, buttons run a single shine sweep, and timeline dots pulse.
- **Reduced motion**: the global `prefers-reduced-motion` block disables reveal animations, ambient loops, and transitions. Never gate content behind motion.
- **Stagger**: use `revealDelay(index)` from `src/lib/tone.ts` with a 70ms step; keep groups under ~500ms total.

## Primitives

All primitives are Server Components unless marked otherwise. Use them as-is and compose via props.

### Button (`src/components/ui/button.tsx`)

Variants: `primary`, `secondary`, `subtle`, `ghost`. Sizes: `sm`, `md`, `lg`. Defaults: `variant="secondary"`, `size="md"`.

| Variant     | Style                                             | Use case                    |
| ----------- | ------------------------------------------------- | --------------------------- |
| `primary`   | Accent background, accent-ink text, soft shadow   | High-signal actions (CTA)   |
| `secondary` | Surface background, hairline border, ink text     | Default actions             |
| `subtle`    | Transparent background, muted text, hover surface | Low-emphasis actions        |
| `ghost`     | Transparent background, muted text, subtle hover  | Inline/actions in dense UIs |

Always provide a visible focus ring (`focus-visible:ring-focus`) and respect disabled state. Never rely on color alone to signal state (disabled uses opacity and `pointer-events-none`).

### Card (`src/components/ui/card.tsx`)

Variants: `default`, `raised`, `subtle`, `outline`. Padding: `compact` (`p-5 sm:p-6`), `default` (`p-6 sm:p-8`), `spacious` (`p-7 sm:p-10 lg:p-12`). Default: `variant="default"`, `padding="default"`.

Subcomponents: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`. `CardTitle` uses `text-heading`; `CardDescription` uses `text-lede` and `text-muted`.

### SectionHeading (`src/components/ui/section-heading.tsx`)

`SectionHeading`: `eyebrow`, `title`, `description`, `align="left"|"center"`. `PageHeading`: same but uses `text-display` for `title`. Use `font-mono text-micro uppercase` for eyebrow/micro labels.

### Layout primitives

Use `SkipLink` (`src/components/layout/skip-link.tsx`) at the top of `body`. Use `Container` and `Section` to maintain consistent rhythm.

## Accessibility

- **Contrast**: Semantic tokens are chosen to meet WCAG AA. Use `text-ink` for primary, `text-muted` for secondary, `text-subtle` for tertiary.
- **Color independence**: Icons and text must not be the only way to convey status. Use text labels or patterns alongside color.
- **Focus**: Global `:focus-visible` uses `var(--focus)`, offset, and rounded corners. Interactive primitives add `focus-visible:ring-2` and `ring-offset-canvas`.
- **Motion**: `@media (prefers-reduced-motion: reduce)` disables smooth scroll, animations, and transitions. Keep motion durations small (`150-200ms`) and functional (hover/focus) rather than decorative looping.
- **Keyboard**: All interactive elements are focusable and use semantic tags. Buttons use `<button>` (not `<div>`), links use `<a>`.
- **Semantic structure**: One `h1` per page, logical heading hierarchy, landmarks (`main`, `header`, `footer`), `lang="en"`.
- **Text size**: Fluid type scales, `-webkit-text-size-adjust: 100%`, readable line lengths via container sizes.

## Usage guidelines

- **Composition**: Build new components by composing primitives rather than duplicating styles.
- **Client boundaries**: Keep primitives as Server Components. Only mark components as `"use client"` if they require state, event handlers, or browser APIs. Keep them small and leaf-level.
- **Tailwind first**: Use utilities with token colors; avoid hardcoded hex values unless they are part of a token definition.
- **Borders**: Use `hairline` (thin `var(--line)`) for subtle separation and `hairline-strong` for stronger emphasis.
- **Surfaces**: Use `Card` variants (`default`, `raised`, `subtle`, `outline`) so tone-aware borders and backgrounds stay consistent.
- **Section color**: Wrap each content section in `.section-shell tone-blue`. Keep the blue accent across the hero and all content sections; use `--tone-blue-2` only for same-hue gradient endpoints. Section shells are flat wrappers: borders, backgrounds, and elevation belong to cards only.
- **Purposeful effects**: Glows, gradients, and motion should reinforce hierarchy or interaction. Avoid stacking multiple ambient animations on one element, and keep body copy on solid surfaces.

## Demo

A live token and component showcase is available at `/design-system`. It is not indexed by robots (see page metadata) and is intended for development/review only.
