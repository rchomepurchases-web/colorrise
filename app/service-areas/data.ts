export type ServiceArea = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  neighborhoods: string[];
};

export const serviceAreas: Record<string, ServiceArea> = {
  scottsdale: {
    slug: "scottsdale-az",
    city: "Scottsdale",
    title: "House Painters in Scottsdale, AZ",
    description: "Premium interior, exterior, cabinet, and coating services for Scottsdale homeowners from Color Rise Coatings.",
    intro: "Scottsdale homes demand careful preparation, clean execution, and coatings selected for Arizona heat and UV exposure. Color Rise Coatings provides professional repainting with a clear scope, dependable communication, and a finish built to last.",
    neighborhoods: ["North Scottsdale", "McCormick Ranch", "Gainey Ranch", "Old Town Scottsdale", "DC Ranch", "McDowell Mountain Ranch"],
  },
  phoenix: {
    slug: "phoenix-az",
    city: "Phoenix",
    title: "House Painters in Phoenix, AZ",
    description: "Professional interior, exterior, cabinet, and coating services for Phoenix homeowners from Color Rise Coatings.",
    intro: "From stucco exteriors to full interior repaints, Color Rise Coatings helps Phoenix homeowners protect and refresh their properties with professional preparation, premium coatings, and a straightforward project process.",
    neighborhoods: ["Arcadia", "Biltmore", "Ahwatukee", "North Phoenix", "Central Phoenix", "Desert Ridge"],
  },
  chandler: {
    slug: "chandler-az",
    city: "Chandler",
    title: "House Painters in Chandler, AZ",
    description: "Professional interior, exterior, cabinet, and coating services for Chandler homeowners from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Chandler homeowners with detailed interior and exterior painting, cabinet refinishing, and durable concrete coatings. Every project starts with a clear written scope and preparation matched to the surface.",
    neighborhoods: ["Ocotillo", "Fulton Ranch", "Downtown Chandler", "Sun Groves", "Cooper Commons", "Chandler Heights"],
  },
  gilbert: {
    slug: "gilbert-az",
    city: "Gilbert",
    title: "House Painters in Gilbert, AZ",
    description: "Professional interior, exterior, cabinet, and coating services for Gilbert homeowners from Color Rise Coatings.",
    intro: "Color Rise Coatings provides Gilbert homeowners with professional repainting built around careful preparation, clean lines, reliable communication, and coating systems suited to Arizona conditions.",
    neighborhoods: ["Agritopia", "Power Ranch", "Val Vista Lakes", "Seville", "Morrison Ranch", "The Islands"],
  },
};

export const featuredServiceAreas = Object.values(serviceAreas);
