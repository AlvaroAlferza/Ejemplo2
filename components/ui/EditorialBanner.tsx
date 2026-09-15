"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function EditorialBanner() {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-10
        sm:px-8
        lg:px-10
      "
      style={{
        backgroundImage: "url('/images/fondo2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= CAPA SUTIL DEL FONDO ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#F6F0E5]/10
        "
      />

      {/* ================= CONTENEDOR ================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mx-auto
          min-h-[400px]
          max-w-7xl
          overflow-hidden
          rounded-[2rem]
          bg-[#7A2631]
          text-[#F6F0E5]
          shadow-[0_25px_70px_rgba(23,23,20,0.15)]
        "
      >
        {/* ================================================== */}
        {/* VIDEO DENTRO DEL BOX */}
        {/* ================================================== */}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            z-0
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

        {/* ================= CAPA OSCURA DEL VIDEO ================= */}

        <div
          className="
            absolute
            inset-0
            z-10
            bg-[#081510]/45
          "
        />

        <div
          className="
            absolute
            inset-0
            z-10
            bg-gradient-to-b
            from-[#081510]/15
            via-[#081510]/30
            to-[#081510]/65
          "
        />

        {/* ================= GLOW DORADO ================= */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.22, 0.12],
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
            z-10
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#C8A45D]
            blur-[120px]
          "
        />

        {/* ================= GLOW VERDE ================= */}

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            pointer-events-none
            absolute
            -bottom-40
            left-1/3
            z-10
            h-[400px]
            w-[400px]
            rounded-full
            bg-[#12352B]
            blur-[130px]
          "
        />

        {/* ================= DECORACIÓN ================= */}

        <motion.div
          animate={{
            y: [0, -7, 0],
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
            right-[10%]
            top-[15%]
            z-20
            text-[#C8A45D]/50
          "
        >
          <Sparkles size={28} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 6, 0],
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
            bottom-[18%]
            right-[25%]
            z-20
            text-[#E7D8B8]/40
          "
        >
          <Sparkles size={18} />
        </motion.div>

        {/* CIRCULOS */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            -bottom-28
            z-20
            h-[300px]
            w-[300px]
            rounded-full
            border
            border-[#E7D8B8]/15
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-10
            -top-20
            z-20
            h-[220px]
            w-[220px]
            rounded-full
            border
            border-[#C8A45D]/20
          "
        />

        {/* ================================================== */}
        {/* CONTENIDO */}
        {/* ================================================== */}

        <div
          className="
            relative
            z-30
            flex
            min-h-[400px]
            flex-col
            items-center
            justify-center
            px-8
            py-12
            text-center
            sm:px-14
          "
        >
          {/* LABEL */}

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
              delay: 0.1,
              duration: 0.6,
            }}
            className="
              mb-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#E7D8B8]
            "
          >
            Para regalar
          </motion.p>

          {/* TITULO */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              max-w-2xl
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.055em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Hecho para
            <br />
            <span className="text-[#E7D8B8]">
              regalar.
            </span>
          </motion.h2>

          {/* DESCRIPCION */}

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
              mt-5
              max-w-md
              text-sm
              leading-6
              text-[#F6F0E5]/70
              sm:text-[15px]
            "
          >
            Porque algunos regalos no se envuelven solamente.
            Se convierten en recuerdos.
          </motion.p>

          {/* BOTON */}

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
                scale: 1.04,
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
                px-5
                py-3
                text-xs
                font-semibold
                text-[#7A2631]
                shadow-[0_12px_35px_rgba(0,0,0,0.18)]
              "
            >
              Descubrir regalos

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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}