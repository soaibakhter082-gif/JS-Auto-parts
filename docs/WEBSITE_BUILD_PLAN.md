# WEBSITE_BUILD_PLAN.md

Status: Placeholder for Website Builder GPT.

Website Builder GPT should create:
- sitemap
- route structure
- page-by-page section plan
- content mapping
- SEO metadata plan
- CTA behavior plan
- responsive testing plan

Do not implement from this file yet. -----------
# docs/WEBSITE_BUILD_PLAN.md

# JS Auto Parts Website Build Plan

## 1. Website Build Summary

Project: JS Auto Parts responsive website  
Business: JS Auto Parts  
Owner: SK Samir Bux  
Phone / WhatsApp: 9937940267  
Location: Nayakothi Buxi Lane, Khordha, Odisha  
Hours: Open Every Day, 9:00 AM – 8:00 PM  
Experience: 25+ Years Local Trust  

Website type: Static-first local business marketing website  
Backend: None  
Auth: None  
Payment: None  
Ecommerce: None  
Cart/checkout: Not allowed  
Design direction: Preserve Stitch dark automotive visual direction  

Primary website goal:
Help local customers quickly understand that JS Auto Parts is a trusted auto parts shop in Khordha and contact the business through phone, WhatsApp, or location guidance.

Primary CTA:
Call JS Auto Parts

Secondary CTA:
WhatsApp JS Auto Parts

Tertiary CTA:
Get Directions / Visit Shop

Important restrictions:
- Do not add backend.
- Do not add ecommerce.
- Do not add prices.
- Do not add cart, checkout, Buy Now, Add to Cart, login, payment, fake stock, fake reviews, or fake map.
- Do not invent unavailable services, brands, inventory, reviews, ratings, or claims.
- Do not copy Android UX patterns.
- Keep the site small and focused.

---

## 2. Sitemap

## Website Type

- Static-first local business marketing website

## Public Pages

### Required MVP pages

1. Home
   - Route: /
   - Purpose: Main marketing page for business trust, product/service overview, location, hours, and CTAs.
   - Primary CTA: Call 9937940267
   - Secondary CTA: WhatsApp 9937940267

2. About
   - Route: /about
   - Purpose: Establish local trust, owner identity, experience, and shop credibility.
   - Primary CTA: Call JS Auto Parts
   - Secondary CTA: Visit Shop

3. Contact
   - Route: /contact
   - Purpose: Give phone, WhatsApp, address, hours, and visit guidance.
   - Primary CTA: Call 9937940267
   - Secondary CTA: WhatsApp 9937940267

### Optional but included as sections, not separate pages

- Products / parts categories: section on Home, not separate page.
- FAQ: section on Home and/or Contact, not separate page.
- Location: section on Contact, not a separate page.

### Excluded pages

- Pricing
- Shop
- Product detail pages
- Cart
- Checkout
- Login
- Signup
- Dashboard
- Admin
- Reviews page
- Fake map page
- Ecommerce category pages

Reason:
The project is static-first and no-ecommerce. Extra pages would create scope creep and increase the risk of fake inventory, fake prices, or unsupported backend assumptions.

---

## 3. Route Plan

| Route | Page | Purpose | Auth Required | Data Needed |
|---|---|---|---|---|
| / | Home | Main landing page for JS Auto Parts | No | Static business details |
| /about | About | Local trust, owner, experience, business story | No | Static business details |
| /contact | Contact | Phone, WhatsApp, address, hours, visit guidance | No | Static business details |
| /not-found | Not Found | Friendly fallback page | No | Static business details |

---

## 4. Page-by-Page Structure

## Route: /

Page name: Home

Purpose:
Introduce JS Auto Parts as a trusted local auto parts shop in Khordha and guide users to call, WhatsApp, or visit.

Primary user goal:
Find reliable auto parts help and contact the shop quickly.

SEO:
- Title: JS Auto Parts Khordha | Auto Parts Shop in Odisha
- Meta description: Contact JS Auto Parts in Khordha, Odisha for trusted local auto parts support. Open every day from 9:00 AM to 8:00 PM. Call or WhatsApp 9937940267.
- H1: JS Auto Parts in Khordha
- Target terms:
  - JS Auto Parts
  - auto parts Khordha
  - auto parts shop Khordha Odisha
  - car parts Khordha
  - vehicle parts Khordha

Sections:

1. Hero
   - Eyebrow: 25+ Years Local Trust
   - H1: JS Auto Parts in Khordha
   - Subheadline: Trusted local auto parts support at Nayakothi Buxi Lane, Khordha, Odisha.
   - Primary CTA: Call 9937940267
   - Secondary CTA: WhatsApp Us
   - Supporting details:
     - Open Every Day
     - 9:00 AM – 8:00 PM
     - Owner: SK Samir Bux
   - Visual direction:
     - Dark automotive hero
     - High-contrast typography
     - Subtle metallic/garage-inspired layout
     - Use existing Stitch assets only

2. Trust Bar
   - 25+ Years Local Trust
   - Open Every Day
   - Phone / WhatsApp: 9937940267
   - Khordha, Odisha

3. Parts & Support Overview
   Purpose:
   Explain what customers can contact the shop for without inventing inventory.
   Copy direction:
   - “Contact us for auto parts availability and guidance.”
   - Avoid listing specific brands, stock levels, prices, or guaranteed part availability unless provided by the business.
   Suggested cards:
   - Auto Parts Help
   - Local Vehicle Parts Support
   - Visit or Call for Availability

4. Why Choose JS Auto Parts
   Points:
   - 25+ years local trust
   - Direct owner-led local business
   - Convenient Khordha location
   - Open every day
   - Phone and WhatsApp contact available

5. Visit the Shop
   Content:
   - Nayakothi Buxi Lane, Khordha, Odisha
   - Open Every Day, 9:00 AM – 8:00 PM
   - CTA: Get Directions
   Note:
   - Do not embed a fake map.
   - Direction link may use a query-based Google Maps URL only if Codex can create it from the address.
   - Label it clearly as “Open in Maps” or “Get Directions.”

6. Contact CTA Band
   Headline:
   Need auto parts help in Khordha?
   Copy:
   Call or WhatsApp JS Auto Parts before visiting, or stop by during business hours.
   Buttons:
   - Call 9937940267
   - WhatsApp 9937940267
   - Get Directions

7. FAQ
   Suggested questions:
   - What are the shop hours?
   - Where is JS Auto Parts located?
   - Can I contact the shop on WhatsApp?
   - Who owns JS Auto Parts?
   - Does the website show prices or online stock?

   Required answer for prices/stock:
   “No. This website does not show prices, online stock, cart, or checkout. Please call or WhatsApp JS Auto Parts for current availability.”

8. Footer
   - Business name
   - Owner
   - Phone / WhatsApp
   - Location
   - Hours
   - Links: Home, About, Contact

Components:
- SiteHeader
- MobileNav
- HeroSection
- TrustBar
- FeatureCard / InfoCard
- CTAButtonGroup
- ContactCard
- FAQAccordion
- SiteFooter

States:
- Loading: Static page should not need route-level loading beyond normal app shell. Avoid artificial loaders.
- Empty: Not applicable.
- Error: Not applicable for static content.
- Success: User sees content and can contact via call/WhatsApp/directions.

---

## Route: /about

Page name: About

Purpose:
Build confidence around the owner, experience, and local presence.

Primary user goal:
Confirm this is a real local shop with long-term trust.

SEO:
- Title: About JS Auto Parts | 25+ Years Local Trust in Khordha
- Meta description: Learn about JS Auto Parts, owned by SK Samir Bux, serving local auto parts customers in Khordha, Odisha with 25+ years of trust.
- H1: About JS Auto Parts

Sections:

1. Page Hero
   - H1: About JS Auto Parts
   - Subheadline: A trusted local auto parts business in Khordha, Odisha, led by SK Samir Bux.

2. Owner & Local Trust
   - Owner: SK Samir Bux
   - Experience: 25+ Years Local Trust
   - Copy should be warm and local, not exaggerated.

3. Business Details
   - Phone / WhatsApp: 9937940267
   - Location: Nayakothi Buxi Lane, Khordha, Odisha
   - Hours: Open Every Day, 9:00 AM – 8:00 PM

4. What Customers Can Do
   - Call to ask about part availability.
   - WhatsApp for quick contact.
   - Visit during business hours.

5. CTA Band
   - Headline: Contact JS Auto Parts today
   - CTA: Call 9937940267
   - Secondary CTA: WhatsApp Us

Components:
- SiteHeader
- PageHero
- TrustCard
- BusinessDetailsCard
- CTASection
- SiteFooter

States:
- Loading: Static route only.
- Empty: Not applicable.
- Error: Not applicable.
- Success: User understands business identity and has clear contact options.

---

## Route: /contact

Page name: Contact

Purpose:
Make contact and visit information clear and easy to use.

Primary user goal:
Call, WhatsApp, or find the shop.

SEO:
- Title: Contact JS Auto Parts Khordha | Phone, WhatsApp & Location
- Meta description: Call or WhatsApp JS Auto Parts at 9937940267. Visit Nayakothi Buxi Lane, Khordha, Odisha. Open every day, 9:00 AM to 8:00 PM.
- H1: Contact JS Auto Parts

Sections:

1. Contact Hero
   - H1: Contact JS Auto Parts
   - Subheadline: Call, WhatsApp, or visit the shop in Khordha during business hours.

2. Contact Action Cards
   - Call: 9937940267
   - WhatsApp: 9937940267
   - Visit: Nayakothi Buxi Lane, Khordha, Odisha

3. Hours
   - Open Every Day
   - 9:00 AM – 8:00 PM

4. Location Details
   - Address text only.
   - Optional button: Get Directions
   - No fake embedded map.
   - If using an external map link, use the actual address query.

5. Contact Guidance
   Copy:
   “For current part availability, call or WhatsApp before visiting.”

6. FAQ
   - Does JS Auto Parts support WhatsApp contact?
   - What are today’s shop hours?
   - Is online ordering available?
   Required online ordering answer:
   “No. This website does not include online ordering, cart, checkout, payment, or ecommerce.”

Components:
- SiteHeader
- PageHero
- ContactActionCard
- BusinessHoursCard
- LocationCard
- FAQAccordion
- SiteFooter

States:
- Loading: Static route only.
- Empty: Not applicable.
- Error: Not applicable.
- Success: User can call, WhatsApp, or open directions.

---

## Route: /not-found

Page name: Not Found

Purpose:
Help users recover from invalid routes.

SEO:
- Noindex recommended if project supports metadata control.
- H1: Page Not Found

Sections:
1. Message
   - “This page could not be found.”
2. Recovery CTAs
   - Go Home
   - Contact JS Auto Parts
   - Call 9937940267

Components:
- SiteHeader
- NotFoundContent
- SiteFooter

States:
- Success: User can navigate back to useful content.

---

## 5. Content-to-Page Mapping

## Business details

Use consistently across all pages:

Business name:
JS Auto Parts

Owner:
SK Samir Bux

Phone / WhatsApp:
9937940267

Location:
Nayakothi Buxi Lane, Khordha, Odisha

Hours:
Open Every Day, 9:00 AM – 8:00 PM

Experience:
25+ Years Local Trust

## Home content

Use:
- Business name
- Trust claim
- Location
- Hours
- Phone / WhatsApp
- CTA behavior
- General auto parts support copy
- FAQ about no online pricing/stock/ecommerce

Do not use:
- Product prices
- Stock status
- Brand claims
- Fake ratings
- Fake reviews
- Online ordering language

## About content

Use:
- Owner name
- Local trust
- Business location
- Hours
- Contact options

Do not use:
- Unsupported history details
- Fake customer count
- Fake testimonials
- Awards not provided

## Contact content

Use:
- Phone
- WhatsApp
- Address
- Hours
- Visit guidance
- “Call or WhatsApp for current availability”

Do not use:
- Contact form unless specifically approved
- Backend form submission
- Fake map
- Fake email

---

## 6. CTA Behavior Plan

## CTA types

### Call CTA

Label examples:
- Call 9937940267
- Call JS Auto Parts

Behavior:
- Link: tel:9937940267
- Should be visible in hero, contact section, footer, and mobile CTA.

Accessibility:
- Use descriptive aria-label such as “Call JS Auto Parts at 9937940267.”

### WhatsApp CTA

Label examples:
- WhatsApp 9937940267
- Message on WhatsApp

Behavior:
- Link: https://wa.me/919937940267
- Open externally.
- Optional prefilled message:
  “Hello JS Auto Parts, I need help with auto parts availability.”

Accessibility:
- Use descriptive aria-label such as “Message JS Auto Parts on WhatsApp.”

### Directions CTA

Label examples:
- Get Directions
- Visit Shop

Behavior:
- External maps link using:
  Nayakothi Buxi Lane, Khordha, Odisha
- Do not embed a fake map.
- Do not display a static fake map unless a real approved map/image asset exists.

### Navigation CTA

Header:
- Home
- About
- Contact
- Primary button: Call

Mobile:
- Compact menu/sheet if available in existing design.
- Sticky bottom CTA is allowed only if it does not block content:
  - Call
  - WhatsApp

---

## 7. Component Plan

Use existing project components and Stitch assets first.

Potential shared components:

1. SiteHeader
   - Desktop nav
   - Mobile nav
   - Call CTA
   - Dark automotive styling

2. SiteFooter
   - Business details
   - Contact details
   - Internal links

3. HeroSection
   - Dark high-impact automotive layout
   - H1, subheadline, CTAs, trust badges

4. PageHero
   - Reusable for About and Contact

5. TrustBar
   - 25+ Years Local Trust
   - Open Every Day
   - Khordha, Odisha
   - Phone / WhatsApp

6. InfoCard
   - Used for parts support, trust points, contact cards

7. CTASection
   - Reusable call/WhatsApp/directions band

8. FAQAccordion
   - Use only if accordion component already exists or shadcn/ui is available.
   - Keep content accessible if custom-built.

9. ContactActionCard
   - Call
   - WhatsApp
   - Visit

10. BusinessHoursCard
   - Hours and open-every-day messaging

shadcn/ui:
- Use Button, Card, Badge, Accordion, Sheet only if shadcn/ui is installed and approved by environment plan.
- Do not overuse UI components.
- Keep all components aligned with the Stitch dark automotive design.

---

## 8. Data/API Needs

Backend:
None.

Database:
None.

Auth:
None.

Payments:
None.

Forms:
Avoid contact form for MVP because no backend/API is approved.

Static data:
Create or centralize a local static business info object only if the codebase pattern supports it.

Recommended static fields:
- businessName
- ownerName
- phone
- whatsappPhone
- address
- hours
- experience
- whatsappUrl
- telUrl
- directionsUrl

Important:
These are static display/contact values only. They are not backend fields.

---

## 9. SEO Metadata Plan

## Site-wide SEO

Site name:
JS Auto Parts

Default title:
JS Auto Parts Khordha | Auto Parts Shop in Odisha

Default description:
JS Auto Parts is a trusted local auto parts shop in Khordha, Odisha. Call or WhatsApp 9937940267. Open every day from 9:00 AM to 8:00 PM.

Open Graph:
- og:title should match page title.
- og:description should match page description.
- og:type: website
- og:image: use approved Stitch/brand image only if available. Otherwise do not invent one.

Canonical:
Use canonical paths if site URL is configured. Do not invent production domain.

Robots:
- Public pages indexable.
- Not-found noindex if supported.

Local SEO:
Use consistent NAP:
- Name: JS Auto Parts
- Address: Nayakothi Buxi Lane, Khordha, Odisha
- Phone: 9937940267

Structured data:
Optional local business JSON-LD can be added only if Codex keeps it accurate and does not invent unsupported fields.

Allowed structured data fields:
- @type: AutoPartsStore or LocalBusiness
- name
- telephone
- address
- openingHours
- founder or owner only if represented safely
- areaServed: Khordha, Odisha

Do not include:
- fake reviews
- fake aggregateRating
- fake geo coordinates
- fake priceRange unless approved
- fake sameAs links
- fake images

---

## 10. Responsive Behavior Plan

Breakpoints:
- Mobile first
- Tablet
- Desktop

Global behavior:
- Content must be readable on small screens.
- Tap targets must be large enough.
- CTAs must remain easy to reach.
- Avoid horizontal scrolling.
- Preserve dark automotive look without reducing contrast.

Header:
- Desktop: logo/name, nav links, call CTA.
- Mobile: compact menu or stacked header.
- Mobile CTA: call/WhatsApp should be prominent.

Hero:
- Mobile: single-column, text first, CTAs stacked or full-width.
- Tablet: single/two-column depending on available asset.
- Desktop: two-column hero if Stitch design supports it.

Cards:
- Mobile: one column.
- Tablet: two columns if enough width.
- Desktop: three columns where useful.

CTA sections:
- Mobile: stacked buttons.
- Desktop: inline buttons.

Footer:
- Mobile: stacked business details and links.
- Desktop: columns.

Images/assets:
- Use responsive image sizing.
- Optimize assets.
- Avoid huge hero image payloads.
- Lazy-load non-critical images where appropriate.

---

## 11. Accessibility and Basic QA Plan

Accessibility:
- Use semantic HTML landmarks: header, main, footer.
- Use one H1 per page.
- Maintain correct heading order.
- Buttons that navigate should be links styled as buttons.
- Interactive controls must be keyboard accessible.
- Visible focus states required.
- Meaningful images need alt text.
- Decorative images should use empty alt text.
- CTA labels must be descriptive.
- Color contrast must remain readable on dark backgrounds.
- Mobile tap targets should be comfortable.
- FAQ accordion must support keyboard navigation and screen readers if used.

Basic QA:
- Check all routes:
  - /
  - /about
  - /contact
  - invalid route/not-found
- Check CTA links:
  - tel:9937940267
  - WhatsApp link uses +91 country code
  - directions link uses correct address query
- Check business details on every page.
- Confirm no prohibited ecommerce language exists.
- Confirm no prices, stock, fake reviews, cart, checkout, login, or payment UI.
- Confirm responsive layout on mobile, tablet, desktop.
- Confirm production build passes.
- Confirm no obvious console errors.
- Confirm images are optimized and not oversized.

Verification commands:
- npm run lint
- npm run typecheck
- npm run build
- npm test if tests exist
- npx playwright test if E2E exists and Playwright is installed

---

## 12. Performance Budget Plan

Static-first expectations:
- Keep pages mostly server-rendered/static.
- Avoid unnecessary client components.
- Avoid heavy animation libraries.
- Avoid large JavaScript bundles.
- Optimize Stitch assets before using.
- Lazy-load below-the-fold visuals.
- Keep fonts simple.
- Avoid embedding heavy third-party widgets for MVP.
- Do not add map embed; use external directions link instead.

Performance acceptance:
- Production build passes.
- Major pages load quickly.
- No obvious console errors.
- No unnecessary backend/API calls.

---

## 13. Codex Environment Status

Codex Environment Planner output:
- Exists: yes
- Ready for Website Builder GPT: yes
- Ready for implementation: no

Project status:
- Website-only
- Static-first
- No backend
- No auth
- No payment
- No ecommerce
- Project-scoped web skills installed
- Stitch assets organized
- Git clean
- Environment ready for website build planning only

Implementation status:
Do not implement yet.

Codex may later implement only after the project owner approves the build plan and Codex tasks.

---

## 14. Files Codex Should Inspect Later

Codex should inspect:
- AGENTS.md
- package.json
- next.config.* if present
- app/ or src/app/
- components/
- public/
- styles/
- tailwind.config.* if present
- components.json if shadcn/ui is installed
- docs/DESIGN.md if present
- Stitch asset folders
- Codex Environment Planner output

Codex should not touch:
- backend files
- auth setup
- payment setup
- ecommerce/cart/checkout files
- unrelated project files
- real .env secrets
- unrelated design system rewrites
- manual review needed
