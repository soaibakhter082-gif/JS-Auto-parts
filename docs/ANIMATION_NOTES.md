
# ANIMATION_NOTES.md

```md
# ANIMATION_NOTES.md

## Animation Goal
Animations should make JS Auto Parts feel fast, mechanical, premium, and automotive without slowing down the user’s ability to call or WhatsApp.

Animations must support trust and clarity. They should not feel like a gaming website or distract from contact actions.

## Core Animation Principles
- Fast entrance, slow idle
- Mechanical, not cartoonish
- Light, steel, rubber, and motion cues
- Never block primary CTAs
- Support reduced-motion mode
- Keep mobile animations lighter than desktop

## Hero Animation
### Tyre Spin Entrance
- Tyre or wheel visual rotates in from right or lower-right.
- Rotation should quickly decelerate into place.
- Add subtle shadow and blue rim light.
- Do not loop aggressive spinning after entrance.
- Mobile version should use a short fade/slide instead of full spin if space is tight.

### Light Streaks
- Electric blue streaks move subtly behind the tyre/product visual.
- Use soft motion blur.
- Keep text area stable and readable.
- Avoid flashing or high-frequency movement.

### Garage Glow
- Amber glow should pulse very subtly behind CTA/product area.
- Use it to guide attention to Call/WhatsApp actions.

## Category Cards
- Reveal on scroll with slight upward movement.
- Add blue rim glow on hover/focus.
- Desktop: subtle 3D tilt.
- Mobile: no hover tilt; use press/tap feedback only.

## Product Showcase
- Parallax shelf effect on desktop.
- Product rows move at slightly different speeds.
- Avoid heavy depth effects on mobile.
- Use static stacked cards for reduced-motion mode.

## Brand/Product Marquee
- Slow continuous horizontal movement.
- Pause on hover.
- Do not include fake brand claims.
- Use generic “popular products available” placeholders until actual brands are confirmed.

## Floating WhatsApp Button
- Subtle pulse every few seconds.
- Do not pulse constantly.
- On mobile, avoid duplicate visual competition with the bottom Call/WhatsApp bar.

## 25+ Years Counter
- Animate from 0 to 25+ once when visible.
- Keep duration short.
- Include a static fallback: “25+ Years Local Trust.”

## Page Transitions
- Use subtle fade/slide transitions.
- Avoid full-screen loaders unless absolutely necessary.
- Contact actions should remain accessible quickly.

## Loading State
Mechanical loading animation:
- Small tyre or gear spinner
- Metallic circular track
- Electric blue highlight
- Text: “Checking parts display…” or “Loading categories…”

Do not imply live stock checking unless the product later supports real inventory.

## Reduced Motion
For users with reduced-motion preference:
- Disable tyre spin
- Disable marquee auto-scroll
- Disable parallax
- Replace card tilt with static focus/hover border
- Keep simple fades only