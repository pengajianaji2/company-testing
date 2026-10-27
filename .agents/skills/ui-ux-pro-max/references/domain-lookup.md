# Domain and Stack Lookup

Contents: Database mode commands, domain table, stack list, Native mode equivalents.

## Database mode (only if scripts/search.py exists)

Resolve `<SKILL_DIR>` to `<workspace>/.agents/skills/ui-ux-pro-max`, `<workspace>/.agent/skills/ui-ux-pro-max`, or `~/.gemini/antigravity/skills/ui-ux-pro-max`, whichever exists first. Python 3 with no external dependencies is required.

```
python "<SKILL_DIR>/scripts/search.py" "<product> <industry> <keywords>" --design-system -p "Project Name"
python "<SKILL_DIR>/scripts/search.py" "<query>" --design-system --persist -p "Project Name" --output-dir "<project-root>"
python "<SKILL_DIR>/scripts/search.py" "<query>" --design-system --variance 8 --motion 7 --density 8
python "<SKILL_DIR>/scripts/search.py" "<keyword>" --domain <domain> [-n <max_results>]
python "<SKILL_DIR>/scripts/search.py" "<keyword>" --stack <stack>
```

Always pass `--output-dir` with `--persist`, otherwise files land in whatever directory the tool runs from. In a Skill Factory project use `--output-dir "<project-root>/docs"` so the result lands in `docs/design-system/<project-slug>/` (see `skill-factory-integration.md`). An existing `MASTER.md` is skipped unless `--force` is passed; use `--force` only with explicit user authorization after reading the existing file. Output formats: `-f ascii` (default), `-f markdown`, `--json`.

If the domain is omitted it is auto-detected and can misroute overlapping terms (for example "font" matches typography and google-fonts). If results look off-topic, pass `--domain` explicitly.

## Domains

| Need | Domain | Example query | Native mode equivalent |
|------|--------|---------------|------------------------|
| Product type patterns | product | "entertainment social" | design-system-method.md, Page pattern |
| Style options | style | "glassmorphism dark" | design-system-method.md, Style families |
| Color palettes | color | "entertainment vibrant" | Derive tokens, verify contrast |
| Font pairings | typography | "playful modern" | Choose one heading plus one body face |
| Individual Google Fonts | google-fonts | "sans serif variable" | Choose a variable font with fallbacks |
| Chart recommendations | chart | "real-time dashboard" | priority-rules.md, tier 10 |
| UX best practices | ux | "error summary validation" | priority-rules.md, tiers 1, 2, 5, 8, 9 |
| Landing structure | landing | "hero social-proof" | design-system-method.md, Page pattern |
| Icons | icons | "decorative icon aria hidden" | priority-rules.md, tiers 1 and 4 |
| Animation presets | gsap | "scroll reveal stagger" | Dial table, motion tiers |
| React/Next performance | react | "rerender memo list" | Use framework docs; keep renders cheap |
| App/native guidelines | web | "accessibilityLabel touch safe-areas" | pre-delivery-checklist.md |

## Stacks
react, nextjs, vue, svelte, astro, nuxtjs, nuxt-ui, angular, laravel, swiftui, react-native, flutter, jetpack-compose, html-tailwind, shadcn, threejs, javafx, wpf, winui, avalonia, uno, uwp.

In Native mode, apply the detected stack's own idioms (component library, styling approach, routing) and keep the design tokens in the stack's native theming mechanism.

## Good query shapes
Semantic outcome first, stack second: "badge chip label wraps" (ux) then "chip badge overflow nowrap" (html-tailwind). Do not replace the outcome query with a framework keyword.
