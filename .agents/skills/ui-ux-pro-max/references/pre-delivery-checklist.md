# Pre-Delivery Checklist

Run before handing back any UI. Mark each item pass, fail (and fixed), or not verifiable (say why). Native and mobile app UI (iOS, Android, React Native, Flutter) gets the extra block at the end.

## Visual quality
- [ ] One icon set, SVG, consistent size and stroke; no emoji used as icons
- [ ] Colors come from semantic tokens; no raw hex inside components
- [ ] One style family applied consistently across all screens
- [ ] Spacing follows the project scale; consistent container max-width

## Interaction
- [ ] Every control has hover (pointer), pressed, focus-visible, disabled, and loading states as relevant
- [ ] Tap targets at least 44x44px with 8px or more between them
- [ ] No hover-only functionality
- [ ] Waits above roughly one second show a spinner or skeleton
- [ ] Animations: transform and opacity only, purposeful timing, prefers-reduced-motion respected

## Light and dark contrast
- [ ] Body text 4.5:1 or better in both themes; large text and UI boundaries 3:1 or better
- [ ] Borders, dividers, and disabled states still distinguishable in dark mode
- [ ] Text over images or gradients has a scrim or checked contrast

## Layout and responsive
- [ ] Viewport meta present; no horizontal scroll at 375, 768, 1280
- [ ] Content reflows instead of shrinking; zoom not disabled
- [ ] Reserved space for media and async content (no layout shift)
- [ ] Long labels, chips, and badges wrap or disclose; truncated text has an accessible full-value path

## Accessibility
- [ ] Full keyboard path through every flow; focus order logical; focus never hidden by sticky UI
- [ ] Icon-only controls have accessible names; decorative icons hidden from assistive tech
- [ ] Form fields have visible labels; errors sit by the field and are announced
- [ ] Meaning never depends on color alone
- [ ] Headings form a sensible outline; landmarks present

## Native and mobile app UI only
- [ ] Safe areas respected (notch, home indicator, system bars)
- [ ] Bottom navigation has 5 items or fewer; back behavior predictable
- [ ] Platform conventions followed for gestures, haptics, and system dialogs
- [ ] Screen-reader labels set (for example accessibilityLabel) and dynamic text sizes tolerated

## Reporting
End the delivery message with a short pass/fail summary. List anything not verified so the user knows what to test manually.
