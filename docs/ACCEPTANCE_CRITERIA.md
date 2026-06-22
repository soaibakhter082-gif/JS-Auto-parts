# ACCEPTANCE_CRITERIA.md

## Global Acceptance Criteria

### Business Details
- Shop name appears as JS Auto Parts.
- Owner appears as SK Samir Bux where owner is mentioned.
- Phone / WhatsApp appears as 9937940267.
- Address appears as Nayakothi Buxi Lane, Khordha, Odisha.
- Hours appear exactly as Open Every Day, 9:00 AM – 8:00 PM.
- No page says Sunday closed.
- No page says Mon–Sat only.

### CTA Behavior
- Call Now opens phone dialer.
- WhatsApp Enquiry opens WhatsApp.
- Ask Availability opens WhatsApp with relevant context.
- Request Quote form opens WhatsApp with formatted message.
- Send Photo on WhatsApp opens WhatsApp with photo instruction message.

### Validation Behavior
- Request Quote blocks submit when phone number is empty.
- Request Quote blocks submit when required part/accessory is empty.
- Invalid phone number shows correction message.
- Optional fields can be left blank.

### Loading State
- Quote form may show “Opening WhatsApp…” before redirect.
- Static pages should not require heavy loading states.

### Empty State
- Request Quote starts as blank form.
- No product inventory empty state is required because MVP has no product database.

### Error State
- If WhatsApp does not open, show fallback phone number.
- If map link is not confirmed, omit map or show address only.
- If CTA script fails, visible contact details remain usable.

### Auth / Permission Behavior
- No login required.
- No account required.
- No admin permission required.
- No customer data storage required.

### Mobile Behavior
- Mobile sticky Call / WhatsApp bar is visible.
- Tap targets are comfortable.
- Form fields are single-column.
- CTAs do not overlap content.
- Text remains readable on mobile.

### Non-Goal Enforcement
The site must not include:
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