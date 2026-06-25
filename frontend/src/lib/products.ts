export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  details: string[];
  specs: {
    material: string;
    weight: string;
    dimensions: string;
    polish: string;
  };
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "german-silver-diyas",
    name: "German Silver Diyas",
    description: "Ornately crafted oil lamps symbolizing warmth, positivity, and spiritual purity.",
    image: "/images/Gemini_Generated_Image_urvwqkurvwqkurvw.png",
    count: 2
  },
  {
    id: "pooja-plates",
    name: "Pooja Plates",
    description: "Premium thalis and platters designed to hold ritual offerings with grace.",
    image: "/images/Gemini_Generated_Image_wdq99vwdq99vwdq9.png",
    count: 3
  },
  {
    id: "kalash",
    name: "Kalash",
    description: "Sacred water vessels representing abundance, wisdom, and life force.",
    image: "/images/Gemini_Generated_Image_5xmz7b5xmz7b5xmz.png",
    count: 3
  },
  {
    id: "lamps",
    name: "Lamps",
    description: "Traditional tall standing deepams and hanging lamps with premium silver polish.",
    image: "/images/Gemini_Generated_Image_3ychix3ychix3ych.png",
    count: 3
  },
  {
    id: "temple-accessories",
    name: "Temple Accessories",
    description: "Exquisite stands, bells, and backdrops designed for home altars and major temples.",
    image: "/images/Gemini_Generated_Image_125r17125r17125r.png",
    count: 3
  },
  {
    id: "decor-items",
    name: "Decor Items",
    description: "Elegant showpieces, bowls, and statues that bring luxury to any environment.",
    image: "/images/Gemini_Generated_Image_1c9xt61c9xt61c9x.png",
    count: 2
  },
  {
    id: "gift-articles",
    name: "Gift Articles",
    description: "Sophisticated keepsakes, boxes, and sprinklers for weddings, housewarmings, and festivals.",
    image: "/images/Gemini_Generated_Image_j0med9j0med9j0me.png",
    count: 3
  },
  {
    id: "festival-collections",
    name: "Festival Collections",
    description: "Curated assortments specifically customized for Varalakshmi Vratam, Diwali, and festive seasons.",
    image: "/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png",
    count: 1
  }
];

export const products: Product[] = [
  // German Silver Diyas
  {
    id: "gs-diya-floral",
    name: "German Silver Diya Stand with Floral Detailing",
    category: "german-silver-diyas",
    image: "/images/Gemini_Generated_Image_urvwqkurvwqkurvw.png",
    description: "An elegantly designed single-tier diya stand with premium floral carvings and a sturdy base, perfect for festive poojas.",
    details: [
      "Crafted from premium German Silver (Alloy of Copper, Nickel, and Zinc)",
      "High durability with double-layer anti-tarnish coating",
      "Sturdy base designed to prevent oil spills or heat damage",
      "Ideal for daily prayers and grand festival decorations"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "350g",
      dimensions: "4.5 x 4.5 x 6.2 inches",
      polish: "High-Gloss Silver Finish"
    }
  },
  {
    id: "gs-diya-peacock-classic",
    name: "Classic Silver Diya with Peacock Detailing",
    category: "german-silver-diyas",
    image: "/images/Gemini_Generated_Image_z2s3wgz2s3wgz2s3.png",
    description: "A traditional diya featuring an intricate peacock structure as the backplate, creating a beautiful silhouette when lit.",
    details: [
      "Fine filigree artwork on the peacock feathers",
      "Deep oil well holding oil/ghee for long-lasting lighting",
      "Resistant to high heat and tarnish",
      "Perfect centerpiece for wedding and housewarming gifts"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "280g",
      dimensions: "3.8 x 4.0 x 5.5 inches",
      polish: "Brushed Silver Accent"
    }
  },

  // Pooja Plates
  {
    id: "pooja-plate-lattice",
    name: "Lattice Border Silver Pooja Thali",
    category: "pooja-plates",
    image: "/images/Gemini_Generated_Image_wdq99vwdq99vwdq9.png",
    description: "A spacious pooja plate with a lattice-style laser-cut border. Includes custom circular slots for incense, haldi-kumkum, and lighting.",
    details: [
      "Embossed central floral emblem representing prosperity",
      "Lattice-cut rim prevents items from sliding off",
      "Easy-to-clean high shine finish",
      "Excellent B2B product for festive bulk gifting corporate packages"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "520g",
      dimensions: "11.5 x 11.5 x 1.0 inches",
      polish: "Mirror Polished Silver"
    }
  },
  {
    id: "pooja-plate-footed",
    name: "Silver Bowl Set with Footed Base",
    category: "pooja-plates",
    image: "/images/Gemini_Generated_Image_jxs0kjxs0kjxs0kj.png",
    description: "A set of footed silver bowls of varying diameters, designed for offering dynamic prasad and items during larger rituals.",
    details: [
      "Multiple sizes suitable for multi-course offerings",
      "Sturdy miniature footed pillars under each bowl",
      "Hand-finished details along the outer rims",
      "Nest-able design for compact storage and packaging"
    ],
    specs: {
      material: "German Silver",
      weight: "480g (set)",
      dimensions: "Various (4.0 to 6.5 inches)",
      polish: "Satin Lustre Finish"
    }
  },
  {
    id: "pooja-plate-german-5pc",
    name: "German Silver Pooja Plates Set of 5",
    category: "pooja-plates",
    image: "/images/Gemini_Generated_Image_l3qf9nl3qf9nl3qf.png",
    description: "A complete puja collection featuring five beautifully matched plates and bowls of varying depths, optimized for comprehensive rituals.",
    details: [
      "Includes main thali, offering bowl, deepa plate, and auxiliary cups",
      "Matching concentric border patterns across all five items",
      "Lightweight yet structurally strong alloy design",
      "Top-selling wholesale package for wedding organizers"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "680g (complete set)",
      dimensions: "Main Plate: 10 inches diameter",
      polish: "Bright Silver Polish"
    }
  },

  // Kalash
  {
    id: "kalash-pair-elephant",
    name: "Ganesha & Lakshmi Engraved Elephant-Legged Kalash Pair",
    category: "kalash",
    image: "/images/Gemini_Generated_Image_5xmz7b5xmz7b5xmz.png",
    description: "A breathtaking pair of sacred kalash pots featuring deep hand-engravings of Lord Ganesha and Goddess Lakshmi, supported by elephant-shaped feet.",
    details: [
      "Stunning miniature elephant figurines act as the legs",
      "High relief engraving highlighting deities and holy leaves",
      "Subtle golden accents highlighted within the silver carvings",
      "An elite, premium flagship product for grand wedding ceremonies"
    ],
    specs: {
      material: "Premium German Silver with Gold Accents",
      weight: "890g (pair)",
      dimensions: "6.0 x 6.0 x 8.5 inches each",
      polish: "Dual Gold & Silver Matte Finish"
    }
  },
  {
    id: "kalash-royal-elephant",
    name: "Royal Elephant-Legged Kalash Pots",
    category: "kalash",
    image: "/images/Gemini_Generated_Image_d5h0led5h0led5h0.png",
    description: "A variant of our premium elephant-legged kalash, showcasing detailed geometric lines and broad flares for offering holy water.",
    details: [
      "Wide rim to support coconut and mango leaves comfortably",
      "Elephant bases representing stability, wisdom, and royalty",
      "Extra thick silver plating ensures decades of shine",
      "Individually hand-hammered by master artisans"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "920g",
      dimensions: "6.5 x 6.5 x 8.8 inches",
      polish: "Oxidized Antique Silver Contrast"
    }
  },
  {
    id: "kalash-dual-urns",
    name: "Dual Polished Silver Kalash Urns",
    category: "kalash",
    image: "/images/Gemini_Generated_Image_ed9wvded9wvded9w.png",
    description: "A pair of minimalist, high-gloss kalash urns. These pots highlight the natural silver metal curvature with minimal ornamentation, fitting modern minimalist homes.",
    details: [
      "Sleek curved silhouette reflecting clean metallic highlights",
      "Flared neck designed for easy grip during rituals",
      "Treated with food-safe protective lacquer layer",
      "Highly customizable for corporate bulk branding engraving"
    ],
    specs: {
      material: "German Silver",
      weight: "610g (pair)",
      dimensions: "5.2 x 5.2 x 7.0 inches each",
      polish: "Super High Mirror Polish"
    }
  },

  // Lamps
  {
    id: "lamps-bird-set",
    name: "Bird Silhouette Silver Lamps & Diya Set",
    category: "lamps",
    image: "/images/Gemini_Generated_Image_3ychix3ychix3ych.png",
    description: "A balanced assembly featuring twin standing lamps crowned with bird silhouettes and a set of smaller surrounding offering lamps on an octagonal stand.",
    details: [
      "Stunning avian crowns representing peace and connection to nature",
      "Includes multiple small step-diya inserts for peripheral lighting",
      "Tiered octagonal base creates an altar-like presentation",
      "A complete worship lighting set for home shrines"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "1450g (total set)",
      dimensions: "Standing Lamps: 12 inches height",
      polish: "High-Gloss Platinum Silver"
    }
  },
  {
    id: "lamps-german-plate",
    name: "German Silver Lamps with Traditional Plate",
    category: "lamps",
    image: "/images/Gemini_Generated_Image_dj53m4dj53m4dj53.png",
    description: "Tall twin lamps paired with a circular central pooja plate, perfect for performing deepa-aarati during auspicious festivals.",
    details: [
      "Lamps feature standard 5-wick slots for elaborate light offerings",
      "Plate includes beautiful concentric rings of sunburst engravings",
      "Weighted base prevents tipping, ensuring high safety",
      "Favorite item for retail showroom display packs"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "1180g (set)",
      dimensions: "Height: 11.2 inches, Plate: 9.5 inches diameter",
      polish: "Classic Bright Silver"
    }
  },
  {
    id: "lamps-peacock-towers",
    name: "Peacock Top Silver Lamp Towers",
    category: "lamps",
    image: "/images/Gemini_Generated_Image_o0lzx0o0lzx0o0lz.png",
    description: "Grand temple-scale standing lamps featuring multi-tier oil reservoirs, crowned with a fully detailed dancing peacock.",
    details: [
      "Grand scale structure suitable for large halls, temples, and entrances",
      "Each reservoir features 7 wick notches for high-luminance output",
      "Modular design allows height adjustment by removing middle segments",
      "Prestige statement piece for corporate office lobbies and hotels"
    ],
    specs: {
      material: "Heavy-Gauge German Silver",
      weight: "2300g (pair)",
      dimensions: "7.0 x 7.0 x 18.5 inches each",
      polish: "Fine Antique Silver Glow"
    }
  },

  // Temple Accessories
  {
    id: "temple-pooja-stand-set",
    name: "Chiseled Silver Pooja Stand Set",
    category: "temple-accessories",
    image: "/images/Gemini_Generated_Image_125r17125r17125r.png",
    description: "A magnificent tiered pooja stand with chiseled silver steps, housing hand-held prayer bells and a matching high-necked sprinkler.",
    details: [
      "Stair-step structure representing spiritual ascension",
      "Includes two ritual hand-bells with clear, resonant acoustic tones",
      "Perfect alignment slots for incense, water, and camphor",
      "Intricately embossed borders displaying classic temple iconography"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "1720g",
      dimensions: "10.0 x 10.0 x 14.5 inches (assembled)",
      polish: "Chiseled Texture Silver"
    }
  },
  {
    id: "temple-lakshmi-kalash",
    name: "Goddess Lakshmi Motif Silver Kalash Pot",
    category: "temple-accessories",
    image: "/images/Gemini_Generated_Image_ifqea1ifqea1ifqe.png",
    description: "A highly ornate single kalash featuring a central emblem of Goddess Lakshmi sitting on a lotus, framed by a hexagonal metallic halo.",
    details: [
      "Depicts Lakshmi in traditional posture granting wealth and health",
      "Surrounding geometric frame provides a modern architectural highlight",
      "Made using special high-pressure embossing technique",
      "Designed specifically for Varalakshmi Vratam installations"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "740g",
      dimensions: "6.2 x 6.2 x 9.0 inches",
      polish: "High-Contrast Deep Silver"
    }
  },
  {
    id: "temple-lakshmi-pot-plates",
    name: "Engraved Lakshmi Silver Pot & Plates",
    category: "temple-accessories",
    image: "/images/Gemini_Generated_Image_y187qny187qny187.png",
    description: "An elegant prayer suite comprising an engraved silver pot depicting Goddess Lakshmi, surrounded by matching miniature plates for offering grains and flowers.",
    details: [
      "Complete set optimized for daily archana (ritual flower offering)",
      "Pot features continuous circumferential engravings of the Ashtalakshmi",
      "Plates are shallow and wide to allow seamless handling of items",
      "Includes a certificate of craftsmanship authenticity from Kalaburagi"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "950g (set)",
      dimensions: "Pot: 5.5 inches height, Plates: 4.8 inches diameter",
      polish: "Semi-Matte Satin Silver"
    }
  },

  // Decor Items
  {
    id: "decor-bowl-pink",
    name: "Engraved Floral bowl with Pink Interior",
    category: "decor-items",
    image: "/images/Gemini_Generated_Image_1c9xt61c9xt61c9x.png",
    description: "A luxury center table bowl showing deep-relief floral engravings on the silver exterior, juxtaposed with a rich, metallic pink anodized interior.",
    details: [
      "Bespoke dual-tone design separating classic and modern aesthetics",
      "Supported by three detailed lion-paw feet for stability",
      "Interior is completely safe for floating flower petals and water",
      "A striking addition to premium corporate boardrooms and luxury hotels"
    ],
    specs: {
      material: "German Silver & Anodized Color Core",
      weight: "680g",
      dimensions: "8.0 x 8.0 x 5.2 inches",
      polish: "Floral Exterior / Pink Chrome Interior"
    }
  },
  {
    id: "decor-trays-embossed",
    name: "Ornate Embossed Silver Trays & Bowls",
    category: "decor-items",
    image: "/images/Gemini_Generated_Image_lljr5xlljr5xlljr.png",
    description: "A combination of dynamic serving plates and bowls displaying deep repoussé work, designed to serve dry fruits or hold decorative items.",
    details: [
      "Includes two fluted handles for elegant carrying and presentation",
      "Extensive leaf-pattern and peacock motif border reliefs",
      "Flat base ensures items remain static and beautifully displayed",
      "Favored for high-end wedding return-gift packages"
    ],
    specs: {
      material: "German Silver",
      weight: "830g (set)",
      dimensions: "Tray: 12.0 x 7.5 inches, Bowls: 4.0 inches diameter",
      polish: "Polished Antique Silver Blend"
    }
  },

  // Gift Articles
  {
    id: "gift-accessory-box-collection",
    name: "Ornate Silver Pooja Box, Cups, and Accessories Collection",
    category: "gift-articles",
    image: "/images/Gemini_Generated_Image_b43qt0b43qt0b43q.png",
    description: "An extensive multi-compartment puja box paired with traditional miniature cups, designed as a premium high-end wedding token.",
    details: [
      "Includes dedicated compartments for kumkum, haldi, camphor, and wicks",
      "Embossed with miniature elephants and floral trails along the lid",
      "Tight fitting lid keeps items dry and secure",
      "Comes packaged in a premium velvet-lined presentation box"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "1120g (with box)",
      dimensions: "Pooja Box: 8.5 x 6.0 x 2.5 inches",
      polish: "Intricate Filigree Silver"
    }
  },
  {
    id: "gift-paneer-sombu",
    name: "Rosewater Sprinkler (Paneer Sombu)",
    category: "gift-articles",
    image: "/images/Gemini_Generated_Image_j0med9j0med9j0me.png",
    description: "A tall, slender traditional sprinkler with a flower-shaped nozzle, used for welcoming guests with a mist of rosewater.",
    details: [
      "Ultra-fine spray holes in the flower bulb ensure smooth misting",
      "Fluted neck designed for comfortable single-hand grip",
      "Weighted bottom prevents tipping and leakage",
      "Crucial element in South Indian weddings and housewarmings"
    ],
    specs: {
      material: "German Silver",
      weight: "320g",
      dimensions: "2.8 x 2.8 x 10.5 inches",
      polish: "High Mirror Silver Finish"
    }
  },
  {
    id: "gift-kumkum-chambers",
    name: "Chambered Silver Pooja box & Haldi-Kumkum Cups",
    category: "gift-articles",
    image: "/images/Gemini_Generated_Image_vslv8mvslv8mvslv.png",
    description: "A compact puja vanity arrangement containing round cups for holy powder offerings, supported by a common footed tray.",
    details: [
      "Perfect for placing near home doors and temple entry gates",
      "Each container comes with an individual dome-shaped lid",
      "Lightweight, compact, and extremely portable",
      "Very popular choice for bulk return gifts in retail stores"
    ],
    specs: {
      material: "German Silver",
      weight: "450g",
      dimensions: "7.2 x 3.5 x 3.0 inches",
      polish: "Smooth Satin Finish"
    }
  },

  // Festival Collections
  {
    id: "festival-varalakshmi-set",
    name: "Varalakshmi Face Sculpture & Traditional Pooja Set",
    category: "festival-collections",
    image: "/images/Gemini_Generated_Image_5yu5d55yu5d55yu5.png",
    description: "The ultimate worship kit for Varalakshmi Vratam, featuring a solid silver face sculpture of Goddess Lakshmi, paired with a matching ritual pot and lamps.",
    details: [
      "Exquisite face sculpture displaying serene, compassionate features",
      "The face is mounted securely on a silver support structure",
      "Comes with matching water pitcher, offering tumblers, and deepams",
      "The premier flagship offering of Shri Varalakshmi Wholesale"
    ],
    specs: {
      material: "Premium German Silver",
      weight: "1850g (total set)",
      dimensions: "Face Sculpture: 7.5 inches height, Pot: 6.8 inches",
      polish: "Royal Polish with Red/Green Stone Accents"
    }
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(p => p.category === categoryId);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}
