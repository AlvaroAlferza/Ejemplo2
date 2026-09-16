"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Star } from "lucide-react";

const stars = [
  { left: "7%", top: "12%", size: 20, delay: 0 },
  { left: "22%", top: "76%", size: 15, delay: 1.5 },
  { left: "43%", top: "10%", size: 17, delay: 2.2 },
  { left: "64%", top: "84%", size: 19, delay: 0.8 },
  { left: "82%", top: "12%", size: 16, delay: 2.7 },
  { left: "94%", top: "72%", size: 14, delay: 1.2 },
];

const lights = [
  { left: "4%", top: "23%", delay: 0, size: 7 },
  { left: "13%", top: "58%", delay: 1.2, size: 5 },
  { left: "21%", top: "15%", delay: 2.1, size: 6 },
  { left: "30%", top: "82%", delay: 0.5, size: 5 },
  { left: "40%", top: "20%", delay: 1.7, size: 7 },
  { left: "49%", top: "87%", delay: 2.8, size: 5 },
  { left: "58%", top: "13%", delay: 0.9, size: 6 },
  { left: "68%", top: "79%", delay: 2.4, size: 7 },
  { left: "77%", top: "18%", delay: 1.3, size: 5 },
  { left: "87%", top: "64%", delay: 3, size: 6 },
  { left: "95%", top: "28%", delay: 0.7, size: 7 },
];

const ornaments = [
  {
    left: "15%",
    top: "18%",
    color: "#7A2631",
    delay: 0,
  },
  {
    left: "88%",
    top: "45%",
    color: "#C8A45D",
    delay: 1.8,
  },
  {
    left: "53%",
    top: "7%",
    color: "#F6F0E5",
    delay: 2.5,
  },
];

export default function EditorialBanner() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-[#12352B]
        px-6
        py-8
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
        lg:py-10
      "
    >
      {/* =====================================================
          GLOW VERDE — SUPERIOR IZQUIERDO
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1F5A47]/40
          blur-[110px]
        "
        animate={{
          scale: [1, 1.14, 1],
          x: [0, 25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          GLOW VERDE — INFERIOR DERECHO
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-44
          -right-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#0A241B]/80
          blur-[115px]
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

      {/* =====================================================
          GLOW DORADO CENTRAL
      ===================================================== */}

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
          bg-[#C8A45D]/[0.07]
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

      {/* =====================================================
          GLOW ROJO SUTIL
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-[28%]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#7A2631]/[0.10]
          blur-[120px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          TEXTURA DE PUNTOS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #C8A45D 1px, transparent 1.5px)",
          backgroundSize: "38px 38px",
        }}
      />

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
          "
          style={{
            left: star.left,
            top: star.top,
          }}
          animate={{
            rotate: [0, 20, -20, 0],
            scale: [0.7, 1.25, 0.7],
            opacity: [0.2, 0.9, 0.2],
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

      {/* =====================================================
          LUCES
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

      {/* =====================================================
          ORNAMENTOS COLGANTES
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
            y: [0, 7, 0],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 5,
            delay: ornament.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* HILO */}

          <div
            className="
              mx-auto
              h-10
              w-px
              bg-[#C8A45D]/35
            "
          />

          {/* BOLA */}

          <div
            className="
              relative
              h-5
              w-5
              rounded-full
              border
              border-[#F6F0E5]/30
            "
            style={{
              backgroundColor: ornament.color,
              boxShadow:
                "0 0 18px rgba(200,164,93,0.18)",
            }}
          >
            <div
              className="
                absolute
                -top-1
                left-1/2
                h-1.5
                w-1.5
                -translate-x-1/2
                rounded-full
                bg-[#C8A45D]
              "
            />
          </div>
        </motion.div>
      ))}

      {/* =====================================================
          CÍRCULOS DECORATIVOS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-20
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-[#F6F0E5]/[0.08]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-16
          h-[190px]
          w-[190px]
          rounded-full
          border
          border-[#C8A45D]/15
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

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
            flex
            min-h-[300px]
            flex-col
            items-center
            justify-center
            px-6
            py-12
            text-center
            sm:min-h-[320px]
            sm:px-10
          "
        >

          {/* =================================================
              LABEL
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
                text-[#C8A45D]
                sm:text-xl
                lg:text-2xl
              "
            >
              ✦ Para regalar ✦
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
              text-[#F6F0E5]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Hecho para{" "}

            <br />

            <span className="relative inline-block">

              {/* TEXTO DESTACADO */}

              <motion.span
                className="
                  inline-block
                  text-[#C8A45D]
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
                regalar.
              </motion.span>

              {/* RAYITA DORADA */}

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
                  shadow-[0_0_12px_rgba(200,164,93,0.65)]
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
              text-[#F6F0E5]/75
              sm:text-base
            "
          >
            Porque algunos regalos no se envuelven solamente.
            Se convierten en recuerdos.
          </motion.p>

          {/* =================================================
              BOTÓN
          ================================================= */}

          <motion.div
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
              delay: 0.5,
              duration: 0.7,
            }}
            className="mt-7"
          >
            <motion.a
              href="#productos"
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                items-center
                gap-2.5
                rounded-full
                bg-[#F6F0E5]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#12352B]
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                transition-colors
                duration-300
                hover:bg-white
              "
            >
              Descubrir regalos

              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}