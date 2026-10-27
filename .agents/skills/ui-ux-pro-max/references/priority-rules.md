# Priority Rules (10 tiers)

Read the tier that matches the problem. Work from tier 1 downward; a lower-tier polish never justifies breaking a higher tier.

Contents: 1 Accessibility, 2 Touch, 3 Performance, 4 Style, 5 Layout, 6 Typography and color, 7 Animation, 8 Forms, 9 Navigation, 10 Charts.

Numbers below are working defaults. Where a project's own design system says otherwise, the project wins.

## 1. Accessibility (CRITICAL)
Must have
- Text contrast at least 4.5:1 against its background (3:1 for large text and UI component boundaries).
- Meaningful images have alt text; decorative images and icons are hidden from assistive tech.
- Everything operable by keyboard, in a logical tab order, with a visible focus indicator.
- Icon-only buttons carry an accessible name (aria-label or visually hidden text).
- Status and meaning never rely on color alone (add icon, text, or pattern).
- Focused elements are not hidden behind sticky headers or overlays.

Avoid
- Removing focus rings without a replacement.
- Unlabeled icon buttons, placeholder-only inputs, drag-only interactions with no alternative.

## 2. Touch and interaction (CRITICAL)
Must have
- Tap targets at least 44x44px with 8px or more between neighbors.
- Immediate feedback for every action: pressed state, spinner, or skeleton for waits.
- Every hover behavior has a touch and keyboard equivalent.

Avoid
- Hover-only reveals, instant 0ms state changes, tiny inline links as the only way to act.

## 3. Performance (HIGH)
Must have
- Modern image formats (WebP or AVIF), responsive sizes, lazy loading below the fold.
- Reserve space for images, embeds, and async content so Cumulative Layout Shift stays under 0.1.
- Virtualize long lists; debounce or throttle high-frequency handlers.

Avoid
- Layout thrashing, animating layout properties, loading everything up front.

## 4. Style selection (HIGH)
Must have
- Pick one style family that fits the product type and keep it consistent across every screen.
- One icon set, SVG, consistent stroke and size.

Avoid
- Mixing flat and skeuomorphic treatments at random.
- Emoji as icons.

## 5. Layout and responsive (HIGH)
Must have
- Mobile-first breakpoints, viewport meta tag present, consistent max-width container (for example max-w-6xl or max-w-7xl).
- No horizontal scroll at any width; content reflows instead of shrinking.

Avoid
- Fixed-pixel container widths, disabled zoom, different container widths per section.

## 6. Typography and color (MEDIUM)
Must have
- 16px base body size, line-height around 1.5, a clear heading scale.
- Semantic color tokens (surface, text, primary, danger, border) with light and dark values; check contrast for both themes.

Avoid
- Body text under 12px, gray-on-gray, raw hex values scattered through components.

## 7. Animation (MEDIUM)
Must have
- Timing chosen per component and platform; small feedback is fast, large transitions are slower, exits are faster than enters.
- Motion explains something: spatial continuity, cause and effect, hierarchy.
- Respect prefers-reduced-motion. Rapid interactions may cancel animation, but final state, focus, and content must stay correct.
- Animate transform and opacity.

Avoid
- One duration for every transition, animating width or height, decorative motion that delays tasks.

## 8. Forms and feedback (MEDIUM)
Must have
- Visible labels, helper text where format matters, errors placed next to the field and announced to assistive tech, plus an error summary for long forms.
- Progressive disclosure: ask only what is needed now.
- Preserve input on error; move focus to the first problem.

Avoid
- Placeholder as the only label, errors only at the top of the page, overwhelming upfront forms.

## 9. Navigation (HIGH)
Must have
- Predictable back behavior, clear current-location indication, deep links to key screens.
- Bottom navigation limited to 5 items or fewer.

Avoid
- Overloaded menus, broken back stacks, destinations reachable only by gesture.

## 10. Charts and data (LOW)
Must have
- Legends, tooltips, direct labels where possible, accessible palettes, a text or table alternative for key data.
- Chart type matched to the question (trend, comparison, composition, distribution).

Avoid
- Meaning carried by color alone, truncated axes that mislead, decoration that hides data.
