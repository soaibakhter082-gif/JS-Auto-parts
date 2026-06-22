# QA Handoff — JS Auto Parts Website

## Project

JS Auto Parts responsive website

## Current status

Implementation is complete for the static-first MVP.

Implemented routes:
- `/`
- `/product-categories`
- `/products`
- `/request-quote`
- `/about`
- `/contact`
- custom not-found page

Stack:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Static-first
- No backend
- No auth
- No payment
- No ecommerce

## Business details to verify everywhere

- Business: JS Auto Parts
- Owner: SK Samir Bux
- Phone / WhatsApp: 9937940267
- Location: Nayakothi Buxi Lane, Khordha, Odisha
- Hours: Open Every Day, 9:00 AM – 8:00 PM
- Experience: 25+ Years Local Trust

## Important restrictions

The site must not contain:
- backend
- auth
- login
- payment
- ecommerce
- cart
- checkout
- Buy Now
- Add to Cart
- visible prices
- fake stock
- fake inventory
- fake reviews
- ratings
- fake map
- contact form
- unsupported brands
- unsupported testimonials
- invented business claims

Allowed exceptions:
- FAQ may say the website does not show prices, stock, cart, checkout, payment, ecommerce, or online ordering.
- Contact copy may say users should call or WhatsApp for current availability.
- Directions CTA may open Google Maps search using the real address.

## Files QA should read first

- AGENTS.md
- docs/WEBSITE_BUILD_PLAN.md
- docs/CODEX_TASKS.md
- docs/DESIGN.md
- docs/STACK.md
- docs/COMPONENT_INVENTORY.md
- web/README.md
- web/package.json
- web/lib/business-info.ts
- stitch/notes/STITCH_ASSET_MANIFEST.md
- stitch/implementation-reference/design-system/premium-garage-narrative.md

## Files/folders QA should inspect

- web/app/
- web/components/
- web/lib/
- web/public/
- web/app/globals.css
- stitch/screens/ if available
- stitch/assets/ if available
- stitch/raw/ if available

## QA scope

### 1. Build verification

Run from `web/`:

```bash
npm run lint
npm run typecheck
npm run build
