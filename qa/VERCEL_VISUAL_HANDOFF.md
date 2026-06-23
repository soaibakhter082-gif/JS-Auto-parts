# Vercel Visual Handoff

## 1. Deployment URL used

- `https://js-auto-parts-st3s.vercel.app`

## 2. Screenshot folder paths

- Desktop: `qa/screenshots/vercel-current/desktop/`
- Mobile: `qa/screenshots/vercel-current/mobile/`
- Manifest: `qa/screenshots/vercel-current/capture-manifest.json`

## 3. All routes captured

- `/`
- `/product-categories`
- `/products`
- `/request-quote`
- `/about`
- `/contact`
- `/test404`

## 4. Viewports used

- Desktop output: `1440 x 1200`
- Mobile output: `390 x 844`

Capture note:
The browser runtime needed calibrated internal widths of `1456 x 1200` for desktop and `405 x 844` for mobile so the saved screenshots landed at the exact requested output widths after scrollbar handling.

## 5. Screenshot count

- `28` total screenshots
- `14` desktop screenshots
- `14` mobile screenshots
- For every route: one above-the-fold capture and one full-page capture

## 6. Capture method

- Playwright-compatible browser automation through Codex's bundled in-app browser tooling
- Live deployed Vercel site only
- Waited for `domcontentloaded`, then attempted `networkidle`, then added a short settle delay before each capture
- Spot-checked screenshots after capture to confirm there was no visible browser extension overlay, no Next.js error overlay, and no blocking popup/modal
- Browser output arrived as JPEG bytes, then was converted to true PNG files for the requested deliverable format

## 7. Console warnings/errors

- No browser console warnings were captured
- No browser console errors were captured
- No visible hydration/Next.js overlay was present in the checked screenshots

## 8. Pages that failed capture

- None

## 9. Current visual review notes

### What looks acceptable

- The dark palette with cyan accents and amber/green CTAs is directionally aligned with the approved garage theme.
- Contact actions are obvious and easy to find on every route.
- The site is structurally clean, readable, and stable across desktop and mobile.
- Forms, cards, and CTA groupings are consistent enough for a redesign team to trace the current information architecture quickly.

### What looks weak

- The visual language still reads as a polished starter UI rather than a premium automotive brand.
- Hero areas rely on empty atmospheric panels and gradients more than strong mechanical imagery or distinctive brand composition.
- Typography is readable but not bold, condensed, or expressive enough to feel like a high-impact garage identity.
- A lot of sections repeat the same card rhythm, which makes several pages feel interchangeable.

### Desktop design issues

- Desktop hero sections leave too much inert negative space, especially on the home, categories, and products pages.
- The right-side supporting panels look tidy but do not create enough drama or product credibility.
- Sticky header and bottom CTA systems are visually louder than the supporting page visuals, so the experience feels CTA-heavy rather than brand-led.
- Full-page desktop screenshots reveal repeated fixed header/footer CTA elements on longer pages, which also hints that the current sticky system is visually over-present.

### Mobile design issues

- The mobile header is crowded immediately on load; `Call`, `WhatsApp`, and `Menu` compete for space before the page content starts.
- The sticky bottom CTA bar is useful, but it consumes a large portion of the mobile viewport and compresses already-short folds.
- On several mobile routes, the first viewport becomes almost entirely CTA stack plus heading, with too little breathing room for brand impression.
- Cards and form blocks feel dense on mobile, especially on `request-quote` and `contact`.

### Where the design differs from `docs/DESIGN.md`

- `docs/DESIGN.md` calls for a premium, cinematic, automotive-specific experience with mechanical cues, texture, and stronger showcase energy; the deployed site is much flatter and safer.
- The docs describe rubber, chrome, light streaks, tyres, shelves, and mechanical motion cues; the current build mostly uses gradients and dark cards without enough automotive character.
- The approved direction expects stronger visual hierarchy between hero, trust, categories, and contact; the current site relies more on evenly weighted panels and repeated button groups.
- The design doc suggests that the site should feel modern but still rooted in local trust; the current UI feels functional and polished, but not memorable.

### Where the design differs from the Stitch premium garage direction

- The current build has the right color family, but not the stronger premium garage attitude implied by the Stitch direction.
- There is not enough metallic surface treatment, chrome/rim-light depth, or cinematic composition to justify the "premium garage" label yet.
- The current hero and support panels feel abstract rather than automotive.
- The redesign should preserve the enquiry-first structure while pushing the visual identity much further than the present implementation.

## 10. Design handoff notes

### Areas Design + Stitch GPT should redesign first

- Homepage hero and above-the-fold composition
- Mobile header plus sticky CTA relationship
- Product Categories and Products page hero sections
- Request Quote page visual hierarchy and form presentation

### Components that need stronger visual treatment

- Header and navigation
- Hero CTA groups
- Right-side hero/support panels
- Category cards
- Product/enquiry cards
- Quote form container and field styling
- Trust strips and support panels
- Mobile bottom CTA bar

### Pages that need the most improvement

- `/`
- `/product-categories`
- `/products`
- `/request-quote`

Lower priority visually:

- `/contact`
- `/about`
- `/test404`

## 11. Remaining risks

- Full-page screenshots on longer pages show repeated fixed header/footer CTA elements because of how the deployed site uses sticky/fixed UI during browser full-page capture. The fold screenshots are the cleanest reference for top-of-page layout.
- The current build appears stable, but the screenshots do not introduce real shop/product photography, so Design + Stitch GPT will still need to infer stronger visual storytelling direction.
- Because this was a deployed-site capture only, no code behavior was changed and no UI issues were corrected before handoff.
