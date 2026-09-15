"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#F6F0E5] px-6 pb-6 pt-3 sm:px-8 lg:px-10">
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
          max-w-7xl
          overflow-hidden
          rounded-[2rem]
          bg-[#171714]
          px-6
          py-12
          text-center
          text-[#F6F0E5]
          sm:px-10
          sm:py-14
          lg:py-16
        "
      >
        {/* ================= VIDEO ================= */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="
            absolute
            inset-0
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

        {/* ================= CAPA OSCURA ================= */}

        <div
          className="
            absolute
            inset-0
            bg-[#081510]/65
          "
        />

        {/* ================= DEGRADADO ================= */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#081510]/25
            via-[#081510]/40
            to-[#081510]/75
          "
        />

        {/* ================= GLOW ================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#C8A45D]/10
            blur-[100px]
          "
        />

        {/* ================= CONTENIDO ================= */}

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