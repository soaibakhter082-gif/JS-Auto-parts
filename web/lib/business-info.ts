const mapsQuery =
  "JS Auto Parts, Nayakothi Buxi Lane, Khordha, Odisha, India";
const encodedMapsQuery = encodeURIComponent(mapsQuery);

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
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodedMapsQuery}&output=embed`,
  directionsUrl:
    `https://www.google.com/maps/search/?api=1&query=${encodedMapsQuery}`,
} as const;
