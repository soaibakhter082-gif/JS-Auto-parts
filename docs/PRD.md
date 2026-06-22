# PRD.md

## 1. Overview
JS Auto Parts needs a responsive local business website focused on enquiry generation, not ecommerce. The site should present the shop, product categories, enquiry options, request quote flow, trust messaging, and accurate contact details.

## 2. Problem Statement
Local vehicle owners and mechanics need a quick way to ask whether JS Auto Parts has a required part or accessory. They may not know the exact part name and may need to send a photo. The website should make it easy to call, WhatsApp, ask availability, or request a quote.

## 3. Target Users
- Auto-rickshaw owners
- Auto-rickshaw drivers
- Bike owners
- Scooty owners
- Local mechanics
- Local customers in and around Khordha

## 4. Goals
- Generate customer enquiries.
- Increase phone and WhatsApp contact.
- Help users understand available product categories.
- Build trust using 25+ years local experience.
- Provide clear contact and visiting information.
- Work well on mobile.

## 5. Non-Goals
Do not include:
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
- Fake map unless real map link is confirmed
- Ecommerce wording
- Sunday closed wording
- Mon–Sat only wording

## 6. MVP Scope
The MVP is a six-page responsive website:
1. Homepage
2. Product Categories
3. Products / Product Enquiry
4. Request Quote
5. About
6. Contact

The MVP must support:
- Call Now
- WhatsApp Enquiry
- Ask Availability
- Request Quote
- Send Photo on WhatsApp
- Mobile sticky Call / WhatsApp bar
- SEO-friendly local content
- Correct business details

## 7. Core User Flows

### Flow 1: Call Now
User lands on any key page → taps Call Now → phone dialer opens with 9937940267.

### Flow 2: WhatsApp Enquiry
User taps WhatsApp Enquiry → WhatsApp opens with a prefilled enquiry message.

### Flow 3: Ask Availability
User browses category/product enquiry content → taps Ask Availability → WhatsApp opens with category/product context.

### Flow 4: Request Quote
User opens Request Quote → fills form → submits → WhatsApp opens with formatted quote request.

### Flow 5: Send Photo on WhatsApp
User taps Send Photo on WhatsApp → WhatsApp opens with message asking user to attach a photo.

### Flow 6: Contact / Visit
User opens Contact → checks phone, address, and hours → calls or messages before visiting.

## 8. Features

### Feature 1: Global Call Now CTA
Description:
Users can call JS Auto Parts from key pages.

User value:
Fastest path for urgent local enquiries.

Acceptance criteria:
- Call Now opens tel:9937940267.
- Phone number is visible as text where relevant.
- CTA appears on Homepage, Contact, and mobile sticky bar.
- CTA styling uses amber/yellow.
- Desktop users can still read/copy the number.
- No CTA says Buy Now or Order Now.

Priority:
P0

### Feature 2: Global WhatsApp Enquiry CTA
Description:
Users can start a WhatsApp enquiry from key pages.

User value:
Customers can message without calling.

Acceptance criteria:
- WhatsApp Enquiry opens WhatsApp for 9937940267.
- Message is prefilled with a general enquiry.
- CTA appears on Homepage, Product pages, Contact, and mobile sticky bar.
- CTA styling uses green.
- If WhatsApp does not open, phone number remains visible.

Priority:
P0

### Feature 3: Product Categories
Description:
Users can browse major product categories.

User value:
Customers quickly understand what JS Auto Parts handles.

Acceptance criteria:
- Show approved categories:
  - Auto-rickshaw Parts
  - Tyres & Tubes
  - Helmets
  - Engine Oils
  - Batteries
  - Lights & Indicators
  - Horns
  - Bike Accessories
  - Scooty Accessories
  - General Vehicle Accessories if needed
- Each category has Ask Availability CTA.
- No prices are shown.
- No fake stock counts are shown.
- Cards are responsive on mobile.

Priority:
P0

### Feature 4: Products / Product Enquiry Page
Description:
A page explaining how customers can ask availability or send details/photos.

User value:
Customers can enquire even when they do not know the exact part name.

Acceptance criteria:
- Page includes Ask Availability CTA.
- Page includes Send Photo on WhatsApp CTA.
- Product examples stay category-level unless real inventory is provided.
- No ecommerce wording appears.
- No prices or stock status are shown.
- Mobile layout prioritizes CTAs.

Priority:
P0

### Feature 5: Request Quote Form
Description:
A simple form that prepares a quote request for WhatsApp.

User value:
Customers can send clearer quote requests.

Acceptance criteria:
- Form includes:
  - Name
  - Phone number
  - Vehicle type
  - Required part/accessory
  - Quantity if known
  - Message/details
- Required:
  - Phone number
  - Required part/accessory
- Optional:
  - Name
  - Vehicle type
  - Quantity
  - Message/details
- Submit opens WhatsApp with formatted message.
- Missing required fields show validation errors.
- Invalid phone input shows a correction message.
- A short “Opening WhatsApp…” state may appear.
- If WhatsApp fails, show call fallback.
- Form is single-column on mobile.

Priority:
P0

### Feature 6: About Page
Description:
Build local business trust.

User value:
Customers feel confident contacting a known local shop.

Acceptance criteria:
- Shows JS Auto Parts name.
- Shows owner: SK Samir Bux.
- Mentions 25+ Years Local Trust.
- Avoids fake reviews.
- Includes Call and WhatsApp CTAs.
- Mobile layout is readable.

Priority:
P0

### Feature 7: Contact Page
Description:
Show accurate shop contact and visit details.

User value:
Customers can call, message, or find the shop location details.

Acceptance criteria:
- Shows phone/WhatsApp: 9937940267.
- Shows location: Nayakothi Buxi Lane, Khordha, Odisha.
- Shows hours exactly: Open Every Day, 9:00 AM – 8:00 PM.
- Does not say Sunday closed.
- Does not say Mon–Sat only.
- Does not show fake map unless real map link is confirmed.
- Includes Call Now and WhatsApp Enquiry CTAs.

Priority:
P0

## 9. Screens / Pages Needed
- Homepage
- Product Categories
- Products / Product Enquiry
- Request Quote
- About
- Contact

## 10. Backend / Data Needs
No backend required for MVP.

Potential future backend only if:
- Quote requests need storage.
- Email notifications are needed.
- Owner wants admin-editable categories/content.

## 11. Auth / Permissions
No auth.
No customer account.
No admin account.

## 12. Offline / Local-First Requirements
No offline-first requirements.
Static contact details should remain visible even if scripts fail.

## 13. AI Requirements
None.

## 14. Edge Cases
- WhatsApp does not open: phone fallback remains visible.
- User does not know exact part: prompt Send Photo on WhatsApp.
- User wants price: route to Request Quote.
- User wants stock: route to Ask Availability.
- Real map unavailable: show address only.
- Desktop user cannot call directly: show visible phone number.

## 15. Success Metrics
- Call Now taps
- WhatsApp Enquiry taps
- Ask Availability taps
- Request Quote form submissions/redirects
- Send Photo on WhatsApp taps
- Contact page visits
- Mobile sticky CTA taps

## 16. Risks
- Site accidentally feels like ecommerce.
- Incorrect business hours appear.
- Fake inventory/reviews/map claims are added.
- Quote form becomes too complex.
- Too many categories reduce clarity.

## 17. Open Questions
- Is there a confirmed Google Maps link?
- Are real photos available?
- Should analytics be included?
- Should local-language copy be added later?

## 18. Codex Environment Planning Inputs
Project type:
Website only

Target platform:
Responsive desktop + mobile website

Frontend/app stack if known:
Not decided by Product Planner.

Backend decision:
No backend required for MVP.

Design workflow:
Stitch design/export completed. Stitch assets are being organized into JS-Auto-Parts-Website/stitch/.

Testing expectations:
Responsive layout, CTA links, WhatsApp messages, quote form validation, content consistency, non-goal enforcement.

Deployment expectations:
Static website deployment likely.

Important constraints:
Do not add ecommerce, fake stock, fake reviews, fake map, wrong hours, or login.

What Codex should not do yet:
- Do not build.
- Do not install project-specific tools.
- Do not create app code.
- Do not change product scope.

## 19. Handoff Notes
Next recommended GPT:
Codex Environment Planner GPT.