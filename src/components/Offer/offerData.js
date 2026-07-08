import serenity from "../../assets/images/offers/serenity.jpg";
import royal from "../../assets/images/offers/royal.jpg";
import bridal from "../../assets/images/offers/bridal.jpg";

export const offers = [
  {
    id: 1,

    title: "Serenity Escape",

    image: serenity,

    icon: "leaf",

    discount: "25% OFF",

    oldPrice: "₹3,999",

    newPrice: "₹2,999",

    popular: false,

    features: [
      "Aromatherapy Massage",
      "Steam Bath",
      "Body Scrub",
      "Herbal Tea",
    ],
  },

  {
    id: 2,

    title: "Royal Luxury",

    image: royal,

    icon: "crown",

    discount: "20% OFF",

    oldPrice: "₹9,999",

    newPrice: "₹7,999",

    popular: true,

    features: [
      "Full Day Spa Access",
      "Jacuzzi & Steam",
      "Organic Facial",
      "Luxury Lunch",
      "Body Polish",
    ],
  },

  {
    id: 3,

    title: "Bridal Glow",

    image: bridal,

    icon: "spa",

    discount: "25% OFF",

    oldPrice: "₹5,999",

    newPrice: "₹4,499",

    popular: false,

    features: [
      "Bridal Facial",
      "Body Spa",
      "Hair Spa",
      "Makeup Session",
    ],
  },
];