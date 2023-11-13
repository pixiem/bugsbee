const allPricing = [
  {
    id: 1,
    amount: "20.00",
    name: "basic pack",
    features: [
      "Extra features",
      "Lifetime free support",
      "Upgrade options",
      "Full access",
    ],
    tagline: "No hidden charges!",
  },
  {
    id: 2,
    amount: "30.00",
    name: "medium pack",
    features: [
      "Extra features",
      "Lifetime free support",
      "Upgrade options",
      "Full access",
    ],
    tagline: "No hidden charges!",
  },
  {
    id: 3,
    amount: "40.00",
    name: "premium pack",
    features: [
      "Extra features",
      "Lifetime free support",
      "Upgrade options",
      "Full access",
    ],
    tagline: "No hidden charges!",
  },
];

const allPricing2 = [
  {
    id: 1,
    icon: "flaticon-star",
    amount: "200",
    name: "Star Package",
    employees: 0,
    tagline: "Nunc rutrum est sed massa ingilla nec.",
  },
  {
    id: 2,
    icon: "flaticon-heart",
    amount: "300",
    name: "heart Package",
    employees: 0,
    tagline: "Nunc rutrum est sed massa ingilla nec.",
  },
  {
    id: 3,
    icon: "flaticon-diamond",
    amount: "400",
    name: "daimond Package",
    employees: 0,
    tagline: "Nunc rutrum est sed massa ingilla nec.",
  },
  {
    id: 4,
    icon: "flaticon-moon",
    amount: "500",
    name: "moon Package",
    employees: 0,
    tagline: "Nunc rutrum est sed massa ingilla nec.",
  },
];

export const pricingTwo = [
  {
    id: 1,
    name: "Monthly",
    className: "month",
    allPricing,
  },
  {
    id: 2,
    name: "Annually",
    className: "year",
    allPricing,
  },
];

export const pricingThree = [
  {
    id: 1,
    name: "Monthly",
    className: "month",
    allPricing: allPricing2,
  },
  {
    id: 2,
    name: "Annually",
    className: "year",
    allPricing: allPricing2,
  },
];

export const pricingOne = {
  allFeatures: [
    "Attractive Banner",
    "Your Offers",
    "Your Exaperience",
    "Class Routine",
    "Academy Photo Album",
    "FAQ",
    "Footer Including Your Identity",
    "Full access",
  ],
  pricing: [
    {
      id: 1,
      icon: "flaticon-star",
      name: "Basic",
      amount: "BDT 6000",
      features: [ "Attractive Banner",
      "Your Offers",
      "Your Exaperience",
      "Class Routine",
      "Academy Photo Album",
      "FAQ",
      "Footer Including Your Identity",
      "Full access",],
    },
    {
      id: 2,
      icon: "flaticon-heart",
      name: "Premium",
      amount: "BDT 12000",
      features: [ "Attractive Banner",
      "Your Offers",
      "Your Exaperience",
      "Academy Photo Album",
      "FAQ",
      "Footer Including Your Identity",
      "Full access",],
    },
    {
      id: 3,
      icon: "flaticon-diamond",
      name: "Customized",
      amount: "Negotiable",
      features: [ "Attractive Banner",
      "Your Offers",
      "Your Exaperience",
      "Class Routine",
      "Academy Photo Album",
      "FAQ",
      "Footer Including Your Identity",
      "Full access",],
    },
  ],
};
