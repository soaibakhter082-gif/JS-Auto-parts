const mapsQuery =
  "JS AUTO PARTS KHORDHA, Nayakothi Buxi Lane, Khordha, Odisha, India";
const confirmedDirectionsUrl =
  "https://www.google.com/maps/place/JS+AUTO+PARTS+KHORDHA/@20.1830771,85.6177136,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19ab00080ed13f:0xcf23a0c5c72a723!8m2!3d20.1830721!4d85.6202885!16s%2Fg%2F11wgp9mdz6";
const confirmedEmbedQuery = encodeURIComponent("20.1830721,85.6202885");

export const businessInfo = {
  businessName: "JS Auto Parts",
  ownerName: "SK Samir Bux",
  phone: "9937940267",
  whatsappPhone: "9937940267",
  address: "Nayakothi Buxi Lane, Khordha, Odisha",
  hours: "Open Every Day, 9:00 AM – 8:00 PM",
  experience: "25+ Years Local Trust",
  telUrl: "tel:9937940267",
  whatsappUrl: "https://wa.me/919937940267",
  mapsQuery,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${confirmedEmbedQuery}&z=17&output=embed`,
  directionsUrl: confirmedDirectionsUrl,
} as const;
