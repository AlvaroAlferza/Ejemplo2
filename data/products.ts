export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  images?: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "elfo-navideno",
    name: "Elfo navideño",
    category: "Elfos",
    description:
      "Personaje decorativo ideal para darle personalidad a tus espacios.",
    price: 89,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "papa-noel-decorativo",
    name: "Papá Noel decorativo",
    category: "Papá Noel",
    description:
      "Una pieza protagonista para crear un ambiente navideño especial.",
    price: 95,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },

  {
    id: "peluche-navideno",
    name: "Peluche navideño",
    category: "Peluches",
    description:
      "Un detalle cálido para complementar la decoración de Navidad.",
    price: 79,

    image: "/images/adornos2.jpg",

    images: [
      "/images/adornos2.jpg",
      "/images/adornos3.jpg",
      "/images/adornos4.jpg",
    ],

    featured: true,
  },
];