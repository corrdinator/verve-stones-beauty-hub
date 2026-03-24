import productPerfume from "@/assets/product-perfume.jpg";
import productBodyspray from "@/assets/product-bodyspray.jpg";
import productSoap from "@/assets/product-soap.jpg";
import productFacialmask from "@/assets/product-facialmask.jpg";
import productBodyscrub from "@/assets/product-bodyscrub.jpg";
import productToothpaste from "@/assets/product-toothpaste.jpg";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
};

export const categories = [
  "All",
  "Body Sprays",
  "Perfumes",
  "Soaps",
  "Facial Masks",
  "Body Scrubs",
  "Toothpaste",
];

export const products: Product[] = [
  {
    id: "bs-1",
    name: "Golden Mist Body Spray",
    category: "Body Sprays",
    price: R 24.99,
    description: "A refreshing burst of floral and citrus notes that lasts all day.",
    image: productBodyspray,
    badge: "Bestseller",
  },
  {
    id: "bs-2",
    name: "Rose Petal Body Mist",
    category: "Body Sprays",
    price: R 22.99,
    description: "Delicate rose essence blended with soft musk for everyday elegance.",
    image: productBodyspray,
  },
  {
    id: "pf-1",
    name: "Verve Noir Eau de Parfum",
    category: "Perfumes",
    price: R 59.99,
    description: "A bold, sophisticated scent with notes of amber, vanilla, and sandalwood.",
    image: productPerfume,
    badge: "New",
  },
  {
    id: "pf-2",
    name: "Blush Bloom Perfume",
    category: "Perfumes",
    price: R 54.99,
    description: "A romantic floral fragrance with peony, jasmine, and a hint of bergamot.",
    image: productPerfume,
  },
  {
    id: "sp-1",
    name: "Honey & Oat Luxury Soap",
    category: "Soaps",
    price: R 12.99,
    description: "Nourishing handmade soap with organic honey and colloidal oatmeal.",
    image: productSoap,
    badge: "Popular",
  },
  {
    id: "sp-2",
    name: "Charcoal Detox Bar",
    category: "Soaps",
    price: R 14.99,
    description: "Deep cleansing activated charcoal soap for a fresh, clear complexion.",
    image: productSoap,
  },
  {
    id: "fm-1",
    name: "Radiance Glow Facial Mask",
    category: "Facial Masks",
    price: R 29.99,
    description: "Brightening clay mask infused with vitamin C and turmeric extract.",
    image: productFacialmask,
    badge: "Fan Favorite",
  },
  {
    id: "fm-2",
    name: "Hydra Calm Night Mask",
    category: "Facial Masks",
    price: R 34.99,
    description: "Overnight hydrating mask with hyaluronic acid and lavender oil.",
    image: productFacialmask,
  },
  {
    id: "sc-1",
    name: "Coffee & Coconut Body Scrub",
    category: "Body Scrubs",
    price: R 19.99,
    description: "Exfoliating scrub that reveals silky smooth skin with natural coffee granules.",
    image: productBodyscrub,
  },
  {
    id: "sc-2",
    name: "Sugar Rose Body Polish",
    category: "Body Scrubs",
    price: R 21.99,
    description: "Gentle sugar scrub with rosehip oil for soft, luminous skin.",
    image: productBodyscrub,
    badge: "New",
  },
  {
    id: "tp-1",
    name: "Pearl White Toothpaste",
    category: "Toothpaste",
    price: 9.99,
    description: "Premium whitening toothpaste with activated charcoal and mint.",
    image: productToothpaste,
  },
  {
    id: "tp-2",
    name: "Fresh Herb Toothpaste",
    category: "Toothpaste",
    price: 8.99,
    description: "Natural herbal toothpaste with tea tree, eucalyptus, and clove.",
    image: productToothpaste,
  },
];

export type ComboOffer = {
  id: string;
  name: string;
  products: string[];
  originalPrice: number;
  comboPrice: number;
  description: string;
};

export const comboOffers: ComboOffer[] = [
  {
    id: "combo-1",
    name: "Fresh & Fabulous Bundle",
    products: ["Honey & Oat Luxury Soap", "Verve Noir Eau de Parfum"],
    originalPrice: 72.98,
    comboPrice: 59.99,
    description: "The perfect pairing of luxury cleansing and signature fragrance.",
  },
  {
    id: "combo-2",
    name: "Glow Getter Kit",
    products: ["Radiance Glow Facial Mask", "Coffee & Coconut Body Scrub", "Rose Petal Body Mist"],
    originalPrice: 72.97,
    comboPrice: 54.99,
    description: "Everything you need for a radiant head-to-toe glow.",
  },
  {
    id: "combo-3",
    name: "Daily Essentials Pack",
    products: ["Charcoal Detox Bar", "Pearl White Toothpaste", "Golden Mist Body Spray"],
    originalPrice: 49.97,
    comboPrice: 37.99,
    description: "Your everyday self-care staples in one convenient bundle.",
  },
  {
    id: "combo-4",
    name: "Pamper Night Set",
    products: ["Hydra Calm Night Mask", "Sugar Rose Body Polish"],
    originalPrice: 56.98,
    comboPrice: 44.99,
    description: "Wind down with the ultimate nighttime self-care ritual.",
  },
];
