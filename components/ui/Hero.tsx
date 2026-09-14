"use client";

import { motion } from "motion/react";
import {
  ArrowDownRight,
  Sparkles,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#12352B]
        text-[#F6F0E5]
      "
    >
      {/* ================= FONDOS ================= */}

      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        {/* Glow superior */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-32
            -top-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#C8A45D]
            blur-[140px]
          "
        />

        {/* Glow rojo */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-40
            -left-32
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#7A2631]
            blur-[150px]
          "
        />

        {/* Textura sutil */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #F6F0E5 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* ================= ESTRELLAS ================= */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[8%] top-[22%]"
      >
        <Star
          size={13}
          fill="currentColor"
          className="text-[#E7D8B8]"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.2, 0.65, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute left-[46%] top-[18%]"
      >
        <Star
          size={9}
          fill="currentColor"
          className="text-[#C8A45D]"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -7, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="pointer-events-none absolute right-[12%] top-[35%]"
      >
        <Star
          size={11}
          fill="currentColor"
          className="text-[#E7D8B8]"
        />
      </motion.div>

      {/* ================= CONTENIDO ================= */}

      <div
        className="
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          items-center
          gap-16
          px-6
          pb-20
          pt-32
          sm:px-8
          lg:grid-cols-[1.05fr_0.95fr]
          lg:px-10
          lg:pt-28
        "
      >
        {/* ================= TEXTO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          {/* LABEL */}

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
              delay: 0.15,
              duration: 0.6,
            }}
            className="
              mb-7
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#E7D8B8]/20
              bg-[#F6F0E5]/[0.05]
              px-4
              py-2
              text-[11px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#E7D8B8]
              backdrop-blur-md
            "
          >
            <Sparkles
              size={13}
              className="text-[#C8A45D]"
            />

            Navidad artesanal
          </motion.div>

          {/* TITULO */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-3xl
              text-[clamp(3.5rem,7vw,6.8rem)]
              font-medium
              leading-[0.91]
              tracking-[-0.065em]
            "
          >
            Una Navidad
            <br />

            <span className="text-[#E7D8B8]">
              para recordar.
            </span>
          </motion.h1>

          {/* DESCRIPCIÓN */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
            className="
              mt-8
              max-w-xl
              text-base
              leading-7
              text-[#F6F0E5]/65
              sm:text-lg
              sm:leading-8
            "
          >
            Adornos, personajes y detalles especiales
            para crear espacios llenos de magia,
            calidez y ese espíritu que solo aparece
            una vez al año.
          </motion.p>

          {/* CTA */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.55,
              duration: 0.7,
            }}
            className="mt-10"
          >
            <motion.a
              href="#productos"
              whileHover={{
                scale: 1.035,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#C8A45D]
                px-7
                py-4
                text-sm
                font-semibold
                text-[#171714]
                shadow-[0_15px_45px_rgba(200,164,93,0.18)]
                transition-shadow
                duration-300
                hover:shadow-[0_20px_55px_rgba(200,164,93,0.3)]
              "
            >
              Explorar colección

              <ArrowDownRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:translate-y-1
                "
              />
            </motion.a>
          </motion.div>

          {/* DETALLE INFERIOR */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="
              mt-12
              flex
              items-center
              gap-4
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#F6F0E5]/35
            "
          >
            <span className="h-px w-10 bg-[#F6F0E5]/20" />

            Hecho para celebrar
          </motion.div>
        </motion.div>

        {/* ================= COMPOSICIÓN VISUAL ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mx-auto
            flex
            w-full
            max-w-[560px]
            items-center
            justify-center
          "
        >
          {/* Glow principal */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.38, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-[360px]
              w-[360px]
              rounded-full
              bg-[#C8A45D]
              blur-[120px]
            "
          />

          {/* CÍRCULO CENTRAL */}

          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              relative
              flex
              aspect-square
              w-[min(82vw,470px)]
              items-center
              justify-center
            "
          >
            {/* Anillo */}

            <div
              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#E7D8B8]/15
              "
            />

            <div
              className="
                absolute
                inset-[7%]
                rounded-full
                border
                border-[#C8A45D]/20
              "
            />

            {/* Fondo */}

            <div
              className="
                absolute
                inset-[13%]
                rounded-full
                bg-gradient-to-br
                from-[#1D4A3B]
                via-[#12352B]
                to-[#7A2631]
                shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              "
            />

            {/* Adorno principal */}

            <motion.div
              animate={{
                rotate: [0, 3, 0, -3, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                flex
                h-[58%]
                w-[58%]
                items-center
                justify-center
              "
            >
              <div
                className="
                  absolute
                  inset-[10%]
                  rounded-full
                  border-[1.5px]
                  border-[#C8A45D]/60
                "
              />

              <div
                className="
                  absolute
                  inset-[18%]
                  rounded-full
                  bg-[#F6F0E5]/[0.04]
                  backdrop-blur-sm
                "
              />

              <div className="relative text-center">
                <div
                  className="
                    text-7xl
                    leading-none
                    text-[#C8A45D]
                    drop-shadow-[0_10px_25px_rgba(200,164,93,0.25)]
                    sm:text-8xl
                  "
                >
                  ✦
                </div>

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.35em]
                    text-[#E7D8B8]/70
                  "
                >
                  Christmas
                </p>
              </div>
            </motion.div>

            {/* PEQUEÑOS ORNAMENTOS */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[10%]
                top-[19%]
                h-11
                w-11
                rounded-full
                border
                border-[#C8A45D]/50
                bg-[#7A2631]
                shadow-[0_15px_35px_rgba(0,0,0,0.2)]
              "
            />

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="
                absolute
                bottom-[18%]
                left-[9%]
                h-8
                w-8
                rounded-full
                border
                border-[#C8A45D]/50
                bg-[#E7D8B8]
              "
            />

            {/* Estrellas */}

            <motion.div
              animate={{
                rotate: [0, 12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[5%]
                top-[27%]
                text-[#C8A45D]
              "
            >
              <Star
                size={28}
                fill="currentColor"
              />
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[28%]
                right-[4%]
                text-[#E7D8B8]/70
              "
            >
              <Sparkles size={25} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* INDICADOR SCROLL */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 1,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-[#F6F0E5]/30
          lg:flex
        "
      >
        <span className="h-8 w-px bg-[#F6F0E5]/20" />
        Descubre
      </motion.div>
    </section>
  );
}