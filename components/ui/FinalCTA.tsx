"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  const whatsappMessage = encodeURIComponent(
    "🎄 Hola, quisiera conocer más detalles sobre sus productos y la colección de Navidad."
  );

  const whatsappUrl = `https://wa.me/51958032002?text=${whatsappMessage}`;

  return (
    <section
      id="contacto"
      className="
        relative
        isolate
        overflow-hidden
        px-6
        pb-5
        pt-2
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
      "
    >
      {/* =====================================================
          VIDEO — FONDO
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
          src="/images/navidad1.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          CAPA OSCURA
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#081510]/50
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
          from-[#081510]/25
          via-[#081510]/40
          to-[#081510]/75
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
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(8,21,16,0.48)_100%)]
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
          h-[280px]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C8A45D]
          blur-[100px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

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
          relative
          mx-auto
          flex
          min-h-[250px]
          max-w-7xl
          items-center
          justify-center
          px-6
          py-8
          text-center
          sm:min-h-[270px]
          sm:px-10
          sm:py-10
          lg:min-h-[285px]
          lg:py-11
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
          <Sparkles size={22} />
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
          <Sparkles size={14} />
        </motion.div>

        {/* ===================================================
            BLOQUE
        =================================================== */}

        <div className="relative z-10">

          {/* =================================================
              ICONO
          ================================================= */}

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
            animate={{
              y: [0, -3, 0],
            }}
            className="
              mx-auto
              mb-5
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-[#C8A45D]/40
              bg-[#081510]/35
              text-[#C8A45D]
              backdrop-blur-sm
            "
          >
            <Sparkles size={15} />
          </motion.div>

          {/* =================================================
              LABEL — MISMO ESTILO DE LAS OTRAS SECCIONES
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
              ✦ Esta Navidad ✦
            </p>
          </motion.div>

          {/* =================================================
              TÍTULO
          ================================================= */}

          <h2
            className="
              mx-auto
              max-w-2xl
              text-4xl
              font-medium
              leading-[0.95]
              tracking-[-0.05em]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Haz que tu espacio
            <br />

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
                se sienta especial.
              </motion.span>

              {/* =================================================
                  RAYITA DORADA
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
                  shadow-[0_0_10px_rgba(200,164,93,0.55)]
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
              max-w-lg
              text-sm
              leading-6
              text-[#F6F0E5]/75
              sm:text-base
            "
          >
            ¿Tienes alguna duda o buscas algo especial?
            <br className="hidden sm:block" />
            Chatea con nosotros y te ayudamos con todos los detalles.
          </motion.p>

          {/* =================================================
              BOTÓN WHATSAPP
          ================================================= */}

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
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
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              mt-7
              inline-flex
              items-center
              gap-2.5
              rounded-full
              bg-[#C8A45D]
              px-6
              py-3
              text-sm
              font-semibold
              text-[#171714]
              shadow-[0_12px_35px_rgba(200,164,93,0.2)]
              transition-shadow
              duration-300
              hover:shadow-[0_15px_45px_rgba(200,164,93,0.35)]
            "
          >
            <MessageCircle size={16} />

            Chatea con nosotros

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
              "
            />
          </motion.a>

          {/* =================================================
              TEXTO INFERIOR
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="
              mt-4
              text-[10px]
              text-[#F6F0E5]/45
              sm:text-xs
            "
          >
            Te ayudamos a encontrar el detalle perfecto para esta Navidad.
          </motion.p>

        </div>
      </motion.div>
    </section>
  );
}