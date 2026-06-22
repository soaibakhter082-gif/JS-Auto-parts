# CODEX_TASKS.md

Status: Placeholder.

Do not use this for implementation yet.

Website Builder GPT must create the final Codex task breakdown after:
- STACK.md is confirmed
- DESIGN.md is reviewed
- Stitch assets are organized
- WEBSITE_BUILD_PLAN.md is completed-------------

# docs/CODEX_TASKS.md

# JS Auto Parts Codex Tasks

## Status

Project: JS Auto Parts responsive website  
Current stage: Website build planning complete  
Implementation approved: No  
Codex Environment Planner output exists: Yes  
Ready for Website Builder GPT: Yes  
Ready for implementation: No  

Codex must not implement until the project owner explicitly approves implementation.

---

## Global Rules for All Codex Tasks

Use only the environment, skills, tools, subagents, hooks, plugins/apps, and verification commands selected by Codex Environment Planner.

Do not:
- add backend
- add auth
- add payments
- add ecommerce
- add prices
- add cart
- add checkout
- add Buy Now
- add Add to Cart
- add login
- add fake stock
- add fake reviews
- add fake map
- invent business claims
- invent inventory
- change business details
- ignore Stitch dark automotive design direction

Use correct business details everywhere:
- Business: JS Auto Parts
- Owner: SK Samir Bux
- Phone / WhatsApp: 9937940267
- Location: Nayakothi Buxi Lane, Khordha, Odisha
- Hours: Open Every Day, 9:00 AM – 8:00 PM
- Experience: 25+ Years Local Trust

Default verification:
- npm run lint
- npm run typecheck
- npm run build
- npm test if tests exist
- npx playwright test if E2E exists and Playwright is installed

---

# Task 1 — Inspect Existing Website Structure

## Goal

Map the current Next.js project structure before editing so implementation can reuse existing files, components, styles, and Stitch assets.

## Environment status

Codex Environment Planner output:
- Available: yes
- Source: user-provided environment planning summary
- Selected project skills: project-scoped web skills installed
- Selected MCP/tools: use only what environment planner selected
- Selected subagents: use only what environment planner selected
- Active hooks: follow project hooks
- Items to skip: backend, auth, payment, ecommerce, deployment/token-heavy tools unless approved

## Read first

- AGENTS.md
- package.json
- docs/WEBSITE_BUILD_PLAN.md
- Codex Environment Planner output
- docs/DESIGN.md if present

## Files/folders to inspect

- app/
- src/app/
- components/
- public/
- styles/
- lib/
- tailwind.config.*
- next.config.*
- components.json
- Stitch asset folders
- docs/

## Files to edit

- None for this task unless documentation notes are required and approved.

## Implementation steps

1. Inspect the project structure.
2. Identify whether the project uses app/ or src/app/.
3. Identify existing layout, page, component, and style files.
4. Identify available Stitch assets.
5. Identify whether shadcn/ui is installed.
6. Report recommended implementation entry points.

## Acceptance criteria

- Codex reports the active route directory.
- Codex reports reusable components/assets.
- Codex reports whether shadcn/ui is available.
- Codex does not edit implementation files.
- Codex does not add dependencies.

## Verification

No build required unless files are changed.

## Final report

Include:
- files/folders inspected
- route structure found
- reusable components found
- Stitch assets found
- risks or missing files
- recommended next task

---

# Task 2 — Create Static Business Content Source

## Goal

Create a small static content source for JS Auto Parts business details so the same information is used consistently across all pages.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- AGENTS.md
- existing lib/ or content/ patterns
- existing app route files
- existing component patterns

## Files/folders to inspect

- lib/
- content/
- data/
- app/ or src/app/
- components/

## Files/folders Codex may edit

Only one of the following, depending on existing project pattern:
- lib/business-info.ts
- content/business-info.ts
- data/business-info.ts

Codex may also update imports in later tasks, not this one unless needed for validation.

## Implementation steps

1. Reuse existing content/data folder if present.
2. Add one static business info object.
3. Include only approved fields:
   - businessName
   - ownerName
   - phone
   - whatsappPhone
   - address
   - hours
   - experience
   - telUrl
   - whatsappUrl
   - directionsUrl
4. Use address query for directions URL.
5. Do not add backend types or API calls.

## Acceptance criteria

- Business details exactly match approved values.
- WhatsApp URL uses Indian country code:
  - https://wa.me/919937940267
- Tel URL uses:
  - tel:9937940267
- No prices, inventory, reviews, ratings, cart, checkout, login, or payment fields.
- No backend/API code added.

## Verification

- npm run lint
- npm run typecheck

## Final report

Include:
- file created/edited
- exact business fields added
- commands run
- any errors fixed

---

# Task 3 — Build Shared Layout, Header, Footer, and CTA Components

## Goal

Create or update shared site chrome for a static responsive marketing website.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- docs/DESIGN.md if present
- AGENTS.md
- Codex Environment Planner output
- existing layout and component files

## Files/folders to inspect

- app/layout.tsx or src/app/layout.tsx
- components/
- public/
- styles/
- Stitch assets
- business info source from Task 2

## Files/folders Codex may edit

- app/layout.tsx or src/app/layout.tsx
- components/site-header.tsx
- components/site-footer.tsx
- components/cta-buttons.tsx
- components/mobile-nav.tsx if needed
- existing equivalent files if already present

## Implementation steps

1. Preserve existing dark automotive Stitch design direction.
2. Add/update SiteHeader with:
   - JS Auto Parts name
   - Home/About/Contact links
   - Call CTA
3. Add/update mobile navigation.
4. Add/update SiteFooter with:
   - business name
   - owner
   - phone/WhatsApp
   - address
   - hours
   - internal links
5. Add reusable CTA buttons:
   - Call
   - WhatsApp
   - Directions
6. Ensure links are accessible and descriptive.

## Acceptance criteria

- Header works on mobile and desktop.
- Footer shows correct business details.
- CTAs use correct links.
- No ecommerce, pricing, stock, cart, checkout, login, or payment UI.
- Layout remains dark automotive and consistent with Stitch direction.
- Navigation links work.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- files changed
- components created/updated
- commands run
- command results
- any remaining responsive concerns

---

# Task 4 — Build Home Page

## Goal

Build the `/` route as the main landing page for JS Auto Parts.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- docs/DESIGN.md if present
- AGENTS.md
- business info source
- existing home page implementation

## Files/folders to inspect

- app/page.tsx or src/app/page.tsx
- components/
- public/
- Stitch assets
- styles/

## Files/folders Codex may edit

- app/page.tsx or src/app/page.tsx
- components/home/*
- shared CTA/card components if needed
- metadata in page/layout if applicable

## Implementation steps

1. Build hero section with:
   - 25+ Years Local Trust
   - H1: JS Auto Parts in Khordha
   - subheadline using approved location
   - Call and WhatsApp CTAs
2. Add trust bar:
   - 25+ Years Local Trust
   - Open Every Day
   - 9:00 AM – 8:00 PM
   - Khordha, Odisha
3. Add parts/support overview without inventory claims.
4. Add Why Choose section.
5. Add Visit the Shop section.
6. Add final CTA band.
7. Add FAQ section.
8. Add metadata for Home.

## Acceptance criteria

- Route `/` renders successfully.
- One clear H1.
- Above-the-fold CTA visible.
- Correct business details used.
- No prohibited ecommerce language or UI.
- No fake prices, stock, reviews, map, ratings, or online ordering.
- Mobile layout is clean and readable.
- Dark automotive visual direction preserved.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- files changed
- sections implemented
- commands run
- command results
- design or content issues needing review

---

# Task 5 — Build About Page

## Goal

Build `/about` to establish business trust, owner identity, and local credibility.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- AGENTS.md
- docs/DESIGN.md if present
- business info source
- existing route patterns

## Files/folders to inspect

- app/about/
- src/app/about/
- app/page.tsx or src/app/page.tsx for composition pattern
- components/

## Files/folders Codex may edit

- app/about/page.tsx or src/app/about/page.tsx
- components/about/* if needed
- shared CTA/card components if needed

## Implementation steps

1. Create `/about` route if missing.
2. Add page hero:
   - H1: About JS Auto Parts
   - local trust subheadline
3. Add owner/local trust section:
   - Owner: SK Samir Bux
   - 25+ Years Local Trust
4. Add business details section.
5. Add contact CTA band.
6. Add page metadata.

## Acceptance criteria

- `/about` renders successfully.
- Owner name is correct.
- Experience claim is exactly “25+ Years Local Trust.”
- No unsupported history, awards, ratings, reviews, or claims.
- CTA links work.
- Mobile layout is readable.
- Design matches the site direction.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- files changed
- sections implemented
- commands run
- command results
- remaining content questions

---

# Task 6 — Build Contact Page

## Goal

Build `/contact` with clear phone, WhatsApp, address, hours, and directions behavior.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- AGENTS.md
- docs/DESIGN.md if present
- business info source
- existing route/component patterns

## Files/folders to inspect

- app/contact/
- src/app/contact/
- components/
- shared CTA components

## Files/folders Codex may edit

- app/contact/page.tsx or src/app/contact/page.tsx
- components/contact/* if needed
- shared CTA/card components if needed

## Implementation steps

1. Create `/contact` route if missing.
2. Add contact hero:
   - H1: Contact JS Auto Parts
3. Add contact action cards:
   - Call 9937940267
   - WhatsApp 9937940267
   - Visit Nayakothi Buxi Lane, Khordha, Odisha
4. Add hours card:
   - Open Every Day
   - 9:00 AM – 8:00 PM
5. Add directions CTA using real address query.
6. Add contact guidance:
   - Call or WhatsApp for current availability.
7. Add FAQ section with no-online-ordering answer.
8. Add metadata.

## Acceptance criteria

- `/contact` renders successfully.
- Phone and WhatsApp are correct.
- Address and hours are correct.
- Directions link uses the real address.
- No fake embedded map.
- No contact form unless separately approved.
- No backend code.
- No ecommerce/payment/stock UI.
- Mobile contact CTAs are easy to tap.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- files changed
- CTA links checked
- commands run
- command results
- manual review needed

---

# Task 7 — Add Not Found Page

## Goal

Add a useful not-found page that routes users back to the main site and contact actions.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- existing app route structure
- existing shared layout/components

## Files/folders to inspect

- app/not-found.tsx
- src/app/not-found.tsx
- components/

## Files/folders Codex may edit

- app/not-found.tsx or src/app/not-found.tsx
- shared CTA components only if needed

## Implementation steps

1. Add not-found page if missing.
2. Include H1:
   - Page Not Found
3. Add recovery links:
   - Home
   - Contact
   - Call 9937940267
4. Match dark automotive site styling.

## Acceptance criteria

- Invalid routes show useful not-found content.
- Recovery CTAs work.
- No unrelated pages or features added.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- files changed
- commands run
- command results

---

# Task 8 — SEO Metadata and Local Business Structured Data

## Goal

Add accurate metadata for all public pages and optional local business structured data without inventing unsupported facts.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- existing metadata implementation
- Next.js app route structure

## Files/folders to inspect

- app/layout.tsx or src/app/layout.tsx
- page files
- SEO utilities if present

## Files/folders Codex may edit

- route page files
- layout metadata
- SEO utility file if existing
- local structured data component only if needed

## Implementation steps

1. Add Home metadata.
2. Add About metadata.
3. Add Contact metadata.
4. Add not-found noindex if supported by current structure.
5. Optional: Add accurate LocalBusiness or AutoPartsStore JSON-LD.
6. Do not include fake ratings, reviews, geo coordinates, priceRange, inventory, or sameAs links.

## Acceptance criteria

- Each public page has clear title and meta description.
- Each public page has one H1.
- Metadata uses JS Auto Parts and Khordha naturally.
- Structured data, if added, contains only approved facts.
- No invented SEO claims.

## Verification

- npm run lint
- npm run typecheck
- npm run build

## Final report

Include:
- metadata added
- structured data added or skipped
- commands run
- command results

---

# Task 9 — Responsive and Accessibility Pass

## Goal

Review and refine the site for mobile usability, semantic structure, keyboard access, contrast, and CTA clarity.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- Web accessibility requirements in project docs if present
- existing components/pages

## Files/folders to inspect

- app/
- src/app/
- components/
- styles/
- public/

## Files/folders Codex may edit

- page files
- shared components
- CSS/Tailwind classes
- accessibility labels

## Implementation steps

1. Check mobile layout for all routes.
2. Check tablet and desktop layout.
3. Verify heading hierarchy.
4. Verify links/buttons semantics.
5. Add aria labels where useful.
6. Verify focus states.
7. Check color contrast on dark backgrounds.
8. Verify image alt text.
9. Ensure FAQ accordion is accessible if used.

## Acceptance criteria

- No horizontal scrolling on mobile.
- Text remains readable.
- Tap targets are comfortable.
- Keyboard navigation works.
- Focus states are visible.
- Meaningful images have alt text.
- Decorative images do not create screen reader noise.
- CTAs have descriptive labels.
- No obvious contrast issues.

## Verification

- npm run lint
- npm run typecheck
- npm run build
- npx playwright test if E2E exists and Playwright is installed

## Final report

Include:
- accessibility fixes made
- responsive fixes made
- manual checks completed
- commands run
- command results
- remaining risks

---

# Task 10 — Performance and Final QA Pass

## Goal

Confirm the static-first site is lightweight, builds cleanly, and does not include prohibited functionality.

## Read first

- docs/WEBSITE_BUILD_PLAN.md
- package.json
- app/
- src/app/
- components/
- public/

## Files/folders to inspect

- all implemented page routes
- shared components
- public assets
- package.json
- build output if available

## Files/folders Codex may edit

- page/component files for small fixes
- image usage if optimization is needed
- styles for responsive/performance fixes

## Implementation steps

1. Run verification commands.
2. Check build output for errors.
3. Check for unnecessary client components.
4. Check for oversized or unused assets.
5. Search codebase for prohibited terms:
   - price
   - cart
   - checkout
   - buy now
   - add to cart
   - login
   - payment
   - stock
   - review
   - rating
6. Remove or revise prohibited UI/content if found.
7. Confirm all business details are correct.
8. Confirm routes work.

## Acceptance criteria

- Lint passes.
- Typecheck passes.
- Build passes.
- No prohibited ecommerce/auth/payment UI exists.
- Business details are accurate across site.
- Pages are responsive.
- Site remains static-first.
- No backend/API added.
- No fake map added.
- No fake reviews/ratings/stock/prices added.

## Verification

- npm run lint
- npm run typecheck
- npm run build
- npm test if tests exist
- npx playwright test if E2E exists and Playwright is installed

## Final report

Include:
- files changed
- commands run
- command results
- errors fixed
- prohibited-content search results
- remaining risks
- manual review needed

---

# Final Handoff Format for Later Codex Use

Use this only after the project owner explicitly approves implementation.

## HANDOFF TO CODEX

Project:
JS Auto Parts responsive website

Current stage:
Website build planning complete. Implementation pending explicit approval.

Website task:
Implement the approved static-first responsive marketing website.

Goal:
Build a small dark automotive local business website for JS Auto Parts with Home, About, Contact, and Not Found routes. The site must help users call, WhatsApp, or visit the shop.

Environment plan source:
Codex Environment Planner output provided by user.

Files Codex should read:
- AGENTS.md
- package.json
- docs/WEBSITE_BUILD_PLAN.md
- docs/CODEX_TASKS.md
- docs/DESIGN.md if present
- Codex Environment Planner output

Files/folders Codex should inspect:
- app/ or src/app/
- components/
- public/
- styles/
- lib/
- tailwind.config.*
- next.config.*
- components.json
- Stitch asset folders

Files/folders Codex may edit:
- app/ or src/app/ route files
- components/
- lib/ or content/ static business info file
- styles only as needed
- metadata in layout/page files

Skills Codex should use:
Use only skills selected by Codex Environment Planner.

MCP/tools Codex may use:
Use only MCP/tools selected by Codex Environment Planner.

Subagents Codex may use:
Use only subagents selected by Codex Environment Planner.

Hooks/guards active:
Follow project hooks. Do not bypass safety hooks.

Acceptance criteria:
- Routes `/`, `/about`, `/contact`, and not-found work.
- Site uses correct JS Auto Parts business details everywhere.
- Site preserves Stitch dark automotive design direction.
- Site is responsive on mobile, tablet, and desktop.
- Call, WhatsApp, and directions CTAs work.
- No backend, auth, payment, ecommerce, cart, checkout, prices, fake stock, fake reviews, fake map, login, Buy Now, or Add to Cart.
- Lint, typecheck, and build pass.

Verification commands:
- npm run lint
- npm run typecheck
- npm run build
- npm test if tests exist
- npx playwright test if E2E exists and Playwright is installed

Do not touch:
- unrelated files
- backend/auth/payment/ecommerce setup
- real .env secrets
- unrelated design system rewrites
- unrelated apps or platforms

Final report required:
- files changed
- commands run
- command results
- errors fixed
- remaining risks
- manual review needed
