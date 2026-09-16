"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Gift,
  Sparkles,
  Star,
} from "lucide-react";
import { categories } from "@/data/categories";

const categoryImages = [
  "/images/noel.png",
  "/images/duende.png",
  "/images/adornito.png",
  "/images/oso.png",
];

/* ============================================================
   LUCES GRANDES DEL FONDO
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

export default function Categories() {
  return (
    <section
      id="colecciones"
      className="
        relative
        overflow-hidden
        bg-[#F6F0E5]
        px-6
        py-20
        text-[#171714]
        sm:px-8
        sm:py-22
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          FONDO ANIMADO
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* ===================================================
            HALO VERDE
        =================================================== */}

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

        {/* ===================================================
            HALO ROJO
        =================================================== */}

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

        {/* ===================================================
            GLOW DORADO CENTRAL
        =================================================== */}

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

        {/* ===================================================
            GLOW DORADO SUPERIOR
        =================================================== */}

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
      </div>

      {/* =====================================================
          TEXTURA
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.30]
        "
        style={{
          backgroundImage: `
            radial-gradient(circle, #C8A45D 1.2px, transparent 1.8px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* =====================================================
          LÍNEAS DE LUZ DIAGONALES
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
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

      <motion.div
        className="
          pointer-events-none
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

      {/* =====================================================
          PARTÍCULAS FLOTANTES
      ===================================================== */}

      {particles.map((particle, index) => (
        <motion.span
          key={`particle-${index}`}
          className="
            pointer-events-none
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

      {/* =====================================================
          ESTRELLAS
      ===================================================== */}

      {stars.map((star, index) => (
        <motion.div
          key={`star-${index}`}
          className="
            pointer-events-none
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

      {/* =====================================================
          DESTELLOS SPARKLES
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
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
          pointer-events-none
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

      {/* =====================================================
          LUCES DORADAS
      ===================================================== */}

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

      {/* =====================================================
          ORNAMENTOS
      ===================================================== */}

      {ornaments.map((ornament, index) => (
        <motion.div
          key={`ornament-${index}`}
          className="
            pointer-events-none
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

            {/* HILO */}

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

            {/* TAPA */}

            <div
              className="
                h-2
                w-4
                rounded-sm
                bg-[#C8A45D]
              "
            />

            {/* BOLA */}

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

            {/* BRILLO */}

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

      {/* =====================================================
          REGALO
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
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

      {/* =====================================================
          DECORACIÓN VERDE
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
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

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.96,
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
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >

          {/* =================================================
              COLECCIONES
          ================================================= */}

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
                mb-5
                text-lg
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#7A2631]
                sm:text-xl
                lg:text-2xl
              "
            >
              ✦ Colecciones ✦
            </p>
          </motion.div>

          {/* =================================================
              TÍTULO
          ================================================= */}

          <h2
            className="
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
          "
          >
            Encuentra algo{" "}

            <span className="relative inline-block">

              {/* TEXTO ROJO */}

              <motion.span
                className="
                  inline-block
                  text-[#7A2631]
                "
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                especial.
              </motion.span>

              {/* =================================================
                  RAYITA AMARILLA ANIMADA
              ================================================= */}

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
                  shadow-[0_0_10px_rgba(200,164,93,0.4)]
                "
              />
            </span>
          </h2>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

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
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-[#171714]/60
              sm:text-base
            "
          >
            Una selección pensada para decorar, regalar
            y crear esos pequeños momentos que hacen
            diferente la Navidad.
          </motion.p>
        </motion.div>

        {/* ===================================================
            GRID
        =================================================== */}

        <div
          className="
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#productos"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -14,
                scale: 1.025,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#12352B]
                shadow-[0_18px_50px_rgba(18,53,43,0.18)]
                transition-shadow
                duration-500
                hover:shadow-[0_30px_70px_rgba(18,53,43,0.30)]
              "
            >
              {/* =================================================
                  IMAGEN
              ================================================= */}

              <div
                className="
                  relative
                  aspect-[0.82]
                  overflow-hidden
                "
              >
                <motion.img
                  src={categoryImages[index]}
                  alt={category.name}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                  whileHover={{
                    scale: 1.12,
                    rotate: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                />

                {/* OSCURECIMIENTO */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#081510]/10
                    via-transparent
                    to-[#081510]/95
                  "
                />

                {/* GLOW HOVER */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    -left-[40%]
                    top-0
                    h-full
                    w-[50%]
                    rotate-[18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-[#F6E7B8]/25
                    to-transparent
                    blur-md
                  "
                  animate={{
                    x: [
                      "-100%",
                      "300%",
                    ],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                {/* COLOR */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#12352B]/0
                    via-transparent
                    to-[#7A2631]/0
                  "
                  whileHover={{
                    background:
                      "linear-gradient(135deg, rgba(18,53,43,0.15), transparent 45%, rgba(122,38,49,0.35))",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                />

                {/* NUMERO */}

                <motion.span
                  className="
                    absolute
                    left-6
                    top-6
                    text-xs
                    font-semibold
                    tracking-[0.2em]
                    text-[#F6F0E5]/75
                  "
                  whileHover={{
                    scale: 1.15,
                  }}
                >
                  0{index + 1}
                </motion.span>

                {/* DESTELLO */}

                <motion.div
                  className="
                    absolute
                    right-6
                    top-6
                    text-[#E7D8B8]
                    drop-shadow-[0_0_8px_rgba(231,216,184,0.8)]
                  "
                  animate={{
                    scale: [
                      0.7,
                      1.2,
                      0.7,
                    ],
                    rotate: [
                      0,
                      45,
                      0,
                    ],
                    opacity: [
                      0.35,
                      1,
                      0.35,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.5,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles size={20} />
                </motion.div>

                {/* CONTENIDO */}

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    z-10
                    p-6
                  "
                >
                  {/* BOTÓN */}

                  <motion.div
                    className="
                      mb-5
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E7D8B8]/40
                      bg-[#081510]/40
                      text-[#E7D8B8]
                      backdrop-blur-md
                    "
                    whileHover={{
                      rotate: 45,
                      scale: 1.15,
                      backgroundColor:
                        "#C8A45D",
                      color: "#081510",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>

                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.04em]
                      text-[#F6F0E5]
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[220px]
                      text-sm
                      leading-5
                      text-[#F6F0E5]/75
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* BRILLO INFERIOR */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-gradient-to-t
                    from-[#081510]/90
                    via-[#081510]/35
                    to-transparent
                  "
                />

                {/* LÍNEA DORADA INFERIOR */}

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
                      0.5 +
                      index * 0.15,
                    duration: 1,
                  }}
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}