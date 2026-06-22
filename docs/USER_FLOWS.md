# USER_FLOWS.md

## Flow 1: Call Now

User goal:
Call JS Auto Parts quickly.

Steps:
1. User lands on Homepage, Contact, or another key page.
2. User taps Call Now.
3. Phone dialer opens with 9937940267.
4. User places call.

Success state:
User can call the shop.

Failure states:
- Desktop cannot call directly.
- Browser does not handle tel link.

Fallback:
Show phone number clearly as visible text.

## Flow 2: WhatsApp Enquiry

User goal:
Start a general enquiry.

Steps:
1. User taps WhatsApp Enquiry.
2. WhatsApp opens with prefilled message.
3. User sends message to JS Auto Parts.

Success state:
User starts WhatsApp conversation.

Failure states:
- WhatsApp is not installed.
- WhatsApp link fails.

Fallback:
Show phone number and Call Now CTA.

## Flow 3: Ask Availability

User goal:
Check whether a category or product is available.

Steps:
1. User opens Product Categories or Product Enquiry.
2. User chooses a category or product enquiry prompt.
3. User taps Ask Availability.
4. WhatsApp opens with category/product context.
5. User sends message.

Success state:
User sends a clear availability enquiry.

Failure states:
- User does not know exact part name.
- WhatsApp does not open.

Fallback:
Prompt user to Send Photo on WhatsApp or call.

## Flow 4: Request Quote

User goal:
Request pricing/quote without checkout.

Steps:
1. User opens Request Quote.
2. User enters phone number and required part/accessory.
3. User optionally adds name, vehicle type, quantity, and details.
4. User submits.
5. WhatsApp opens with formatted quote message.
6. User sends message.

Success state:
JS Auto Parts receives a clear quote request on WhatsApp.

Failure states:
- Required fields missing.
- Phone number invalid.
- WhatsApp does not open.

Fallback:
Show validation message or Call Now fallback.

## Flow 5: Send Photo on WhatsApp

User goal:
Get help identifying a part.

Steps:
1. User taps Send Photo on WhatsApp.
2. WhatsApp opens with message asking user to attach a photo.
3. User attaches photo inside WhatsApp.
4. User sends message.

Success state:
User sends product/part photo to JS Auto Parts.

Failure states:
- User expects website upload.
- WhatsApp does not open.

Fallback:
Explain that photo is attached directly in WhatsApp.

## Flow 6: Contact / Visit

User goal:
Find shop details before visiting.

Steps:
1. User opens Contact.
2. User checks phone, WhatsApp, address, and hours.
3. User calls or messages before visiting.

Success state:
User has enough information to contact or visit the shop.

Failure states:
- Map link not confirmed.
- User needs precise directions.

Fallback:
Show address clearly and encourage calling/WhatsApp.