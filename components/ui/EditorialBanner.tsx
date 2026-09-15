"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function EditorialBanner() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        px-6
        py-8
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
        lg:py-10
      "
    >

      {/* =====================================================
          VIDEO — FONDO DE TODA LA SECCIÓN
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
          src="/images/navidad2.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#081510]/35
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-gradient-to-b
          from-[#081510]/15
          via-[#081510]/25
          to-[#081510]/60
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
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(8,21,16,0.4)_100%)]
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
          -right-32
          -top-32
          -z-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#C8A45D]
          blur-[110px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            DECORACIÓN
        =================================================== */}

        <motion.div
          animate={{
            y: [0, -5, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            right-[7%]
            top-[10%]
            text-[#C8A45D]/65
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
            bottom-[12%]
            right-[20%]
            text-[#E7D8B8]/40
          "
        >
          <Sparkles size={15} />
        </motion.div>

        {/* CÍRCULOS */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -bottom-24
            h-[260px]
            w-[260px]
            rounded-full
            border
            border-[#E7D8B8]/12
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-16
            h-[180px]
            w-[180px]
            rounded-full
            border
            border-[#C8A45D]/15
          "
        />

        {/* ===================================================
            BLOQUE CENTRAL
        =================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.75,
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

          {/* LABEL */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
              duration: 0.5,
            }}
            className="
              mb-3
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#E7D8B8]
              sm:text-[10px]
            "
          >
            Para regalar
          </motion.p>

          {/* TITULO */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.18,
              duration: 0.7,
            }}
            className="
              max-w-2xl
              text-4xl
              font-medium
              leading-[0.94]
              tracking-[-0.055em]
              sm:text-5xl
              lg:text-[52px]
            "
          >
            Hecho para
            <br />

            <span className="text-[#E7D8B8]">
              regalar.
            </span>
          </motion.h2>

          {/* DESCRIPCIÓN */}

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="
              mt-4
              max-w-md
              text-[13px]
              leading-5
              text-[#F6F0E5]/70
              sm:text-sm
            "
          >
            Porque algunos regalos no se envuelven solamente.
            Se convierten en recuerdos.
          </motion.p>

          {/* BOTÓN */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="mt-5"
          >
            <motion.a
              href="#productos"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#F6F0E5]
                px-5
                py-2.5
                text-xs
                font-semibold
                text-[#7A2631]
                shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                transition-colors
                duration-300
                hover:bg-white
              "
            >
              Descubrir regalos

              <ArrowUpRight
                size={14}
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