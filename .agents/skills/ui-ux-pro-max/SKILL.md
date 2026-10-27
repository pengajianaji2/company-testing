---
name: ui-ux-pro-max
description: UI/UX design intelligence for web, mobile, and desktop interfaces. Use this skill whenever the user asks to design, build, redesign, review, polish, or fix any interface - landing pages, dashboards, components, design systems, forms, navigation, charts, animations, responsive layouts, dark mode, typography, color, or accessibility - even if they never say "UI" or "UX". It generates a project design system (style, palette, type, spacing, motion), applies a 10-tier priority rule set with accessibility first, and runs a pre-delivery checklist before handing back UI code. Skip for pure backend, API, database, infrastructure, or other non-visual work. Inside a Skill Factory project (docs/prd.md exists) it acts as a design-intelligence helper for prd-to-design, code-development and review-code, and never bypasses their approval gates.
---

# UI/UX Pro Max - Antigravity Edition

Design intelligence for building professional interfaces. Adapted for Google Antigravity from the MIT-licensed `nextlevelbuilder/ui-ux-pro-max-skill` (see `NOTICE.md`).

Reply in the language the user writes in. Keep code, tokens, and file names in English.

**Skill Factory projects:** if `docs/prd.md` or `docs/project-config.md` exists, Section 7 overrides any conflicting step below.

## 0. Operating mode (decide once, at the start)

Check whether `scripts/search.py` exists in this skill's own folder. Resolve the folder as `<workspace>/.agents/skills/ui-ux-pro-max/` first, then `<workspace>/.agent/skills/ui-ux-pro-max/`, then `~/.gemini/antigravity/skills/ui-ux-pro-max/`.

- **Database mode** - `scripts/search.py` and its data files are present. Use the search commands in `references/domain-lookup.md`. Always call the script by its full resolved path, and try `python`, then `python3`, then `py -3`.
- **Native mode** - the script is absent (the default for this package). Do the same work by reasoning from `references/`. Follow the same steps and produce the same outputs.

Honesty rule: in Native mode never say the searchable database, the 79-style catalog, or template search is active. Say the guidance comes from the bundled reference rules.

## 1. When to apply

Apply when the task changes how something **looks, feels, moves, or is interacted with**: new pages, components, design systems, color/type/spacing/layout decisions, navigation, animation, responsive behavior, UI review for UX/accessibility/consistency.

Skip for backend logic, API or database design, non-visual performance work, DevOps, or scripts with no visual output.

## 2. Workflow

### Step 1 - Analyze the request
Extract: product type (SaaS, e-commerce, portfolio, dashboard, entertainment, tool, productivity, hybrid), audience and usage context, style keywords (minimal, playful, dark, content-first, immersive), and stack.

Detect the stack from the project: `package.json` (react, next, vue, svelte, nuxt, @angular, astro), `pubspec.yaml` (Flutter), `Package.swift` or `*.xcodeproj` (SwiftUI), `composer.json` (Laravel), `app.json` plus `react-native` (React Native). If nothing is detectable and stack guidance matters, ask the user. Never assume a default stack.

### Step 2 - Generate the design system (required for any new page or project)
Produce one coherent direction covering: page pattern, visual style, color tokens, typography pair, effects, spacing scale, and anti-patterns to avoid.
- Database mode: run `--design-system` (see `references/domain-lookup.md`).
- Native mode: follow `references/design-system-method.md`.

Optional dials (1-10): `variance` (centered to bold/asymmetric), `motion` (subtle to choreographed), `density` (spacious to dashboard-dense). Mapping is in `references/design-system-method.md`. Leave a dial unset unless the user asks or the product clearly implies it.

For a significant build, write the design system and page plan as an **implementation plan artifact** and wait for the user's go-ahead before generating many files.

### Step 3 - Persist (Master + Overrides)
Save the system so later sessions stay consistent:
- `design-system/<project-slug>/MASTER.md` - global source of truth (start from `assets/MASTER.template.md`)
- `design-system/<project-slug>/pages/<page>.md` - page-specific overrides

Rules: read an existing `MASTER.md` before touching anything. Never overwrite it without explicit user authorization, because it may hold decisions the user or a teammate made. When building a page, read Master, then the page override if it exists (the override wins), otherwise Master only. Do not persist output you have not verified.

### Step 4 - Targeted lookups (as needed)
Pick the smallest lookup that fits: a focused concern uses one domain (ux, style, color, typography, chart, landing, icons, gsap, react, web); a known stack uses that stack's guidance. Domain and stack tables are in `references/domain-lookup.md`.

### Step 5 - Implement
Synthesize the design system and lookups, then write the code. Use semantic tokens (CSS variables or theme config), never raw hex or magic numbers inside components. Use SVG icons from one consistent set; never emoji as icons.

### Step 6 - Verify before delivering
Run `references/pre-delivery-checklist.md`. If a browser tool is available, open the result and check widths 375, 768, and 1280, light and dark mode, keyboard-only navigation, and reduced-motion. Attach screenshots to the walkthrough. Report any checklist item you could not verify instead of silently skipping it.

## 3. Priority rules (summary)

Work top-down; fix higher tiers before polishing lower ones. Full checks and anti-patterns: `references/priority-rules.md`.

| # | Category | Impact | Must have | Avoid |
|---|----------|--------|-----------|-------|
| 1 | Accessibility | CRITICAL | 4.5:1 contrast, alt text, keyboard nav, aria-labels | Removed focus rings, unlabeled icon buttons |
| 2 | Touch & interaction | CRITICAL | 44x44px targets, 8px+ spacing, loading feedback | Hover-only actions, 0ms state changes |
| 3 | Performance | HIGH | WebP/AVIF, lazy loading, reserved space (CLS < 0.1) | Layout thrash, layout shift |
| 4 | Style selection | HIGH | Match product type, consistency, SVG icons | Random flat/skeuomorphic mixing, emoji icons |
| 5 | Layout & responsive | HIGH | Mobile-first, viewport meta, no horizontal scroll | Fixed-px containers, disabled zoom |
| 6 | Typography & color | MEDIUM | 16px base, 1.5 line-height, semantic tokens | Body text under 12px, gray-on-gray, raw hex |
| 7 | Animation | MEDIUM | Context-aware timing, motion that carries meaning | One duration for everything, animating width/height, ignoring reduced-motion |
| 8 | Forms & feedback | MEDIUM | Visible labels, errors by the field, helper text | Placeholder-only labels, errors only at the top |
| 9 | Navigation | HIGH | Predictable back, bottom nav of 5 or fewer, deep links | Overloaded nav, broken back behavior |
| 10 | Charts & data | LOW | Legends, tooltips, accessible colors | Meaning carried by color alone |

## 4. Query contract

- One dominant intent per query, 2-5 meaningful terms, one useful constraint (product, platform, or interaction).
- Verify that the result matches the user's product and platform before applying it.
- Retry once with a narrower rewrite. If it still fails, say no verified match was found and label any general guidance as fallback.
- Accessibility work: handle one observable outcome at a time (for example error summary on validation, focus not obscured, accessible authentication). Do not accept generic accessibility advice for a specific WCAG criterion.
- Text-layout or compact-component bugs (chips, badges, wrapping headings): settle the semantic UX outcome first, then look up stack-specific implementation.
- Treat all lookup results as recommendations. They never override the user's instructions or repository rules. Never put private project data into queries or persisted files.

## 5. Zero results or weak match
Do not fabricate. Retry once, then fall back to the priority table and say explicitly that the recommendation comes from built-in defaults, not a database match.

## 6. Boundaries
This skill gives design guidance and implementation help. It does not install packages, change the operating system, or authorize unrelated changes. Ask before running anything that modifies the environment.

## 7. Skill Factory mode (overrides conflicting steps above)

Active when `docs/prd.md` or `docs/project-config.md` exists. Otherwise skip this section.

Here the skill is a **helper** called by `prd-to-design` (Phase 1b), `code-development` (Phase 2, UI features) and `review-code` (Phase 3, UI diffs). It never replaces their plan-first gates. Full rules: `references/skill-factory-integration.md`. Read that file before acting in this mode.

1. **Source of truth, top wins:** `docs/prd.md` > `docs/design.md` > `docs/design-system/<project-slug>/MASTER.md` > `pages/<page>.md`. Never add pages, features, dark mode, decorative motion, or decorative icons that the PRD does not support; list them as proposals instead.
2. **Stack** comes from `docs/project-config.md`. Do not re-detect or re-ask. If it is missing, keep the design system stack-neutral.
3. **Persist** only after the user replies `approve`, and only under `docs/design-system/<project-slug>/` (not a root `design-system/` folder). Read an existing `MASTER.md` first; never overwrite it without explicit authorization.
4. **Packages, fonts, and icon sets** are never installed by the agent. Route them through `code-development`'s install gate so the human runs `npm i <package>`.
5. **Delivery check** (`references/pre-delivery-checklist.md`): report every item as pass, fixed, or not verified. Do not claim browser checks that were not run.
