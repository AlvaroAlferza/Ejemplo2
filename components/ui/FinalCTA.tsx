"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contacto"
      className="
        relative
        isolate
        overflow-hidden
        px-6
        pb-6
        pt-3
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
      "
    >

      {/* =====================================================
          VIDEO — FONDO DE TODO EL COMPONENTE
      ===================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/images/navidad3.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          CAPA OSCURA GENERAL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#081510]/45
        "
      />

      {/* =====================================================
          DEGRADADO
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-[#081510]/20
          via-[#081510]/35
          to-[#081510]/70
        "
      />

      {/* =====================================================
          VIÑETA
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(8,21,16,0.45)_100%)]
        "
      />

      {/* =====================================================
          GLOW DORADO
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-[350px]
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C8A45D]
          blur-[110px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

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
          duration: 0.7,
        }}
        className="
          relative
          mx-auto
          flex
          min-h-[310px]
          max-w-7xl
          items-center
          justify-center
          px-6
          py-12
          text-center
          sm:min-h-[330px]
          sm:px-10
          sm:py-14
          lg:min-h-[350px]
          lg:py-16
        "
      >

        {/* ===================================================
            DECORACIÓN
        =================================================== */}

        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 5, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[8%]
            top-[12%]
            text-[#C8A45D]
          "
        >
          <Sparkles size={24} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            bottom-[15%]
            left-[10%]
            text-[#E7D8B8]/60
          "
        >
          <Sparkles size={15} />
        </motion.div>

        {/* ===================================================
            BLOQUE
        =================================================== */}

        <div className="relative z-10">

          {/* ICONO */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              mx-auto
              mb-4
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
              backdrop-blur-sm
            "
          >
            <Sparkles size={15} />
          </motion.div>

          {/* LABEL */}

          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#E7D8B8]
            "
          >
            Esta Navidad
          </p>

          {/* TITULO */}

          <h2
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-3xl
              font-medium
              leading-[0.98]
              tracking-[-0.05em]
              text-[#F8F3E8]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Haz que tu espacio
            <br />
            <span className="text-[#E7D8B8]">
              se sienta especial.
            </span>
          </h2>

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              mt-5
              max-w-md
              text-[13px]
              leading-5
              text-[#F6F0E5]/65
              sm:text-sm
            "
          >
            Descubre personajes, adornos y pequeños detalles
            pensados para celebrar a tu manera.
          </p>

          {/* BOTÓN */}

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
              mt-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-[#C8A45D]
              px-6
              py-3
              text-xs
              font-semibold
              text-[#171714]
              shadow-[0_12px_35px_rgba(200,164,93,0.2)]
              transition-shadow
              duration-300
              hover:shadow-[0_15px_45px_rgba(200,164,93,0.35)]
            "
          >
            Explorar colección

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.a>

        </div>
      </motion.div>
    </section>
  );
}