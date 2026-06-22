# DESIGN.md

## Product
JS Auto Parts responsive website

## Design Goal
Create a premium, cinematic, high-impact automotive website for a trusted 25+ year local auto parts and accessories shop in Khordha, Odisha. The website should quickly build trust, show product/category availability, and drive call/WhatsApp enquiries.

## Target User
Auto-rickshaw owners, auto-rickshaw drivers, bike owners, scooty owners, local mechanics, and nearby customers looking for parts and accessories.

## Brand Personality
- Trusted local expert
- Mechanically strong
- Fast and practical
- Premium garage feel
- Energetic but reliable
- Helpful and approachable

## Visual Principles
1. Contact-first: Call and WhatsApp are always easy to find.
2. Premium local: Make the shop feel modern without losing local trust.
3. Automotive-specific: Use rubber, chrome, light streaks, tyres, shelves, and mechanical motion.
4. Clear hierarchy: Hero, trust, categories, and contact should be immediately scannable.
5. No fake ecommerce: This is enquiry-first, not online shopping.

## Color System
Primary:
- Carbon black / tyre rubber

Secondary:
- Deep graphite / metallic steel

Background:
- Dark garage gradient

Surface:
- Metallic dark cards with chrome rim highlights

Text:
- White / near-white

Muted:
- Steel grey

Accent:
- Electric blue

CTA:
- Amber/yellow for Call and Request Quote
- WhatsApp green for WhatsApp

Error:
- Brake red

Success:
- Confirmation green

## Typography
Headings:
Bold, condensed, automotive-style sans serif.

Body:
Readable modern sans serif.

Labels:
Compact, clear, high contrast.

Buttons:
Bold, direct, action-led.

## Spacing and Layout
Grid:
Responsive desktop grid with strong hero composition and card sections.

Spacing:
Consistent section spacing; avoid cramped product walls.

Radius:
Rounded metallic cards and pill badges.

Shadows:
Dark shadows with blue/amber glow accents.

## Components
- Button
- Input
- Card
- Navigation
- Mobile menu
- Toast / inline feedback
- Empty state
- Loading state
- Error state
- Product category card
- Product/enquiry card
- Quote form
- Trust badge
- Contact card
- Opening hours card
- Floating WhatsApp button
- Mobile bottom CTA bar

## Website Design Rules
- Header must include Call and WhatsApp on desktop.
- Mobile must include bottom Call / WhatsApp bar.
- Homepage must show trust, categories, and contact quickly.
- Use real shop details.
- Use uploaded shop photos as reference for visual identity and product categories.
- Do not use raw photos as the main hero unless heavily edited/stylized.
- Avoid fake map, fake reviews, fake stock, fake pricing, fake delivery claims.
- Inner pages should keep enquiry CTAs visible.

## Android Design Rules
Not applicable. This project is website only.

## Page Notes

### Homepage
Purpose:
Introduce JS Auto Parts as a trusted local parts shop and drive call/WhatsApp enquiries.

Main CTA:
Call 9937940267

Secondary CTA:
WhatsApp Enquiry

Components:
Hero, trust badge, category cards, vehicle support strip, product showcase, why choose us, request part CTA, contact/hours block.

States:
Loading category/product sections, reduced-motion hero, mobile menu open.

### Product Categories
Purpose:
Show major product categories and guide users to ask availability.

Main CTA:
Ask availability on WhatsApp.

Components:
Category grid, vehicle filters, contact CTA, empty category/search state.

### Products / Enquiry
Purpose:
Allow search/browse of product examples and route users to call/WhatsApp.

Main CTA:
Ask on WhatsApp.

Components:
Search input, filter chips, product/enquiry cards, empty search state, loading state.

### Request Quote
Purpose:
Capture part request details or guide users to faster WhatsApp/call.

Main CTA:
Submit Request / WhatsApp

Components:
Quote form, help panel, success state, error state, loading state.

### About
Purpose:
Build trust using 25+ years, owner name, local shop story, and product range.

Main CTA:
Call / WhatsApp

Components:
Trust story, owner card, product range, visual showcase.

### Contact
Purpose:
Make phone, WhatsApp, address, owner, and hours easy to access.

Main CTA:
Call 9937940267

Components:
Contact cards, hours card, address card, WhatsApp CTA, styled location/address block.

## Accessibility Rules
- Strong contrast on dark background
- Text over visuals must have overlay
- Buttons must have clear labels
- Icons need text labels
- Keyboard focus states must be visible
- Forms need labels and clear errors
- Mobile tap targets must be large
- Reduced-motion support required
- Avoid animation that flashes or distracts

## Codex Environment Notes
Environment plan exists: no.

Codex must not start implementation from this file yet.

Before Codex:
- Product Planner GPT must convert the selected design direction into PRD, MVP scope, page list, user flows, and content structure.
- Codex Environment Planner GPT must define environment, skills, MCPs, subagents, hooks, plugins/apps, testing, and deployment expectations.
- Website Builder GPT must create an implementation plan after product and environment planning.

## What Codex Must Not Invent Later
- Ecommerce
- Cart
- Online payment
- Login/account
- Admin dashboard
- Delivery tracking
- Mechanic booking
- Fake reviews
- Fake Google map
- Fake inventory or pricing
- Unapproved libraries or animation tools

## Handoff Notes
This DESIGN.md is a design exploration draft only. It can become Codex-ready after PRD, MVP scope, and Codex Environment Planner output exist.