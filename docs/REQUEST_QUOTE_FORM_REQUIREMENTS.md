# REQUEST_QUOTE_FORM_REQUIREMENTS.md

## Purpose
Help customers send a clear quote request through WhatsApp.

## Form Fields

### Name
Required:
No

Validation:
Optional text field.

### Phone Number
Required:
Yes

Validation:
Must not be empty.
Should look like a valid phone number.

### Vehicle Type
Required:
No

Suggested options:
- Auto-rickshaw
- Bike
- Scooty
- Other

### Required Part / Accessory
Required:
Yes

Validation:
Must not be empty.

### Quantity If Known
Required:
No

Validation:
Optional number or short text.

### Message / Details
Required:
No

Validation:
Optional text field.

## Submit Behavior
On submit:
- Validate required fields.
- Format details into WhatsApp message.
- Open WhatsApp to 9937940267.

## Success State
WhatsApp opens with formatted message.

## Error State
If WhatsApp fails:
Show fallback:
"WhatsApp did not open. Please call JS Auto Parts at 9937940267."

## Mobile Behavior
- Single-column form.
- Large tap targets.
- Submit button remains easy to find.
- Avoid long dropdown complexity.

## Backend Requirement
No backend storage required for MVP.