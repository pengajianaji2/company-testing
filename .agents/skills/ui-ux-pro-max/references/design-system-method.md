# Design System Method (Native mode)

Use this when `scripts/search.py` is not installed. It reproduces what the upstream `--design-system` command returns: pattern, style, colors, typography, effects, and anti-patterns.

Contents: inputs, derivation steps, dials, output shape, style families.

## Inputs
Product type, industry, audience and context, style keywords, stack (from SKILL.md Step 1).

## Derivation steps
1. **Page pattern.** Choose the structure that serves the main goal: landing (hero, social proof, features, pricing, CTA), dashboard (nav, filters, KPI row, data views), catalog or marketplace (search, filters, cards, detail), tool or app (workspace, panels, empty and error states), portfolio (hero work, case studies, contact).
2. **Style family.** Pick one that fits product and audience (see families below). State why in one sentence. Do not blend more than one primary family; a secondary one may supply accents.
3. **Color tokens.** Define primary, secondary, accent, surface, surface-raised, border, text, text-muted, success, warning, danger. Provide light and dark values. Choose hues for the industry (trust and calm for finance and health, energy for entertainment, restraint for productivity). Verify every text and surface pair for contrast before writing it down.
4. **Typography.** One heading face plus one body face, or one family with weight contrast. Set a type scale (for example 12, 14, 16, 20, 24, 32, 48), body 16px, line-height about 1.5. Name fallbacks.
5. **Spacing and radius.** A single scale (see density dial). One radius family.
6. **Effects.** Shadows, blur, gradients, borders: only what the chosen style needs, expressed as tokens.
7. **Anti-patterns.** List 3-6 things to avoid for this product (for example emoji icons, pure gray-on-gray, hover-only actions, mixing styles).
8. **Run the priority table** (`priority-rules.md`) against the draft and fix tier 1-3 conflicts before presenting.

## Dials
Set only when the user asks or the product implies it.

| Dial | Low (1-3) | Mid (4-7) | High (8-10) |
|------|-----------|-----------|-------------|
| variance | Centered, minimal; bias to minimalist styles | Balanced, modern | Bold, asymmetric; bias to brutalist or bento-grid styles |
| motion | Subtle micro-interactions | Standard scroll reveal and stagger | Complex choreography (pinning, FLIP, split-text) |
| density | Spacious: spacing scale about 24-96px | Standard: about 16-64px | Dense, dashboard: about 8-32px |

Motion tiers: Subtle = hover and press feedback; Standard = scroll reveals with stagger; Complex = scroll-linked timelines. For anything above Subtle, prefer a small animation library only if the project already uses one, and always gate by reduced-motion.

## Output shape
Present the design system as a short document with these headings: Pattern, Style, Colors (token table, light and dark), Typography, Spacing and radius, Effects, Anti-patterns, Dial settings. This is also the body of `MASTER.md` when persisting.

## Style families (starting list, not exhaustive)
Minimalism, Swiss or editorial, Glassmorphism, Neumorphism (use sparingly, contrast risk), Bento grid, Brutalism, Dark mode OLED, Soft or pastel, Retro or Y2K, Dashboard or data-dense, Claymorphism, Aurora or gradient mesh. Match to product: fintech and health lean calm and high-contrast; creative portfolios tolerate bold; internal tools favor dense and plain.
