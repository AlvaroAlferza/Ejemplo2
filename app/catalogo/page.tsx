"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Check,
  Gift,
  Heart,
  LoaderCircle,
  Mail,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import Navbar from "@/components/ui/Navbar";
import { products } from "@/data/products";

type SelectedProduct = {
  id: string;
  quantity: number;
};

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/mnpnavpa";

/* ============================================================
   LUCES DEL FONDO
============================================================ */

const lights = [
  { left: "3%", top: "18%", delay: 0, size: 10 },
  { left: "11%", top: "62%", delay: 1.2, size: 7 },
  { left: "20%", top: "10%", delay: 2.1, size: 9 },
  { left: "29%", top: "84%", delay: 0.5, size: 8 },
  { left: "39%", top: "22%", delay: 1.7, size: 11 },
  { left: "48%", top: "88%", delay: 2.8, size: 8 },
  { left: "57%", top: "12%", delay: 0.9, size: 10 },
  { left: "67%", top: "80%", delay: 2.4, size: 11 },
  { left: "76%", top: "17%", delay: 1.3, size: 8 },
  { left: "86%", top: "65%", delay: 3, size: 10 },
  { left: "94%", top: "27%", delay: 0.7, size: 11 },
];

/* ============================================================
   ESTRELLAS
============================================================ */

const stars = [
  { left: "7%", top: "10%", size: 25, delay: 0 },
  { left: "24%", top: "76%", size: 19, delay: 1.5 },
  { left: "43%", top: "9%", size: 23, delay: 2.2 },
  { left: "63%", top: "86%", size: 26, delay: 0.8 },
  { left: "82%", top: "10%", size: 22, delay: 2.7 },
  { left: "93%", top: "76%", size: 20, delay: 1.2 },
  { left: "34%", top: "48%", size: 17, delay: 0.4 },
  { left: "71%", top: "43%", size: 18, delay: 2.8 },
];

/* ============================================================
   ORNAMENTOS
============================================================ */

const ornaments = [
  {
    left: "16%",
    top: "22%",
    color: "#7A2631",
    delay: 0,
    size: 32,
  },
  {
    left: "88%",
    top: "43%",
    color: "#12352B",
    delay: 1.8,
    size: 36,
  },
  {
    left: "53%",
    top: "6%",
    color: "#C8A45D",
    delay: 2.5,
    size: 29,
  },
  {
    left: "5%",
    top: "70%",
    color: "#C8A45D",
    delay: 1,
    size: 25,
  },
];

/* ============================================================
   PARTÍCULAS
============================================================ */

const particles = Array.from(
  { length: 34 },
  (_, index) => ({
    left: `${(index * 29) % 100}%`,
    size: 2 + (index % 4),
    delay: (index % 8) * 0.7,
    duration: 5 + (index % 5),
    opacity: 0.3 + (index % 5) * 0.1,
  })
);

/* ============================================================
   FONDO CREMA ANIMADO
============================================================ */

function AnimatedCreamBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* HALO VERDE */}

      <motion.div
        className="
          absolute
          -left-40
          -top-40
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#12352B]/[0.14]
          blur-[100px]
        "
        animate={{
          x: [0, 100, 40, 0],
          y: [0, 70, -20, 0],
          scale: [1, 1.25, 0.9, 1],
          opacity: [0.55, 0.8, 0.5, 0.55],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* HALO ROJO */}

      <motion.div
        className="
          absolute
          -bottom-48
          -right-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-[#7A2631]/[0.13]
          blur-[110px]
        "
        animate={{
          x: [0, -100, -30, 0],
          y: [0, -70, 20, 0],
          scale: [1, 1.2, 0.92, 1],
          opacity: [0.5, 0.8, 0.45, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW DORADO CENTRAL */}

      <motion.div
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[850px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C8A45D]/[0.10]
          blur-[130px]
        "
        animate={{
          scale: [0.7, 1.25, 0.8, 1],
          opacity: [0.25, 0.75, 0.3, 0.55],
          rotate: [0, 20, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW DORADO SUPERIOR */}

      <motion.div
        className="
          absolute
          left-[40%]
          top-[-180px]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#C8A45D]/[0.10]
          blur-[90px]
        "
        animate={{
          x: [-100, 120, -80],
          scale: [0.8, 1.2, 0.8],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TEXTURA */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.30]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle,
              #C8A45D 1.2px,
              transparent 1.8px
            )
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* LÍNEA DORADA */}

      <motion.div
        className="
          absolute
          -left-[20%]
          top-[35%]
          h-[2px]
          w-[140%]
          rotate-[-18deg]
          bg-gradient-to-r
          from-transparent
          via-[#C8A45D]/40
          to-transparent
          blur-[1px]
        "
        animate={{
          x: ["-10%", "15%", "-10%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* LÍNEA ROJA */}

      <motion.div
        className="
          absolute
          -left-[20%]
          top-[62%]
          h-[2px]
          w-[140%]
          rotate-[16deg]
          bg-gradient-to-r
          from-transparent
          via-[#7A2631]/30
          to-transparent
          blur-[1px]
        "
        animate={{
          x: ["10%", "-15%", "10%"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* PARTÍCULAS */}

      {particles.map((particle, index) => (
        <motion.span
          key={`particle-${index}`}
          className="
            absolute
            z-0
            rounded-full
            bg-[#C8A45D]
          "
          style={{
            left: particle.left,
            top: `${15 + ((index * 17) % 80)}%`,
            width: particle.size,
            height: particle.size,
            boxShadow:
              "0 0 12px 3px rgba(200,164,93,0.45)",
          }}
          animate={{
            y: [-20, 30, -20],
            x: [-8, 8, -8],
            opacity: [
              particle.opacity * 0.3,
              particle.opacity,
              particle.opacity * 0.3,
            ],
            scale: [0.7, 1.6, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ESTRELLAS */}

      {stars.map((star, index) => (
        <motion.div
          key={`star-${index}`}
          className="
            absolute
            z-0
            text-[#C8A45D]
            drop-shadow-[0_0_8px_rgba(200,164,93,0.65)]
          "
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            rotate: [0, 45, -35, 0],
            scale: [0.5, 1.5, 0.7, 1.2, 0.5],
            opacity: [0.2, 1, 0.35, 1, 0.2],
          }}
          transition={{
            duration: 4 + index * 0.35,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star
            size={star.size}
            strokeWidth={1.4}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* SPARKLES */}

      <motion.div
        className="
          absolute
          left-[30%]
          top-[30%]
          z-0
          text-[#C8A45D]
          drop-shadow-[0_0_15px_rgba(200,164,93,0.8)]
        "
        animate={{
          scale: [0, 1.5, 0],
          rotate: [0, 90, 180],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      >
        <Sparkles size={32} />
      </motion.div>

      <motion.div
        className="
          absolute
          right-[25%]
          top-[65%]
          z-0
          text-[#C8A45D]
          drop-shadow-[0_0_15px_rgba(200,164,93,0.8)]
        "
        animate={{
          scale: [0, 1.4, 0],
          rotate: [0, -90, -180],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          delay: 2.5,
        }}
      >
        <Sparkles size={27} />
      </motion.div>

      {/* LUCES */}

      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="
            absolute
            z-0
            rounded-full
            bg-[#C8A45D]
          "
          style={{
            left: light.left,
            top: light.top,
            width: light.size,
            height: light.size,
            boxShadow:
              "0 0 25px 8px rgba(200,164,93,0.55)",
          }}
          animate={{
            opacity: [0.15, 1, 0.25, 1, 0.15],
            scale: [0.5, 1.7, 0.8, 1.5, 0.5],
            y: [-12, 12, -8, 10, -12],
          }}
          transition={{
            duration: 3,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ORNAMENTOS */}

      {ornaments.map((ornament, index) => (
        <motion.div
          key={`ornament-${index}`}
          className="
            absolute
            z-0
          "
          style={{
            left: ornament.left,
            top: ornament.top,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [-10, 10, -10],
          }}
          transition={{
            duration: 5 + index,
            delay: ornament.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">

            <motion.div
              className="
                h-10
                w-[2px]
                bg-[#C8A45D]/60
              "
              animate={{
                scaleY: [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            <div
              className="
                h-2
                w-4
                rounded-sm
                bg-[#C8A45D]
              "
            />

            <motion.div
              className="
                rounded-full
                border-2
                border-[#F6F0E5]
                shadow-[0_5px_25px_rgba(0,0,0,0.15)]
              "
              style={{
                width: ornament.size,
                height: ornament.size,
                backgroundColor: ornament.color,
                boxShadow:
                  "0 0 25px rgba(200,164,93,0.3)",
              }}
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="
                mt-1
                h-2
                w-2
                rounded-full
                bg-[#C8A45D]
              "
              animate={{
                scale: [0.5, 1.8, 0.5],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* REGALO */}

      <motion.div
        className="
          absolute
          bottom-12
          left-[4%]
          z-0
          hidden
          text-[#7A2631]/30
          lg:block
        "
        animate={{
          y: [0, -18, 0],
          rotate: [-7, 7, -7],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Gift
          size={100}
          strokeWidth={0.8}
        />
      </motion.div>

      {/* DECORACIÓN VERDE */}

      <motion.div
        className="
          absolute
          -right-10
          -top-10
          z-0
          h-40
          w-80
          rotate-[8deg]
          rounded-full
          border-t-[14px]
          border-[#12352B]/20
          shadow-[0_0_30px_rgba(18,53,43,0.15)]
        "
        animate={{
          rotate: [8, 15, 4, 8],
          x: [0, -15, 10, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export default function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const [selectedProducts, setSelectedProducts] =
    useState<SelectedProduct[]>([]);

  const [selectionOpen, setSelectionOpen] =
    useState(false);

  const [formOpen, setFormOpen] =
    useState(false);

  const [sending, setSending] =
    useState(false);

  const [sent, setSent] =
    useState(false);

  const [error, setError] =
    useState("");

  const [submittedTotal, setSubmittedTotal] =
    useState(0);

  const [formData, setFormData] =
    useState<FormDataState>({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  /* ============================================================
     CATEGORÍAS
  ============================================================ */

  const categories = useMemo(
    () => [
      "Todos",
      ...Array.from(
        new Set(
          products.map(
            (product) => product.category
          )
        )
      ),
    ],
    []
  );

  /* ============================================================
     FILTRADO
  ============================================================ */

  const filteredProducts = useMemo(() => {
    const query = search
      .toLowerCase()
      .trim();

    return products.filter((product) => {
      const matchesCategory =
        category === "Todos" ||
        product.category === category;

      const matchesSearch =
        !query ||
        product.name
          .toLowerCase()
          .includes(query) ||
        product.category
          .toLowerCase()
          .includes(query) ||
        product.description
          .toLowerCase()
          .includes(query);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [category, search]);

  /* ============================================================
     TOTALES
  ============================================================ */

  const selectedCount =
    selectedProducts.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  const selectedTotal =
    selectedProducts.reduce(
      (total, item) => {
        const product =
          products.find(
            (product) =>
              product.id === item.id
          );

        if (!product) {
          return total;
        }

        return (
          total +
          product.price *
            item.quantity
        );
      },
      0
    );

  /* ============================================================
     SELECCIÓN
  ============================================================ */

  const isSelected = (
    productId: string
  ) => {
    return selectedProducts.some(
      (item) =>
        item.id === productId
    );
  };

  const addProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) => {
        const exists =
          current.find(
            (item) =>
              item.id === productId
          );

        if (exists) {
          return current.map(
            (item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity:
                      item.quantity + 1,
                  }
                : item
          );
        }

        return [
          ...current,
          {
            id: productId,
            quantity: 1,
          },
        ];
      }
    );
  };

  const decreaseProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) =>
        current
          .map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity - 1,
                }
              : item
          )
          .filter(
            (item) =>
              item.quantity > 0
          )
    );
  };

  const removeProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) =>
        current.filter(
          (item) =>
            item.id !== productId
        )
    );
  };

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  /* ============================================================
     FORMULARIO
  ============================================================ */

  const openForm = () => {
    if (
      selectedProducts.length === 0
    ) {
      return;
    }

    setError("");
    setSent(false);
    setFormOpen(true);
  };

  const closeForm = () => {
    if (sending) {
      return;
    }

    setFormOpen(false);
    setError("");
  };

  const updateFormField = (
    field: keyof FormDataState,
    value: string
  ) => {
    setFormData(
      (current) => ({
        ...current,
        [field]: value,
      })
    );
  };

  /* ============================================================
     MENSAJE FORMSPREE
  ============================================================ */

  const buildProductsMessage =
    () => {
      return selectedProducts
        .map((item, index) => {
          const product =
            products.find(
              (product) =>
                product.id ===
                item.id
            );

          if (!product) {
            return "";
          }

          const subtotal =
            product.price *
            item.quantity;

          return [
            `${index + 1}. ${product.name}`,
            `   Categoría: ${product.category}`,
            `   Cantidad: ${item.quantity}`,
            `   Precio unitario: S/ ${product.price}`,
            `   Subtotal: S/ ${subtotal}`,
          ].join("\n");
        })
        .filter(Boolean)
        .join("\n\n");
    };

  /* ============================================================
     ENVIAR
  ============================================================ */

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError(
        "Por favor, ingresa tu nombre."
      );
      return;
    }

    if (!formData.email.trim()) {
      setError(
        "Por favor, ingresa tu correo electrónico."
      );
      return;
    }

    if (!formData.phone.trim()) {
      setError(
        "Por favor, ingresa tu número de contacto."
      );
      return;
    }

    if (
      selectedProducts.length === 0
    ) {
      setError(
        "No hay productos seleccionados."
      );
      return;
    }

    setSending(true);

    try {
      const form =
        new FormData();

      form.append(
        "_subject",
        `Nueva solicitud de productos — ${formData.name}`
      );

      form.append(
        "_replyto",
        formData.email.trim()
      );

      form.append(
        "Nombre",
        formData.name.trim()
      );

      form.append(
        "Correo electrónico",
        formData.email.trim()
      );

      form.append(
        "Teléfono / WhatsApp",
        formData.phone.trim()
      );

      form.append(
        "Productos seleccionados",
        buildProductsMessage()
      );

      form.append(
        "Total referencial",
        `S/ ${selectedTotal}`
      );

      form.append(
        "Cantidad total de productos",
        String(selectedCount)
      );

      form.append(
        "Mensaje adicional",
        formData.message.trim() ||
          "Sin mensaje adicional."
      );

      const response =
        await fetch(
          FORMSPREE_ENDPOINT,
          {
            method: "POST",
            body: form,
            headers: {
              Accept:
                "application/json",
            },
          }
        );

      if (!response.ok) {
        throw new Error(
          "No se pudo enviar la solicitud."
        );
      }

      setSubmittedTotal(
        selectedTotal
      );

      setSent(true);

      setSelectedProducts([]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setError(
        "No pudimos enviar tu solicitud. Inténtalo nuevamente."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F6F0E5] text-[#171714]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />

      {/* =====================================================
          CABECERA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F6F0E5]
          px-6
          pb-12
          pt-32
          sm:px-8
          lg:px-10
          lg:pb-14
        "
      >

        <AnimatedCreamBackground />

        <div className="relative z-10 mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              flex
              flex-col
              items-center
              gap-10
              text-center
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:gap-14
              lg:text-left
            "
          >

            {/* TÍTULO */}

            <div className="w-full max-w-2xl lg:flex-1">

              <motion.p
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  mb-4
                  text-lg
                  font-bold
                  uppercase
                  tracking-[0.28em]
                  text-[#7A2631]
                  sm:text-xl
                "
              >
                ✦ Navidad ✦
              </motion.p>

              <h1
                className="
                  text-4xl
                  font-medium
                  leading-[0.95]
                  tracking-[-0.05em]
                  text-[#12352B]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Todos nuestros{" "}
                <span className="relative inline-block">

                  <motion.span
                    className="inline-block text-[#7A2631]"
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    productos.
                  </motion.span>

                  <motion.span
                    initial={{
                      scaleX: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scaleX: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.8,
                      ease: [
                        0.22,
                        1,
                        0.36,
                        1,
                      ],
                    }}
                    className="
                      absolute
                      -bottom-2
                      left-1/2
                      h-[3px]
                      w-[78%]
                      -translate-x-1/2
                      rounded-full
                      bg-[#C8A45D]
                      shadow-[0_0_10px_rgba(200,164,93,0.4)]
                    "
                  />

                </span>
              </h1>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="
                  mx-auto
                  mt-6
                  max-w-xl
                  text-sm
                  leading-6
                  text-[#171714]/60
                  sm:text-base
                  lg:mx-0
                "
              >
                Encuentra adornos, personajes,
                peluches y detalles para hacer
                especial tu Navidad.
              </motion.p>

            </div>

            {/* BÚSQUEDA */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="w-full lg:max-w-md lg:shrink-0"
            >

              <div
                className="
                  flex
                  h-[4.25rem]
                  w-full
                  items-center
                  gap-3
                  rounded-[1.4rem]
                  border
                  border-[#12352B]/10
                  bg-[#F8F3E8]/90
                  px-3
                  shadow-[0_14px_45px_rgba(18,53,43,0.08)]
                  backdrop-blur-md
                  transition-colors
                  focus-within:border-[#12352B]/25
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#12352B]/5
                    text-[#12352B]/70
                  "
                >
                  <Search
                    size={19}
                    strokeWidth={1.8}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-center text-left">

                  <label
                    htmlFor="buscador"
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#7A2631]
                    "
                  >
                    Buscar
                  </label>

                  <input
                    id="buscador"
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(
                        event.target.value
                      )
                    }
                    placeholder="Nombre, categoría o detalle..."
                    className="
                      w-full
                      bg-transparent
                      text-[15px]
                      text-[#171714]
                      outline-none
                      placeholder:text-[#171714]/30
                    "
                  />

                </div>

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch("")
                    }
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      text-[#171714]/30
                      transition-colors
                      hover:bg-[#7A2631]/10
                      hover:text-[#7A2631]
                    "
                    aria-label="Limpiar búsqueda"
                  >
                    <X size={15} />
                  </button>
                )}

                <span
                  className="
                    hidden
                    shrink-0
                    rounded-full
                    bg-[#12352B]
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-[#F6F0E5]
                    sm:block
                  "
                >
                  {filteredProducts.length}
                </span>

              </div>

              <p
                className="
                  mt-3
                  text-[11px]
                  text-[#171714]/40
                  lg:text-right
                "
              >
                Mostrando{" "}
                {filteredProducts.length} de{" "}
                {products.length} productos
                {category !== "Todos" &&
                  ` · ${category}`}
              </p>

            </motion.div>

          </motion.div>

          {/* FILTROS */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.6,
            }}
            className="
              mt-10
              flex
              items-center
              justify-between
              gap-5
            "
          >

            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map(
                (item) => {
                  const active =
                    category === item;

                  return (
                    <motion.button
                      key={item}
                      type="button"
                      onClick={() =>
                        setCategory(
                          item
                        )
                      }
                      whileHover={{
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.96,
                      }}
                      className={`
                        shrink-0
                        rounded-full
                        px-4
                        py-2.5
                        text-xs
                        font-medium
                        transition-all
                        duration-300
                        ${
                          active
                            ? "bg-[#12352B] text-[#F6F0E5] shadow-[0_8px_20px_rgba(18,53,43,0.15)]"
                            : "bg-[#12352B]/5 text-[#12352B]/55 hover:bg-[#12352B]/10 hover:text-[#12352B]"
                        }
                      `}
                    >
                      {item}
                    </motion.button>
                  );
                }
              )}

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PRODUCTOS
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F6F0E5]
          px-6
          pb-32
          sm:px-8
          lg:px-10
        "
      >

        <AnimatedCreamBackground />

        <div className="relative z-10 mx-auto max-w-7xl">

          {filteredProducts.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-x-5
                gap-y-12
                sm:grid-cols-2
                lg:grid-cols-4
              "
            >

              {filteredProducts.map(
                (
                  product,
                  index
                ) => {

                  const selected =
                    isSelected(
                      product.id
                    );

                  const image =
                    product.images?.[0] ??
                    product.image;

                  return (
                    <motion.article
                      key={product.id}
                      initial={{
                        opacity: 0,
                        y: 35,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.1,
                      }}
                      transition={{
                        delay:
                          index * 0.05,
                        duration: 0.65,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                      whileHover={{
                        y: -5,
                      }}
                      className="group"
                    >

                      {/* IMAGEN */}

                      <div
                        className="
                          relative
                          aspect-[0.88]
                          overflow-hidden
                          rounded-[1.7rem]
                          bg-[#E7D8B8]/30
                          shadow-[0_15px_45px_rgba(18,53,43,0.08)]
                        "
                      >

                        <motion.img
                          src={image}
                          alt={product.name}
                          loading="lazy"
                          whileHover={{
                            scale: 1.06,
                          }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                          }}
                          className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                          "
                        />

                        <div
                          className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-[#081510]/55
                            via-transparent
                            to-transparent
                          "
                        />

                        {/* CATEGORÍA */}

                        <span
                          className="
                            absolute
                            left-4
                            top-4
                            rounded-full
                            bg-[#F6F0E5]/92
                            px-3
                            py-1.5
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#12352B]
                            backdrop-blur-md
                          "
                        >
                          {product.category}
                        </span>

                        {/* FAVORITO */}

                        <motion.button
                          type="button"
                          whileHover={{
                            scale: 1.08,
                          }}
                          whileTap={{
                            scale: 0.94,
                          }}
                          aria-label={`Añadir ${product.name} a favoritos`}
                          className="
                            absolute
                            right-4
                            top-4
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            bg-[#F6F0E5]/92
                            text-[#171714]
                            backdrop-blur-md
                            transition-colors
                            hover:text-[#7A2631]
                          "
                        >
                          <Heart
                            size={15}
                            strokeWidth={1.7}
                          />
                        </motion.button>

                        {/* DESTELLO */}

                        <motion.div
                          className="
                            absolute
                            right-5
                            top-16
                            text-[#C8A45D]
                            drop-shadow-[0_0_8px_rgba(200,164,93,0.8)]
                          "
                          animate={{
                            scale: [
                              0.7,
                              1.15,
                              0.7,
                            ],
                            rotate: [
                              0,
                              45,
                              0,
                            ],
                            opacity: [
                              0.25,
                              1,
                              0.25,
                            ],
                          }}
                          transition={{
                            duration: 2.5,
                            delay:
                              index * 0.3,
                            repeat: Infinity,
                          }}
                        >
                          <Sparkles
                            size={17}
                          />
                        </motion.div>

                        {/* BOTÓN */}

                        <motion.button
                          type="button"
                          onClick={() => {
                            addProduct(
                              product.id
                            );

                            setSelectionOpen(
                              true
                            );
                          }}
                          whileHover={{
                            scale: 1.02,
                          }}
                          whileTap={{
                            scale: 0.98,
                          }}
                          className={`
                            absolute
                            bottom-4
                            left-4
                            right-4
                            z-10
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            py-3
                            text-xs
                            font-medium
                            shadow-xl
                            transition-all
                            duration-300
                            ${
                              selected
                                ? "bg-[#C8A45D] text-[#171714]"
                                : "bg-[#12352B] text-[#F6F0E5]"
                            }
                            opacity-100
                            lg:opacity-0
                            lg:group-hover:opacity-100
                          `}
                        >
                          {selected ? (
                            <>
                              <Plus size={14} />
                              Añadir otro
                            </>
                          ) : (
                            <>
                              <ShoppingBag
                                size={14}
                              />
                              Añadir
                            </>
                          )}
                        </motion.button>

                        {/* LÍNEA DORADA */}

                        <motion.div
                          className="
                            absolute
                            bottom-0
                            left-0
                            h-[3px]
                            w-full
                            origin-left
                            bg-[#C8A45D]
                            shadow-[0_0_15px_3px_rgba(200,164,93,0.65)]
                          "
                          initial={{
                            scaleX: 0,
                          }}
                          whileInView={{
                            scaleX: 1,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            delay:
                              0.4 +
                              index *
                                0.08,
                            duration: 0.9,
                          }}
                        />

                      </div>

                      {/* INFORMACIÓN */}

                      <div
                        className="
                          mt-4
                          flex
                          items-start
                          justify-between
                          gap-4
                        "
                      >

                        <div className="min-w-0">

                          <h2
                            className="
                              truncate
                              text-[15px]
                              font-medium
                              tracking-[-0.025em]
                              text-[#171714]
                            "
                          >
                            {product.name}
                          </h2>

                          <p
                            className="
                              mt-1
                              line-clamp-2
                              max-w-[210px]
                              text-xs
                              leading-5
                              text-[#171714]/45
                            "
                          >
                            {product.description}
                          </p>

                        </div>

                        <span
                          className="
                            shrink-0
                            text-sm
                            font-semibold
                            text-[#7A2631]
                          "
                        >
                          S/ {product.price}
                        </span>

                      </div>

                    </motion.article>
                  );
                }
              )}

            </div>

          ) : (

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                relative
                flex
                min-h-[320px]
                items-center
                justify-center
                overflow-hidden
                rounded-[2rem]
                border
                border-[#12352B]/10
                bg-[#F8F3E8]/80
                backdrop-blur-md
              "
            >

              <div className="relative z-10 text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#12352B]/5
                    text-[#12352B]/35
                  "
                >
                  <Search size={22} />
                </div>

                <h2
                  className="
                    mt-5
                    text-lg
                    font-medium
                    text-[#12352B]
                  "
                >
                  No encontramos productos
                </h2>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#171714]/40
                  "
                >
                  Prueba con otra búsqueda
                  o categoría.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("Todos");
                  }}
                  className="
                    mt-6
                    rounded-full
                    bg-[#12352B]
                    px-5
                    py-2.5
                    text-xs
                    font-medium
                    text-[#F6F0E5]
                  "
                >
                  Ver todos
                </button>

              </div>

            </motion.div>
          )}

        </div>
      </section>

      {/* =====================================================
          BARRA FLOTANTE
      ===================================================== */}

      <AnimatePresence>
        {selectedCount > 0 &&
          !selectionOpen &&
          !formOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              className="
                fixed
                bottom-5
                left-1/2
                z-50
                w-[calc(100%-2rem)]
                max-w-xl
                -translate-x-1/2
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-[1.25rem]
                  border
                  border-[#F6F0E5]/10
                  bg-[#12352B]
                  px-4
                  py-3
                  text-[#F6F0E5]
                  shadow-[0_20px_70px_rgba(8,21,16,0.35)]
                  backdrop-blur-xl
                  sm:px-5
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C8A45D]
                      text-[#171714]
                    "
                  >
                    <ShoppingBag size={16} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold">
                      Mi selección
                    </p>

                    <p className="text-[11px] text-[#F6F0E5]/50">
                      {selectedCount}{" "}
                      {selectedCount === 1
                        ? "producto"
                        : "productos"}{" "}
                      · S/ {selectedTotal}
                    </p>
                  </div>

                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() =>
                    setSelectionOpen(true)
                  }
                  className="
                    shrink-0
                    rounded-full
                    bg-[#F6F0E5]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#12352B]
                  "
                >
                  Ver selección
                </motion.button>

              </div>
            </motion.div>
          )}
      </AnimatePresence>

      {/* =====================================================
          OVERLAY SELECCIÓN
      ===================================================== */}

      <AnimatePresence>
        {selectionOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectionOpen(false)
            }
            className="
              fixed
              inset-0
              z-[60]
              bg-[#081510]/55
              backdrop-blur-sm
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          PANEL SELECCIÓN
      ===================================================== */}

      <AnimatePresence>
        {selectionOpen && (
          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              fixed
              right-0
              top-0
              z-[70]
              flex
              h-full
              w-full
              max-w-md
              flex-col
              overflow-hidden
              bg-[#F6F0E5]
              shadow-[-20px_0_70px_rgba(8,21,16,0.2)]
            "
          >

            <div className="flex items-center justify-between border-b border-[#12352B]/10 px-6 py-5">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A2631]">
                  Tu selección
                </p>

                <h2 className="mt-1 text-xl font-medium tracking-[-0.04em] text-[#12352B]">
                  Productos elegidos
                </h2>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectionOpen(false)
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#12352B]/10
                  text-[#12352B]
                  transition-colors
                  hover:bg-[#12352B]/5
                "
                aria-label="Cerrar selección"
              >
                <X size={18} />
              </button>

            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">

              {selectedProducts.length > 0 ? (

                <div className="space-y-4">

                  {selectedProducts.map(
                    (item) => {

                      const product =
                        products.find(
                          (product) =>
                            product.id ===
                            item.id
                        );

                      if (!product) {
                        return null;
                      }

                      return (
                        <motion.div
                          layout
                          key={product.id}
                          className="
                            flex
                            gap-4
                            rounded-2xl
                            border
                            border-[#12352B]/10
                            bg-[#F8F3E8]
                            p-3
                          "
                        >

                          <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-[#E7D8B8]/40">
                            <img
                              src={
                                product.images?.[0] ??
                                product.image
                              }
                              alt={
                                product.name
                              }
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div className="flex items-start justify-between gap-2">

                              <div>
                                <h3 className="truncate text-sm font-medium">
                                  {product.name}
                                </h3>

                                <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-[#7A2631]">
                                  {product.category}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  removeProduct(
                                    product.id
                                  )
                                }
                                className="
                                  text-[#171714]/25
                                  transition-colors
                                  hover:text-[#7A2631]
                                "
                                aria-label={`Eliminar ${product.name}`}
                              >
                                <Trash2 size={15} />
                              </button>

                            </div>

                            <div className="mt-3 flex items-center justify-between">

                              <div className="flex items-center gap-1 rounded-full border border-[#12352B]/10 bg-[#F6F0E5] p-1">

                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseProduct(
                                      product.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[#12352B]/60
                                    transition-colors
                                    hover:bg-[#12352B]/5
                                  "
                                >
                                  <Minus size={12} />
                                </button>

                                <span className="w-5 text-center text-xs font-medium">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    addProduct(
                                      product.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[#12352B]/60
                                    transition-colors
                                    hover:bg-[#12352B]/5
                                  "
                                >
                                  <Plus size={12} />
                                </button>

                              </div>

                              <span className="text-sm font-semibold text-[#7A2631]">
                                S/{" "}
                                {product.price *
                                  item.quantity}
                              </span>

                            </div>

                          </div>

                        </motion.div>
                      );
                    }
                  )}

                </div>

              ) : (

                <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#12352B]/5 text-[#12352B]/40">
                    <ShoppingBag size={22} />
                  </div>

                  <h3 className="mt-5 text-lg font-medium">
                    Tu selección está vacía
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-5 text-[#171714]/40">
                    Explora el catálogo y
                    añade los productos
                    que te interesen.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectionOpen(false)
                    }
                    className="
                      mt-6
                      rounded-full
                      bg-[#12352B]
                      px-5
                      py-3
                      text-xs
                      font-medium
                      text-[#F6F0E5]
                    "
                  >
                    Explorar productos
                  </button>

                </div>
              )}

            </div>

            {selectedProducts.length > 0 && (
              <div className="border-t border-[#12352B]/10 bg-[#F8F3E8] px-6 py-5">

                <div className="mb-4 flex items-end justify-between">

                  <div>
                    <p className="text-xs text-[#171714]/40">
                      Total referencial
                    </p>

                    <p className="mt-1 text-2xl font-medium tracking-[-0.04em] text-[#12352B]">
                      S/ {selectedTotal}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={clearSelection}
                    className="
                      text-xs
                      text-[#171714]/35
                      transition-colors
                      hover:text-[#7A2631]
                    "
                  >
                    Vaciar selección
                  </button>

                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={openForm}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#7A2631]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-[#F6F0E5]
                    shadow-[0_10px_30px_rgba(122,38,49,0.18)]
                  "
                >
                  Solicitar productos
                  <ArrowRight size={16} />
                </motion.button>

              </div>
            )}

          </motion.aside>
        )}
      </AnimatePresence>

      {/* =====================================================
          MODAL FORMULARIO
      ===================================================== */}

      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#081510]/70
              p-4
              backdrop-blur-md
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                relative
                flex
                max-h-[90vh]
                w-full
                max-w-2xl
                flex-col
                overflow-hidden
                rounded-[2rem]
                bg-[#F6F0E5]
                shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              "
            >

              {sent ? (

                <div className="flex min-h-[520px] flex-col items-center justify-center px-8 py-12 text-center">

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-[#12352B]
                      text-[#C8A45D]
                      shadow-[0_15px_50px_rgba(18,53,43,0.2)]
                    "
                  >
                    <Check
                      size={36}
                      strokeWidth={2}
                    />
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="
                      mt-7
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#7A2631]
                    "
                  >
                    Solicitud enviada
                  </motion.p>

                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.22,
                    }}
                    className="
                      mt-3
                      max-w-md
                      text-3xl
                      font-medium
                      leading-tight
                      tracking-[-0.05em]
                      text-[#12352B]
                    "
                  >
                    ¡Recibimos tu solicitud!
                  </motion.h2>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-6
                      text-[#171714]/50
                    "
                  >
                    Hemos recibido correctamente
                    tu selección de productos y
                    tus datos de contacto.
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.38,
                    }}
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#12352B]/10
                      bg-[#F8F3E8]
                      px-6
                      py-4
                    "
                  >
                    <p className="text-xs text-[#171714]/40">
                      Total de tu solicitud
                    </p>

                    <p className="mt-1 text-xl font-semibold text-[#7A2631]">
                      S/ {submittedTotal}
                    </p>
                  </motion.div>

                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.46,
                    }}
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormOpen(false);
                      setSelectionOpen(false);
                    }}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#12352B]
                      px-6
                      py-3.5
                      text-sm
                      font-medium
                      text-[#F6F0E5]
                      transition-transform
                      hover:scale-[1.02]
                    "
                  >
                    Volver al catálogo
                    <ArrowRight size={16} />
                  </motion.button>

                </div>

              ) : (

                <>

                  {/* HEADER */}

                  <div className="flex items-start justify-between border-b border-[#12352B]/10 px-6 py-5 sm:px-8">

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7A2631]">
                        Solicitud
                      </p>

                      <h2 className="mt-1 text-xl font-medium tracking-[-0.04em] text-[#12352B]">
                        Completa tus datos
                      </h2>

                      <p className="mt-1 text-xs text-[#171714]/40">
                        Te contactaremos para
                        confirmar tu solicitud.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={closeForm}
                      disabled={sending}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#12352B]/10
                        text-[#12352B]
                        transition-colors
                        hover:bg-[#12352B]/5
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                      aria-label="Cerrar formulario"
                    >
                      <X size={18} />
                    </button>

                  </div>

                  {/* FORM */}

                  <form
                    onSubmit={handleSubmit}
                    className="overflow-y-auto"
                  >

                    <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_0.85fr]">

                      {/* DATOS */}

                      <div>

                        <div className="space-y-4">

                          {/* NOMBRE */}

                          <div>
                            <label
                              htmlFor="name"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Nombre completo
                            </label>

                            <div className="relative">

                              <User
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={
                                  formData.name
                                }
                                onChange={(event) =>
                                  updateFormField(
                                    "name",
                                    event.target.value
                                  )
                                }
                                placeholder="Tu nombre"
                                disabled={sending}
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>
                          </div>

                          {/* EMAIL */}

                          <div>
                            <label
                              htmlFor="email"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Correo electrónico
                            </label>

                            <div className="relative">

                              <Mail
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={
                                  formData.email
                                }
                                onChange={(event) =>
                                  updateFormField(
                                    "email",
                                    event.target.value
                                  )
                                }
                                placeholder="tu@email.com"
                                disabled={sending}
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>
                          </div>

                          {/* TELÉFONO */}

                          <div>
                            <label
                              htmlFor="phone"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Número / WhatsApp
                            </label>

                            <div className="relative">

                              <Phone
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                value={
                                  formData.phone
                                }
                                onChange={(event) =>
                                  updateFormField(
                                    "phone",
                                    event.target.value
                                  )
                                }
                                placeholder="Tu número de contacto"
                                disabled={sending}
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>
                          </div>

                          {/* MENSAJE */}

                          <div>
                            <label
                              htmlFor="message"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Mensaje adicional
                              <span className="ml-1 font-normal text-[#171714]/30">
                                (opcional)
                              </span>
                            </label>

                            <div className="relative">

                              <MessageSquare
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-4
                                  text-[#12352B]/30
                                "
                              />

                              <textarea
                                id="message"
                                name="message"
                                value={
                                  formData.message
                                }
                                onChange={(event) =>
                                  updateFormField(
                                    "message",
                                    event.target.value
                                  )
                                }
                                placeholder="¿Quieres dejarnos alguna indicación?"
                                rows={4}
                                disabled={sending}
                                className="
                                  w-full
                                  resize-none
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  py-3.5
                                  pl-11
                                  pr-4
                                  text-sm
                                  leading-5
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>
                          </div>

                        </div>

                        {/* ERROR */}

                        <AnimatePresence>
                          {error && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                              }}
                              className="
                                mt-4
                                rounded-xl
                                border
                                border-[#7A2631]/15
                                bg-[#7A2631]/5
                                px-4
                                py-3
                                text-xs
                                leading-5
                                text-[#7A2631]
                              "
                            >
                              {error}
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>

                      {/* RESUMEN */}

                      <div>

                        <div
                          className="
                            rounded-2xl
                            border
                            border-[#12352B]/10
                            bg-[#F8F3E8]
                            p-5
                          "
                        >

                          <div className="flex items-center justify-between">

                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7A2631]">
                                Resumen
                              </p>

                              <h3 className="mt-1 text-base font-medium text-[#12352B]">
                                Tu selección
                              </h3>
                            </div>

                            <span
                              className="
                                rounded-full
                                bg-[#12352B]
                                px-2.5
                                py-1
                                text-[10px]
                                font-semibold
                                text-[#F6F0E5]
                              "
                            >
                              {selectedCount}
                            </span>

                          </div>

                          <div className="my-5 h-px bg-[#12352B]/10" />

                          <div className="space-y-3">

                            {selectedProducts.map(
                              (item) => {

                                const product =
                                  products.find(
                                    (product) =>
                                      product.id ===
                                      item.id
                                  );

                                if (!product) {
                                  return null;
                                }

                                return (
                                  <div
                                    key={
                                      product.id
                                    }
                                    className="
                                      flex
                                      items-start
                                      justify-between
                                      gap-3
                                    "
                                  >

                                    <div className="min-w-0">

                                      <p className="truncate text-xs font-medium text-[#171714]">
                                        {
                                          product.name
                                        }
                                      </p>

                                      <p className="mt-0.5 text-[10px] text-[#171714]/40">
                                        {
                                          item.quantity
                                        }{" "}
                                        × S/{" "}
                                        {
                                          product.price
                                        }
                                      </p>

                                    </div>

                                    <span className="shrink-0 text-xs font-semibold text-[#7A2631]">
                                      S/{" "}
                                      {product.price *
                                        item.quantity}
                                    </span>

                                  </div>
                                );
                              }
                            )}

                          </div>

                          <div className="my-5 h-px bg-[#12352B]/10" />

                          <div className="flex items-end justify-between">

                            <div>
                              <p className="text-[10px] text-[#171714]/40">
                                Total referencial
                              </p>

                              <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-[#12352B]">
                                S/ {selectedTotal}
                              </p>
                            </div>

                            <span className="text-[10px] text-[#171714]/30">
                              {selectedCount}{" "}
                              unidades
                            </span>

                          </div>

                        </div>

                        <p className="mt-4 text-[10px] leading-4 text-[#171714]/35">
                          Los precios mostrados son
                          referenciales. La disponibilidad
                          y los detalles finales se
                          confirmarán posteriormente.
                        </p>

                      </div>

                    </div>

                    {/* BOTÓN */}

                    <div className="border-t border-[#12352B]/10 bg-[#F8F3E8] px-6 py-4 sm:px-8">

                      <motion.button
                        type="submit"
                        disabled={sending}
                        whileHover={
                          !sending
                            ? {
                                scale: 1.01,
                              }
                            : undefined
                        }
                        whileTap={
                          !sending
                            ? {
                                scale: 0.98,
                              }
                            : undefined
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-full
                          bg-[#7A2631]
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-[#F6F0E5]
                          shadow-[0_10px_30px_rgba(122,38,49,0.18)]
                          transition-all
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >

                        {sending ? (
                          <>
                            <LoaderCircle
                              size={17}
                              className="animate-spin"
                            />
                            Enviando solicitud...
                          </>
                        ) : (
                          <>
                            Enviar solicitud
                            <ArrowRight
                              size={16}
                            />
                          </>
                        )}

                      </motion.button>

                      <p className="mt-3 text-center text-[10px] text-[#171714]/30">
                        Tus datos se utilizarán
                        únicamente para gestionar
                        esta solicitud.
                      </p>

                    </div>

                  </form>

                </>
              )}

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}