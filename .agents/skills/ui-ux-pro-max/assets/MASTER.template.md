# <Project Name> - Design System (MASTER)

Global source of truth. Page-specific overrides live in `pages/<page>.md` and win over this file.
Read this file before changing anything; do not overwrite without the owner's approval.
Skill Factory: lives at `docs/design-system/<project-slug>/MASTER.md`. Fill the Dark column only if the PRD or `docs/design.md` asks for dark mode; otherwise write `-` and keep token names semantic so dark values can be added later.

## Pattern
<page structure and why it fits the product goal>

## Style
<one primary style family, optional secondary accents, one-sentence rationale>

## Colors
| Token | Light | Dark | Use |
|-------|-------|------|-----|
| primary | | | |
| secondary | | | |
| accent | | | |
| surface | | | |
| surface-raised | | | |
| border | | | |
| text | | | |
| text-muted | | | |
| success / warning / danger | | | |

Contrast verified for all text and surface pairs: yes / no

## Typography
- Heading: <font>, fallbacks: <stack>
- Body: <font>, fallbacks: <stack>
- Scale: 12 / 14 / 16 / 20 / 24 / 32 / 48 (body 16px, line-height 1.5)

## Spacing and radius
- Spacing scale: <values>
- Radius: <values>

## Effects
<shadows, blur, gradients as tokens>

## Dial settings
variance: <n or unset> | motion: <n or unset> | density: <n or unset>

## Anti-patterns
- <thing to avoid for this product>
- <thing to avoid for this product>
- <thing to avoid for this product>
