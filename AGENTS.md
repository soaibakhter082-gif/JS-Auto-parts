# JS Auto Parts Website — Codex Instructions

## Project purpose
Build a premium dark, mobile-first, enquiry-focused responsive website for JS Auto Parts in Khordha, Odisha.

This is not an ecommerce website. The goal is enquiry generation through Call Now, WhatsApp Enquiry, Ask Availability, Send Photo on WhatsApp, and Request Quote.

## Fixed business details
- Shop name: JS Auto Parts
- Owner: SK Samir Bux
- Phone / WhatsApp: 9937940267
- Location: Nayakothi Buxi Lane, Khordha, Odisha
- Opening hours: Open Every Day, 9:00 AM – 8:00 PM
- Experience: 25+ Years Local Trust

Do not change these details.

## Approved stack decision
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui-compatible component structure
- Static-first website
- No backend for MVP
- WhatsApp-first Request Quote flow

## Required pages
1. Homepage
2. Product Categories
3. Products / Product Enquiry
4. Request Quote
5. About
6. Contact

## Approved design direction
Preserve the completed Stitch design direction:
- Premium dark automotive garage website
- Black / charcoal metallic background
- Electric blue / cyan highlights
- Amber/yellow Call Now buttons
- Green WhatsApp buttons
- Dark card layouts
- High-contrast typography
- Mobile sticky Call / WhatsApp bar

## Stitch design source
- Project title: JS Auto Parts Logo
- Project ID: 8374415197402135224
- Stitch assets are organized under: stitch/

Use Stitch MCP only for project-scoped design fetching/inspection.
Do not use Stitch MCP to access unrelated projects or account data.

Recommended local organization:
- stitch/raw/ for raw fetched exports
- stitch/screens/ for page/screen images
- stitch/assets/ for logos/icons/images
- stitch/notes/ for extraction notes
- stitch/implementation-reference/ for design-to-code guidance

## CTA rules
- Call Now uses tel:9937940267
- WhatsApp uses 9937940267 with prefilled enquiry messages where supported
- Ask Availability includes category/product context where available
- Request Quote generates a WhatsApp message for MVP
- Send Photo on WhatsApp opens WhatsApp with photo instruction message
- Sticky mobile CTA bar must not block form submit buttons
- Phone number must remain visible as fallback

## Request Quote MVP behavior
Required fields:
- Name
- Phone number
- Vehicle type: Auto-rickshaw, Bike, Scooty, Other
- Required item / part
- Preferred contact method: Call or WhatsApp

Validate required fields and phone number.
Do not store quote requests.
Do not send email.
Do not require login.
Always provide direct WhatsApp/call fallback.

Fallback message:
“Something went wrong. Please call or WhatsApp JS Auto Parts directly at 9937940267.”

## Forbidden scope
Do not add:
- Shopping cart
- Checkout
- Online payment
- Prices
- Buy Now
- Add to Cart
- Login/account
- Delivery tracking
- Fake stock counts
- Fake reviews
- Fake map
- Ecommerce wording
- Sunday closed wording
- Mon–Sat only wording
- Inventory database
- Admin dashboard
- Complex backend

## Map rule
Only include a map if a real confirmed Google Maps link is provided.

## Required docs to read before implementation
- docs/PRODUCT_BRIEF.md
- docs/PRD.md
- docs/MVP_SCOPE.md
- docs/FINAL_PAGE_LIST.md
- docs/USER_FLOWS.md
- docs/CTA_BEHAVIOR_RULES.md
- docs/REQUEST_QUOTE_FORM_REQUIREMENTS.md
- docs/SEO_CONTENT_REQUIREMENTS.md
- docs/ACCEPTANCE_CRITERIA.md
- docs/STACK.md
- docs/WEBSITE_BUILD_PLAN.md
- docs/CODEX_TASKS.md
- docs/DESIGN.md, if present

## Verification expectations
Every Codex implementation task must report:
- Files changed
- Commands run
- Results
- Manual checks needed
- Remaining risks

Use verification commands only once the app exists:
- npm run lint
- npm run typecheck
- npm run build
- npm test, if tests exist
- Playwright only after E2E is added

## Safety
- Do not commit real secrets.
- Keep .env.example placeholder-only.
- Do not deploy without explicit deployment task.
- Do not enable backend, database, payment, auth, inventory, admin, or ecommerce tools unless a later plan explicitly approves them.