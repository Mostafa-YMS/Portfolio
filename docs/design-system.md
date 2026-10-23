# Design System

This document defines the design tokens, primitives, and conventions used in this portfolio. Treat these as the source of truth for all new UI. Do not introduce a second styling system.

## Principles

- **Dark-first**: The site defaults to a refined dark palette. A light palette is defined at the token level and is compatible via `prefers-color-scheme`. Dark mode is what is currently exposed.
- **Engineering-focused**: Restrained color, strong hierarchy, generous whitespace, and purposeful motion.
- **Accessible by default**: Meet WCAG AA for text, communicate meaning without relying on color alone, respect `prefers-reduced-motion`, and always provide visible focus states.
- **Composable**: Prefer Server Components and small client islands. Primitives compose via props, not global overrides.
- **Token-driven**: All colors, radii, shadows, and timing come from CSS custom properties in `src/app/globals.css`.

## Tokens

Tokens live in `src/app/globals.css` under `@theme` and `:root` / `@media (prefers-color-scheme: dark)`. Access them via Tailwind color/shadow/radius utilities or `var(...)`.

### Color

| Token              | Purpose                               | Light                    | Dark                     |
| ------------------ | ------------------------------------- | ------------------------ | ------------------------ |
| `--canvas`         | Page background                       | `#f7f7f5`                | `#0b0b0d`                |
| `--canvas-subtle`  | Subtle background regions             | `#f4f4f2`                | `#101012`                |
| `--surface`        | Default cards/sections                | `#ffffff`                | `#141417`                |
| `--surface-raised` | Elevated surfaces/cards               | `#ffffff`                | `#19191d`                |
| `--surface-inset`  | Inset/interactive surfaces            | `#f6f6f4`                | `#101012`                |
| `--overlay`        | Modal/backdrop scrims                 | `rgba(17,17,19,0.4)`     | `rgba(5,5,7,0.6)`        |
| `--ink`            | Primary text                          | `#151513`                | `#f5f5f7`                |
| `--ink-strong`     | Emphasized text/headings              | `#10100d`                | `#ffffff`                |
| `--muted`          | Secondary/supporting text             | `#5f5f57`                | `#b9b9c3`                |
| `--subtle`         | Tertiary/metadata text                | `#7a7a70`                | `#8f8f9b`                |
| `--line`           | Hairline borders/dividers             | `rgba(21,21,19,0.08)`    | `rgba(245,245,247,0.08)` |
| `--line-strong`    | Stronger borders/focus-adjacent rules | `rgba(21,21,19,0.14)`    | `rgba(245,245,247,0.16)` |
| `--accent`         | Interactive accent                    | `#8b8bff`                | `#9b9bff`                |
| `--accent-ink`     | Text on accent surfaces               | `#f7f7ff`                | `#0b0b16`                |
| `--accent-subtle`  | Accent tints/selection                | `rgba(139,139,255,0.16)` | `rgba(155,155,255,0.22)` |
| `--focus`          | Focus ring color                      | `#9b9bff`                | `#b5b5ff`                |
| `--glow`           | Ambient background glow               | `rgba(139,139,255,0.14)` | `rgba(155,155,255,0.24)` |

Tailwind color names (from `@theme inline`): `canvas`, `canvas-subtle`, `surface`, `surface-raised`, `surface-inset`, `overlay`, `ink`, `ink-strong`, `muted`, `subtle`, `line`, `line-strong`, `accent`, `accent-ink`, `accent-subtle`, `success`, `warning`, `focus`, `glow`.

### Typography

Fluid scales are defined in `@theme`. Use the utility classes below for consistency.

| Token/class    | Size (fluid)                    | Weight | Tracking | Line height | Use                                 |
| -------------- | ------------------------------- | ------ | -------- | ----------- | ----------------------------------- |
| `text-display` | `clamp(3.25rem, 10vw, 8rem)`    | 600    | -0.055em | 0.92        | Hero titles, large statements       |
| `text-heading` | `clamp(1.875rem, 4vw, 3rem)`    | 600    | -0.035em | 1.08        | Section titles, card titles         |
| `text-lede`    | `clamp(1.125rem, 2vw, 1.25rem)` | 400    | -0.015em | 1.8         | Intro paragraphs, card descriptions |
| `text-body`    | `1rem`                          | 400    | -0.01em  | 1.8         | Body text, lists                    |
| `text-caption` | `0.875rem`                      | 400    | -0.01em  | 1.6         | Supporting text, form hints         |
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
- **Surfaces**: Prefer `bg-surface` for content, `bg-surface-raised` for elevated cards, `bg-surface-inset` for subtle groups.
- **Don't chase effects**: Avoid large shadows, heavy blurs, glassmorphism, or neon glows outside the subtle ambient glow already defined.

## Demo

A live token and component showcase is available at `/design-system`. It is not indexed by robots (see page metadata) and is intended for development/review only.
