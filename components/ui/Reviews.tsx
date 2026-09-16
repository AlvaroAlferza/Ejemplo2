"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "María Fernanda",
    location: "Arequipa, Perú",
    image: "/images/reviews/maria.jpg",
    productImage: "/images/adornos2.jpg",
    text: "Los adornos quedaron preciosos. Se nota muchísimo el cuidado en los detalles y la calidad. Mi sala quedó completamente diferente esta Navidad.",
    product: "Decoración navideña",
    date: "Diciembre 2025",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    location: "Arequipa, Perú",
    image: "/images/reviews/carlos.jpg",
    productImage: "/images/adornos3.jpg",
    text: "Muy buena atención y los productos llegaron en perfecto estado. Los detalles artesanales hacen que todo se vea mucho más especial.",
    product: "Adornos artesanales",
    date: "Diciembre 2025",
  },
  {
    id: 3,
    name: "Lucía Ramírez",
    location: "Lima, Perú",
    image: "/images/reviews/lucia.jpg",
    productImage: "/images/adornos4.jpg",
    text: "Encontré justo lo que buscaba para decorar mi casa. Todo tiene un acabado muy bonito y diferente a lo que normalmente encuentras.",
    product: "Colección Navidad",
    date: "Noviembre 2025",
  },
  {
    id: 4,
    name: "Andrea Salazar",
    location: "Cusco, Perú",
    image: "/images/reviews/andrea.jpg",
    productImage: "/images/adornos2.jpg",
    text: "Los peluches y personajes navideños están hermosos. La presentación también está muy cuidada. Definitivamente volvería a comprar.",
    product: "Peluches navideños",
    date: "Diciembre 2025",
  },
];

const stars = [
  { left: "7%", top: "10%", size: 20, delay: 0 },
  { left: "24%", top: "76%", size: 15, delay: 1.5 },
  { left: "43%", top: "9%", size: 17, delay: 2.2 },
  { left: "63%", top: "86%", size: 19, delay: 0.8 },
  { left: "82%", top: "10%", size: 16, delay: 2.7 },
  { left: "93%", top: "76%", size: 14, delay: 1.2 },
];

const lights = [
  { left: "4%", top: "20%", delay: 0, size: 7 },
  { left: "12%", top: "58%", delay: 1.2, size: 5 },
  { left: "20%", top: "12%", delay: 2.1, size: 6 },
  { left: "29%", top: "82%", delay: 0.5, size: 5 },
  { left: "39%", top: "20%", delay: 1.7, size: 7 },
  { left: "48%", top: "88%", delay: 2.8, size: 5 },
  { left: "57%", top: "11%", delay: 0.9, size: 6 },
  { left: "67%", top: "79%", delay: 2.4, size: 7 },
  { left: "76%", top: "18%", delay: 1.3, size: 5 },
  { left: "86%", top: "65%", delay: 3, size: 6 },
  { left: "94%", top: "28%", delay: 0.7, size: 7 },
];

const ornaments = [
  { left: "16%", top: "22%", color: "#7A2631", delay: 0 },
  { left: "88%", top: "43%", color: "#12352B", delay: 1.8 },
  { left: "53%", top: "6%", color: "#C8A45D", delay: 2.5 },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentReview = reviews[active];

  const nextReview = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setDirection(-1);
    setActive(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reseñas"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#F6F0E5]
        px-6
        py-14
        sm:px-8
        lg:px-10
        lg:py-16
      "
    >
      {/* =========================================================
          FONDO CREMA ANIMADO
      ========================================================= */}

      {/* GLOW VERDE */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#12352B]/[0.10]
          blur-[100px]
        "
        animate={{
          scale: [1, 1.12, 1],
          x: [0, 25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW ROJO */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7A2631]/[0.08]
          blur-[110px]
        "
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* GLOW DORADO */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C8A45D]/[0.08]
          blur-[130px]
        "
        animate={{
          scale: [0.9, 1.1, 0.9],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* TEXTURA DE PUNTOS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.30]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #C8A45D 1px, transparent 1.5px)",
          backgroundSize: "38px 38px",
        }}
      />

      {/* =========================================================
          ESTRELLAS
      ========================================================= */}

      {stars.map((star, index) => (
        <motion.div
          key={`star-${index}`}
          className="
            pointer-events-none
            absolute
            z-0
            text-[#C8A45D]
          "
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [0.7, 1.25, 0.7],
            opacity: [0.25, 0.9, 0.25],
          }}
          transition={{
            duration: 5,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star
            size={star.size}
            strokeWidth={1.3}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* =========================================================
          LUCES
      ========================================================= */}

      {lights.map((light, index) => (
        <motion.div
          key={`light-${index}`}
          className="
            pointer-events-none
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
              "0 0 18px 5px rgba(200,164,93,0.35)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.35, 0.7],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 3.5,
            delay: light.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* =========================================================
          ORNAMENTOS
      ========================================================= */}

      {ornaments.map((ornament, index) => (
        <motion.div
          key={`ornament-${index}`}
          className="pointer-events-none absolute z-0 hidden lg:block"
          style={{
            left: ornament.left,
            top: ornament.top,
          }}
          animate={{
            y: [0, 8, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 5,
            delay: ornament.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="h-8 w-px bg-[#C8A45D]/40" />

            <div
              className="h-5 w-5 rounded-full border border-[#C8A45D]/40"
              style={{
                backgroundColor: `${ornament.color}22`,
              }}
            />

            <div
              className="mt-1 h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: ornament.color,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* =========================================================
          CONTENIDO
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-9
            max-w-3xl
            text-center
          "
        >
          {/* LABEL */}

          <motion.div
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p
              className="
                mb-4
                text-lg
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#7A2631]
                sm:text-xl
                lg:text-2xl
              "
            >
              ✦ Experiencias reales ✦
            </p>
          </motion.div>

          {/* TÍTULO */}

          <h2
            className="
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              text-[#171714]
              sm:text-5xl
              lg:text-6xl
            "
          >
            La Navidad también se recuerda{" "}

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
                por los detalles.
              </motion.span>

              <motion.span
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                whileInView={{
                  scaleX: 1,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.65,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  -bottom-2
                  left-1/2
                  h-[3px]
                  w-[78%]
                  -translate-x-1/2
                  origin-center
                  rounded-full
                  bg-[#C8A45D]
                  shadow-[0_0_10px_rgba(200,164,93,0.55)]
                "
              />

            </span>
          </h2>

          {/* DESCRIPCIÓN */}

          <motion.p
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
            className="
              mx-auto
              mt-5
              max-w-xl
              text-sm
              leading-6
              text-[#171714]/60
              sm:text-base
            "
          >
            Historias de personas que encontraron ese detalle especial
            para hacer su Navidad diferente.
          </motion.p>
        </motion.div>

        {/* =========================================================
            RESEÑA PRINCIPAL
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-4xl"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[1.75rem]
              border
              border-[#12352B]/10
              bg-white/65
              shadow-[0_25px_70px_rgba(23,23,20,0.10)]
              backdrop-blur-sm
            "
          >
            <div
              className="
                grid
                min-h-[350px]
                grid-cols-1
                lg:grid-cols-[40%_60%]
              "
            >

              {/* =================================================
                  IMAGEN PRODUCTO
              ================================================= */}

              <div
                className="
                  relative
                  min-h-[250px]
                  overflow-hidden
                  bg-[#081510]
                  lg:min-h-0
                "
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentReview.productImage}
                    src={currentReview.productImage}
                    alt={currentReview.product}
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                      x: direction * 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                      x: direction * -15,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </AnimatePresence>

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#081510]/80
                    via-[#081510]/10
                    to-transparent
                  "
                />

                <div className="absolute bottom-5 left-5">
                  <span
                    className="
                      rounded-full
                      border
                      border-[#F6F0E5]/15
                      bg-[#081510]/65
                      px-3
                      py-1.5
                      text-[11px]
                      text-[#F6F0E5]
                      backdrop-blur-md
                    "
                  >
                    {currentReview.product}
                  </span>
                </div>

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    h-8
                    w-8
                    rounded-full
                    border
                    border-[#C8A45D]/40
                  "
                />
              </div>

              {/* =================================================
                  INFO
              ================================================= */}

              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-between
                  p-6
                  sm:p-8
                  lg:p-9
                "
              >
                <Quote
                  size={80}
                  strokeWidth={0.8}
                  className="
                    pointer-events-none
                    absolute
                    right-5
                    top-4
                    text-[#C8A45D]/[0.10]
                  "
                />

                {/* PERFIL */}

                <div
                  className="
                    relative
                    mb-6
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                >
                  <div className="flex items-center gap-3.5">

                    <div
                      className="
                        relative
                        h-12
                        w-12
                        shrink-0
                        overflow-hidden
                        rounded-full
                        border
                        border-[#C8A45D]/40
                        bg-[#7A2631]
                      "
                    >
                      {currentReview.image ? (
                        <img
                          src={currentReview.image}
                          alt={currentReview.name}
                          className="
                            h-full
                            w-full
                            object-cover
                          "
                        />
                      ) : (
                        <div
                          className="
                            flex
                            h-full
                            w-full
                            items-center
                            justify-center
                            text-sm
                            font-medium
                            text-[#F6F0E5]
                          "
                        >
                          {currentReview.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3
                        className="
                          text-sm
                          font-medium
                          text-[#171714]
                        "
                      >
                        {currentReview.name}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          text-[#171714]/50
                        "
                      >
                        {currentReview.location}
                      </p>
                    </div>

                  </div>

                  <div className="hidden items-center gap-1 sm:flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        className="text-[#C8A45D]"
                      />
                    ))}
                  </div>
                </div>

                {/* ESTRELLAS MOBILE */}

                <div
                  className="
                    mb-4
                    flex
                    items-center
                    gap-1
                    sm:hidden
                  "
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      fill="currentColor"
                      className="text-[#C8A45D]"
                    />
                  ))}
                </div>

                {/* TEXTO */}

                <div className="flex-1">
                  <AnimatePresence
                    mode="wait"
                    custom={direction}
                  >
                    <motion.div
                      key={currentReview.id}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction * 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: direction * -25,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p
                        className="
                          max-w-xl
                          text-lg
                          leading-8
                          tracking-[-0.015em]
                          text-[#171714]
                          sm:text-xl
                        "
                      >
                        “{currentReview.text}”
                      </p>

                      <div
                        className="
                          mt-6
                          flex
                          flex-col
                          gap-2
                          border-t
                          border-[#171714]/10
                          pt-5
                          sm:flex-row
                          sm:items-center
                          sm:justify-between
                        "
                      >
                        <div>
                          <p
                            className="
                              text-xs
                              font-medium
                              uppercase
                              tracking-[0.14em]
                              text-[#7A2631]
                            "
                          >
                            {currentReview.product}
                          </p>

                          <p
                            className="
                              mt-1
                              text-xs
                              text-[#171714]/45
                            "
                          >
                            {currentReview.date}
                          </p>
                        </div>

                        <span
                          className="
                            w-fit
                            rounded-full
                            border
                            border-[#12352B]/10
                            bg-[#12352B]/[0.03]
                            px-3
                            py-1.5
                            text-[11px]
                            text-[#171714]/55
                          "
                        >
                          Compra verificada
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CONTROLES */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-[#171714]/10
                    pt-5
                  "
                >
                  <div className="flex items-center gap-1.5">
                    {reviews.map((review, index) => (
                      <button
                        key={review.id}
                        type="button"
                        aria-label={`Ver reseña ${index + 1}`}
                        onClick={() => {
                          setDirection(
                            index > active ? 1 : -1
                          );
                          setActive(index);
                        }}
                        className="group p-1"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            index === active
                              ? "w-7 bg-[#C8A45D]"
                              : "w-1.5 bg-[#12352B]/20 group-hover:bg-[#12352B]/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">

                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={previousReview}
                      aria-label="Reseña anterior"
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#12352B]/15
                        text-[#12352B]
                        transition-colors
                        hover:border-[#C8A45D]/50
                        hover:bg-[#C8A45D]/10
                      "
                    >
                      <ArrowLeft size={15} />
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
                      }}
                      onClick={nextReview}
                      aria-label="Siguiente reseña"
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#12352B]/15
                        text-[#12352B]
                        transition-colors
                        hover:border-[#C8A45D]/50
                        hover:bg-[#C8A45D]/10
                      "
                    >
                      <ArrowRight size={15} />
                    </motion.button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MINI RESEÑAS
        ========================================================= */}

        <div
          className="
            mx-auto
            mt-4
            grid
            max-w-4xl
            grid-cols-3
            gap-3
          "
        >
          {reviews.slice(0, 3).map((review, index) => (
            <motion.button
              key={review.id}
              type="button"
              onClick={() => {
                setDirection(
                  index > active ? 1 : -1
                );
                setActive(index);
              }}
              whileHover={{
                y: -2,
              }}
              className={`rounded-xl border p-3 text-left transition-all ${
                active === index
                  ? "border-[#C8A45D]/50 bg-white/85 shadow-sm"
                  : "border-[#12352B]/10 bg-white/45 hover:border-[#C8A45D]/30 hover:bg-white/70"
              }`}
            >
              <div className="flex items-center gap-2.5">

                <div
                  className="
                    h-8
                    w-8
                    shrink-0
                    overflow-hidden
                    rounded-full
                    bg-[#7A2631]
                  "
                >
                  <img
                    src={review.image}
                    alt={review.name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                <div className="min-w-0">

                  <p
                    className="
                      truncate
                      text-xs
                      font-medium
                      text-[#171714]
                    "
                  >
                    {review.name}
                  </p>

                  <div className="mt-0.5 flex gap-0.5">
                    {Array.from({ length: 5 }).map(
                      (_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={8}
                          fill="currentColor"
                          className="text-[#C8A45D]"
                        />
                      )
                    )}
                  </div>

                </div>
              </div>
            </motion.button>
          ))}
        </div>

      </div>
    </section>
  );
}