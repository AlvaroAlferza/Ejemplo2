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
        bg-[#081510]
        text-[#F6F0E5]
      "
    >
      {/* ================= VIDEO DE FONDO ================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          -z-20
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/images/video11.mp4"
          type="video/mp4"
        />
      </video>

      {/* ================= CAPA OSCURA ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#081510]/55
        "
      />

      {/* ================= DEGRADADO ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-[#081510]/35
          via-[#081510]/45
          to-[#081510]/85
        "
      />

      {/* ================= GLOW ================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          -z-10
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C8A45D]
          blur-[150px]
        "
      />

      {/* ================= ESTRELLAS ================= */}

      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.2, 0.65, 0.2],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[10%]
          top-[27%]
          text-[#E7D8B8]
        "
      >
        <Star
          size={13}
          fill="currentColor"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 8, 0],
          opacity: [0.15, 0.5, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[34%]
          text-[#C8A45D]
        "
      >
        <Sparkles size={15} />
      </motion.div>

      {/* ================= CONTENIDO ================= */}

      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          justify-center
          px-6
          pb-20
          pt-28
          text-center
          sm:px-8
          lg:px-10
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            flex
            max-w-4xl
            flex-col
            items-center
          "
        >
          {/* ICONO */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              duration: 0.6,
            }}
            className="
              mb-7
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#C8A45D]/40
              bg-[#081510]/30
              text-[#C8A45D]
              backdrop-blur-md
            "
          >
            <Sparkles size={15} />
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
              max-w-4xl
              text-[clamp(2.8rem,5.5vw,5rem)]
              font-medium
              leading-[0.95]
              tracking-[-0.06em]
              drop-shadow-[0_10px_35px_rgba(0,0,0,0.35)]
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
              mt-7
              max-w-xl
              text-sm
              leading-6
              text-[#F6F0E5]/75
              drop-shadow-[0_5px_20px_rgba(0,0,0,0.35)]
              sm:text-base
              sm:leading-7
            "
          >
            Adornos, personajes y detalles especiales
            para crear espacios llenos de magia,
            calidez y ese espíritu que solo aparece
            una vez al año.
          </motion.p>

          {/* BOTÓN */}

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
            className="mt-8"
          >
            <motion.a
              href="#productos"
              whileHover={{
                scale: 1.035,
                boxShadow:
                  "0 18px 50px rgba(200,164,93,0.35)",
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
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#171714]
                shadow-[0_15px_45px_rgba(0,0,0,0.25)]
                transition-shadow
                duration-300
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

          {/* DETALLE */}

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
              mt-9
              flex
              items-center
              gap-4
              text-[9px]
              uppercase
              tracking-[0.25em]
              text-[#F6F0E5]/40
            "
          >
            <span className="h-px w-8 bg-[#F6F0E5]/25" />

            Momentos para recordar

            <span className="h-px w-8 bg-[#F6F0E5]/25" />
          </motion.div>
        </motion.div>
      </div>

      {/* ================= SCROLL ================= */}

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
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-[#F6F0E5]/35
          lg:flex
        "
      >
        <span className="h-7 w-px bg-[#F6F0E5]/25" />

        Descubre
      </motion.div>
    </section>
  );
}