
"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Navigation,
  ExternalLink,
  Sparkles,
  Star,
} from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Arequipa%2C%20Per%C3%BA";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=Arequipa%2C%20Per%C3%BA&output=embed";

/* =========================================================
   ESTRELLAS
========================================================= */

const stars = [
  { left: "7%", top: "10%", size: 20, delay: 0 },
  { left: "24%", top: "76%", size: 15, delay: 1.5 },
  { left: "43%", top: "9%", size: 17, delay: 2.2 },
  { left: "63%", top: "86%", size: 19, delay: 0.8 },
  { left: "82%", top: "10%", size: 16, delay: 2.7 },
  { left: "93%", top: "76%", size: 14, delay: 1.2 },
];

/* =========================================================
   LUCES
========================================================= */

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

/* =========================================================
   ADORNOS
========================================================= */

const ornaments = [
  {
    left: "16%",
    top: "22%",
    color: "#7A2631",
    delay: 0,
  },
  {
    left: "88%",
    top: "43%",
    color: "#C8A45D",
    delay: 1.8,
  },
  {
    left: "53%",
    top: "6%",
    color: "#F6F0E5",
    delay: 2.5,
  },
];

export default function LocationSection() {
  return (
    <section
      id="ubicacion"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#12352B]
        px-6
        py-16
        text-[#F6F0E5]
        sm:px-8
        sm:py-20
        lg:px-10
        lg:py-24
      "
    >
      {/* =====================================================
          GLOW VERDE SUPERIOR IZQUIERDO
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-32
          -top-32
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#1F5A47]/40
          blur-[110px]
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

      {/* =====================================================
          GLOW VERDE OSCURO INFERIOR DERECHO
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#081510]/80
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

      {/* =====================================================
          GLOW DORADO CENTRAL
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[650px]
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
          left-[25%]
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#7A2631]/[0.12]
          blur-[120px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.7, 0.35],
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
          opacity-[0.20]
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
          key={`location-star-${index}`}
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
          key={`location-light-${index}`}
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
              "0 0 18px 5px rgba(200,164,93,0.38)",
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
          ADORNOS
      ===================================================== */}

      {ornaments.map((ornament, index) => (
        <motion.div
          key={`location-ornament-${index}`}
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
            y: [-8, 8, -8],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 7,
            delay: ornament.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex flex-col items-center">
            <div className="h-7 w-px bg-[#C8A45D]/50" />

            <div
              className="
                h-6
                w-6
                rounded-full
                border
                border-[#F6F0E5]/50
                shadow-[0_4px_15px_rgba(0,0,0,0.18)]
              "
              style={{
                backgroundColor: ornament.color,
              }}
            />

            <div
              className="
                mt-1
                h-1.5
                w-1.5
                rounded-full
                bg-[#C8A45D]
              "
            />
          </div>
        </motion.div>
      ))}

      {/* =====================================================
          DECORACIÓN SUPERIOR DERECHA
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          z-0
          h-28
          w-64
          rotate-[8deg]
          rounded-full
          border-t-[8px]
          border-[#C8A45D]/20
        "
        animate={{
          rotate: [8, 11, 8],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

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
            mb-10
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
              ✦ Encuéntranos ✦
            </p>
          </motion.div>

          {/* TÍTULO */}

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
            Estamos más cerca de{" "}

            <span className="relative inline-block">
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
                lo que imaginas.
              </motion.span>

              {/* SUBRAYADO */}

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
                  shadow-[0_0_12px_rgba(200,164,93,0.55)]
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
              mt-6
              max-w-xl
              text-sm
              leading-6
              text-[#F6F0E5]/65
              sm:text-base
            "
          >
            Visítanos y descubre personalmente todo lo que
            hemos preparado para esta Navidad.
          </motion.p>
        </motion.div>

        {/* =================================================
            MAPA
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[1.5rem]
            border
            border-[#C8A45D]/25
            bg-[#081510]
            p-1
            shadow-[0_25px_65px_rgba(0,0,0,0.30)]
          "
        >
          {/* BORDE INTERIOR */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[1.25rem]
              bg-[#F6F0E5]
            "
          >
            {/* MAPA */}

            <div
              className="
                relative
                h-[280px]
                w-full
                sm:h-[320px]
                lg:h-[350px]
              "
            >
              <iframe
                src={GOOGLE_MAPS_EMBED}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  grayscale-[15%]
                  contrast-[0.95]
                "
              />

              {/* DEGRADADO SUPERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-x-0
                  top-0
                  h-20
                  bg-gradient-to-b
                  from-[#081510]/25
                  to-transparent
                "
              />

              {/* SPARKLE */}

              <motion.div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-5
                  text-[#C8A45D]
                "
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.35, 0.9, 0.35],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles
                  size={23}
                  strokeWidth={1.2}
                />
              </motion.div>

              {/* =================================================
                  TARJETA FLOTANTE
              ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-4
                  left-4
                  max-w-[calc(100%-2rem)]
                  sm:bottom-5
                  sm:left-5
                  sm:max-w-xs
                "
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[1.2rem]
                    border
                    border-[#C8A45D]/25
                    bg-[#F6F0E5]/95
                    p-4
                    shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                    backdrop-blur-xl
                    sm:p-5
                  "
                >
                  {/* LÍNEA ROJA */}

                  <div
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      w-1
                      bg-[#7A2631]
                    "
                  />

                  <div className="flex items-center gap-3">

                    {/* ICONO */}

                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#7A2631]
                        text-[#F6F0E5]
                        shadow-[0_7px_20px_rgba(122,38,49,0.25)]
                      "
                    >
                      <MapPin
                        size={19}
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#7A2631]
                        "
                      >
                        Nuestra ubicación
                      </p>

                      <h3
                        className="
                          mt-0.5
                          text-xl
                          font-semibold
                          tracking-[-0.03em]
                          text-[#171714]
                        "
                      >
                        Arequipa, Perú
                      </h3>

                    </div>
                  </div>

                  {/* DESCRIPCIÓN */}

                  <p
                    className="
                      mt-3
                      text-xs
                      leading-5
                      text-[#171714]/60
                    "
                  >
                    Encuéntranos y vive la experiencia
                    navideña de cerca.
                  </p>

                  {/* BOTÓN */}

                  <motion.a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="
                      mt-4
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-[#12352B]
                      px-4
                      py-2.5
                      text-xs
                      font-semibold
                      text-[#F6F0E5]
                      shadow-[0_8px_22px_rgba(18,53,43,0.25)]
                      transition-colors
                      hover:bg-[#7A2631]
                    "
                  >
                    <Navigation
                      size={15}
                      strokeWidth={2}
                    />

                    Cómo llegar

                    <ExternalLink
                      size={13}
                      strokeWidth={1.8}
                    />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            INFO INFERIOR
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
            delay: 0.2,
            duration: 0.6,
          }}
          className="
            mt-4
            flex
            flex-col
            items-center
            justify-between
            gap-3
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <div className="flex items-center gap-2.5">

            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[#C8A45D]/40
                bg-[#C8A45D]/10
                text-[#C8A45D]
              "
            >
              <MapPin
                size={15}
                strokeWidth={1.8}
              />
            </div>

            <div>

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#F6F0E5]/45
                "
              >
                Ubicación
              </p>

              <p
                className="
                  text-xs
                  font-medium
                  text-[#F6F0E5]
                "
              >
                Arequipa, Perú
              </p>

            </div>
          </div>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-[#C8A45D]
              transition-colors
              hover:text-[#F6F0E5]
            "
          >
            Abrir en Google Maps

            <ExternalLink
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
