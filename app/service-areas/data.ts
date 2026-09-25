export type ServiceArea = {
  slug: string;
  city: string;
  title: string;
  description: string;
  intro: string;
  localContext: string;
  neighborhoods: string[];
  exteriorNote: string;
  faq: [string, string][];
};

export const serviceAreas: Record<string, ServiceArea> = {
  phoenix: {
    slug: "phoenix-az", city: "Phoenix", title: "House Painters in Phoenix, AZ",
    description: "Interior and exterior house painting, cabinet refinishing, garage floor coatings, and commercial painting in Phoenix from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Phoenix homeowners and property managers with a documented painting process built around surface preparation, clear scope, professional coatings, project communication, and final quality review.",
    localContext: "Phoenix properties range from older block and stucco homes to newer master-planned communities and high-end remodels. Intense sun exposure, heat, dust, monsoon weather, HOA requirements, and varied substrates make inspection and coating selection especially important.",
    neighborhoods: ["Arcadia", "Biltmore", "Ahwatukee", "North Phoenix", "Central Phoenix", "Desert Ridge"],
    exteriorNote: "Phoenix exteriors commonly show UV fading, chalking, stucco cracking, failed sealants, and wear on fascia, trim, doors, gates, and block walls. We document the condition first and build preparation around the actual surfaces.",
    faq: [["Do you paint stucco homes in Phoenix?", "Yes. Stucco condition, chalking, cracks, previous coatings, and exposure are evaluated during the estimate so preparation and the coating system can be specified appropriately."], ["Do you serve Ahwatukee and Arcadia?", "Yes. Ahwatukee and Arcadia are among the Phoenix areas we target. Submit your address and project details so we can confirm scheduling availability."], ["Can you work with HOA colors?", "Yes. If your property has an approved palette or architectural requirements, provide the HOA information and we can build the proposal around the permitted colors."]]
  },
  scottsdale: {
    slug: "scottsdale-az", city: "Scottsdale", title: "House Painters in Scottsdale, AZ",
    description: "Premium interior and exterior painting, cabinet refinishing, garage coatings, and commercial painting in Scottsdale from Color Rise Coatings.",
    intro: "Scottsdale projects often demand a high level of finish, careful property protection, clear communication, and coating systems selected for severe Arizona sun exposure. Color Rise brings a documented process from estimate through final walkthrough.",
    localContext: "From established neighborhoods to custom and luxury properties, Scottsdale includes stucco exteriors, detailed trim, masonry, metal features, large interiors, and HOA-controlled communities. Scope clarity and protection of landscaping, hardscape, fixtures, and finished surfaces are central to the plan.",
    neighborhoods: ["North Scottsdale", "McCormick Ranch", "Gainey Ranch", "Old Town Scottsdale", "DC Ranch", "McDowell Mountain Ranch"],
    exteriorNote: "West- and south-facing elevations can take heavy UV exposure. We evaluate fading, chalking, sealant failure, stucco movement, trim condition, and other vulnerable areas before recommending preparation and coating options.",
    faq: [["Do you handle higher-detail Scottsdale homes?", "Yes. The estimate defines included surfaces, protection, preparation, coating system, access, and finish expectations so higher-detail projects can be planned before production begins."], ["Can you coordinate with Scottsdale HOA requirements?", "Yes. Provide the approved palette or HOA documentation and we can incorporate the permitted colors and scope into the proposal."], ["Do you offer premium coating options?", "Yes. Where appropriate, Color Rise proposals can present Essential, Signature, and Premier options so you can compare preparation, coating choices, warranty, and investment."]]
  },
  chandler: {
    slug: "chandler-az", city: "Chandler", title: "House Painters in Chandler, AZ",
    description: "Interior and exterior house painting, cabinet refinishing, garage floor coatings, and commercial painting in Chandler from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Chandler with residential and commercial painting built around a clear written scope, Arizona-aware preparation, professional coating systems, and consistent project communication.",
    localContext: "Chandler includes established homes, newer communities, HOA-controlled neighborhoods, and commercial properties. Exterior sun exposure, stucco and trim condition, approved color palettes, and protection of landscaping and hardscape all affect how a repaint should be scoped.",
    neighborhoods: ["Ocotillo", "Fulton Ranch", "Downtown Chandler", "Sun Groves", "Cooper Commons", "Chandler Heights"],
    exteriorNote: "For Chandler exteriors, we look closely at chalking, faded elevations, stucco cracks, failed caulk, fascia and trim wear, doors, gates, and other included surfaces before defining preparation.",
    faq: [["Do you serve Ocotillo and Fulton Ranch?", "Yes. Ocotillo and Fulton Ranch are within our Chandler target service area. Submit the project address so we can confirm scheduling availability."], ["Can you match an HOA-approved color scheme?", "Yes. Provide the approved color information and we can specify the proposal around those requirements."], ["Do you offer interior and cabinet painting in Chandler?", "Yes. Color Rise offers interior painting and cabinet refinishing in addition to exterior painting and garage floor coatings."]]
  },
  gilbert: {
    slug: "gilbert-az", city: "Gilbert", title: "House Painters in Gilbert, AZ",
    description: "Interior and exterior house painting, cabinet refinishing, garage floor coatings, and commercial painting in Gilbert from Color Rise Coatings.",
    intro: "Color Rise Coatings provides Gilbert homeowners with professional painting built around preparation, clear proposals, professional coatings, project communication, and a final quality walkthrough.",
    localContext: "Gilbert has a large concentration of stucco homes, master-planned communities, HOA color requirements, busy family interiors, and garages where durable floor coatings are popular. We build the project around the actual property rather than a generic paint package.",
    neighborhoods: ["Agritopia", "Power Ranch", "Val Vista Lakes", "Seville", "Morrison Ranch", "The Islands"],
    exteriorNote: "Gilbert's intense UV and heat accelerate fading and expose weak preparation. We evaluate stucco, cracks, chalking, trim, fascia, doors, gates, and previous coatings before specifying the repaint system.",
    faq: [["Do you work in Gilbert HOA communities?", "Yes. If the HOA has approved colors or submittal requirements, provide that information during the estimate so the project can be scoped accordingly."], ["Do you offer garage floor coatings in Gilbert?", "Yes. We evaluate the slab, contamination, cracks, previous coatings, preparation requirements, UV exposure, traction, and return-to-service needs before recommending a system."], ["Can I compare different paint systems?", "Yes. When multiple specifications make sense, your proposal can show Essential, Signature, and Premier options with differences in preparation, coatings, warranty, and investment."]]
  },
  mesa: {
    slug: "mesa-az", city: "Mesa", title: "House Painters in Mesa, AZ",
    description: "Professional interior and exterior painting, cabinet refinishing, garage floor coatings, and commercial painting in Mesa from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Mesa properties with detailed scopes, substrate-specific preparation, professional coating systems, and project communication designed to make the repaint process predictable.",
    localContext: "Mesa has everything from older block and stucco construction to large master-planned communities. Strong UV, heat, dust, monsoon exposure, masonry surfaces, HOA requirements, and varied previous coatings make surface diagnosis important before painting.",
    neighborhoods: ["Dobson Ranch", "Las Sendas", "Red Mountain Ranch", "Eastmark", "Alta Mesa", "Mountain Bridge"],
    exteriorNote: "Mesa exteriors can include stucco, block walls, wood fascia, metal, doors, gates, and heavily exposed elevations. Preparation and coating selection are based on condition and substrate rather than a single specification for every home.",
    faq: [["Do you paint block walls and stucco in Mesa?", "Those surfaces can be included in an exterior proposal. We inspect the substrate and existing coating so the appropriate preparation and coating system can be defined."], ["Do you serve Eastmark and Las Sendas?", "Yes. These are among the Mesa communities we target. Submit the property address so we can confirm availability."], ["Can you handle interior, exterior, cabinets, and garage floors?", "Yes. Those are core Color Rise residential services, along with suitable commercial painting projects."]]
  },
  tempe: {
    slug: "tempe-az", city: "Tempe", title: "House Painters in Tempe, AZ",
    description: "Interior and exterior painting, cabinet refinishing, garage floor coatings, and commercial painting in Tempe from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Tempe homes, rentals, and commercial properties with clear scopes, professional preparation, coating systems matched to the surface, and accountable project communication.",
    localContext: "Tempe includes older homes, remodels, rental properties, multifamily buildings, and commercial spaces. Existing repairs, previous coatings, tenant or occupant scheduling, and intense Arizona exposure can all affect the right painting plan.",
    neighborhoods: ["South Tempe", "Warner Ranch", "The Lakes", "Broadmor", "Daley Park", "Tempe Gardens"],
    exteriorNote: "Older Tempe properties can require more diagnostic work before painting. We identify included repairs, failed coatings, cracks, sealants, substrate issues, and exclusions in writing rather than burying them in a generic estimate.",
    faq: [["Do you paint occupied homes and rentals in Tempe?", "Yes, when the scope and conditions allow. Access, protection, scheduling, occupants, and sequencing are discussed before work begins."], ["Do you handle commercial painting in Tempe?", "Yes. We can evaluate offices, retail, multifamily common areas, and other suitable commercial properties."], ["Will the proposal identify repairs separately?", "Yes. The written scope is designed to distinguish included preparation from additional repairs or excluded conditions."]]
  },
  queenCreek: {
    slug: "queen-creek-az", city: "Queen Creek", title: "House Painters in Queen Creek, AZ",
    description: "Interior and exterior house painting, cabinet refinishing, garage floor coatings, and commercial painting in Queen Creek from Color Rise Coatings.",
    intro: "Color Rise Coatings serves Queen Creek homeowners with a structured painting process built around clear scope, preparation, professional coatings, and consistent communication.",
    localContext: "Queen Creek combines newer master-planned communities, larger homes, HOA-controlled color schemes, and properties with significant sun exposure. Even newer homes can show early fading, settlement-related cosmetic cracking, or builder-grade finish wear that should be evaluated before repainting.",
    neighborhoods: ["Eastmark", "Ironwood Crossing", "Montelena", "Hastings Farms", "Queen Creek Station", "Sossaman Estates"],
    exteriorNote: "We evaluate stucco, trim, fascia, doors, gates, cracks, sealants, previous coatings, and high-exposure elevations, then define the included preparation and selected coating system in the proposal.",
    faq: [["Do you work with Queen Creek HOA colors?", "Yes. Provide the approved palette or HOA requirements and we can incorporate them into the project scope."], ["Do newer homes still need detailed prep?", "Yes. Age alone does not determine preparation. Existing coating condition, cracks, sealants, repairs, exposure, and the selected new color all matter."], ["Do you offer premium exterior systems?", "Yes. Where appropriate, proposals can include Essential, Signature, and Premier options, with eligible Premier covered surfaces offering up to an 8-year limited workmanship warranty."]]
  }
};

export const featuredServiceAreas = Object.values(serviceAreas);
