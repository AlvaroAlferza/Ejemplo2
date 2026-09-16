"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const links = [
  {
    title: "Explorar",
    items: [
      { label: "Colecciones", href: "#colecciones" },
      { label: "Productos", href: "#productos" },
      { label: "Nosotros", href: "#nosotros" },
    ],
  },
  {
    title: "Ayuda",
    items: [
      { label: "Envíos", href: "#" },
      { label: "Preguntas frecuentes", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        bg-[#081510]
        px-6
        pb-5
        pt-11
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
        lg:pt-14
      "
    >
      {/* =====================================================
          IMAGEN DE FONDO
      ===================================================== */}

      <img
        src="/images/fondo4.jpg"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* =====================================================
          OVERLAY MUY SUTIL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#081510]/10
        "
      />

      {/* =====================================================
          GRADIENTE MUY SUAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#081510]/5
          via-transparent
          to-[#081510]/45
        "
      />

      {/* =====================================================
          VIÑETA SUAVE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_30%,rgba(8,21,16,0.18)_100%)]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            CONTENIDO PRINCIPAL
        =================================================== */}

        <div
          className="
            grid
            gap-9
            border-b
            border-[#F6F0E5]/20
            pb-9
            lg:grid-cols-[1.8fr_0.9fr_0.9fr]
            lg:gap-12
            lg:pb-10
          "
        >

          {/* =================================================
              BRAND
          ================================================= */}

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
              duration: 0.7,
            }}
          >
            {/* LOGO */}

            <motion.a
              href="#"
              whileHover={{
                y: -2,
              }}
              className="
                inline-flex
                items-center
                gap-2.5
              "
            >
              <span
                className="
                  text-2xl
                  font-semibold
                  tracking-[-0.055em]
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                  sm:text-[27px]
                "
              >
                NAVIDAD
              </span>

              <motion.span
                animate={{
                  rotate: [0, 12, -12, 0],
                  scale: [1, 1.12, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-lg
                  text-[#C8A45D]
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]
                "
              >
                ✦
              </motion.span>
            </motion.a>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-4
                max-w-md
                text-sm
                leading-6
                text-[#F6F0E5]/80
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                sm:text-[15px]
              "
            >
              Detalles que hacen especial la Navidad.
              Adornos, personajes y regalos para crear
              espacios llenos de magia.
            </p>

            {/* CONTACTO */}

            <div
              className="
                mt-5
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-center
                sm:gap-5
              "
            >
              <a
                href="mailto:hola@navidad.com"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#F6F0E5]/90
                  drop-shadow-[0_2px_7px_rgba(0,0,0,0.35)]
                  transition-colors
                  duration-300
                  hover:text-[#C8A45D]
                "
              >
                <Mail
                  size={15}
                  strokeWidth={1.8}
                />

                hola@navidad.com
              </a>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-[#F6F0E5]/25
                  sm:block
                "
              />

              <a
                href="#ubicacion"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  text-sm
                  text-[#F6F0E5]/80
                  drop-shadow-[0_2px_7px_rgba(0,0,0,0.35)]
                  transition-colors
                  duration-300
                  hover:text-[#F6F0E5]
                "
              >
                <MapPin
                  size={15}
                  strokeWidth={1.8}
                />

                Arequipa, Perú
              </a>
            </div>
          </motion.div>

          {/* =================================================
              EXPLORAR
          ================================================= */}

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
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8A45D]
                drop-shadow-[0_2px_7px_rgba(0,0,0,0.4)]
              "
            >
              Explorar
            </p>

            <div className="flex flex-col gap-2.5">
              {links[0].items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-[#F6F0E5]/80
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.4)]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#F6F0E5]
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              AYUDA
          ================================================= */}

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
              delay: 0.2,
              duration: 0.7,
            }}
          >
            <p
              className="
                mb-4
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8A45D]
                drop-shadow-[0_2px_7px_rgba(0,0,0,0.4)]
              "
            >
              Ayuda
            </p>

            <div className="flex flex-col gap-2.5">
              {links[1].items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-[#F6F0E5]/80
                    drop-shadow-[0_2px_7px_rgba(0,0,0,0.4)]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#F6F0E5]
                  "
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            flex
            flex-col
            justify-between
            gap-5
            py-5
            sm:flex-row
            sm:items-center
          "
        >
          {/* COPYRIGHT */}

          <p
            className="
              text-[11px]
              tracking-wide
              text-[#F6F0E5]/65
              drop-shadow-[0_2px_7px_rgba(0,0,0,0.45)]
            "
          >
            © 2026 Navidad. Todos los derechos reservados.
          </p>

          {/* =================================================
              SOCIAL + TOP
          ================================================= */}

          <div className="flex items-center gap-2.5">

            {/* INSTAGRAM */}

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Instagram"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/30
                bg-[#081510]/20
                text-[#F6F0E5]/85
                backdrop-blur-[2px]
                transition-all
                duration-300
                hover:border-[#C8A45D]/70
                hover:bg-[#C8A45D]/20
                hover:text-[#C8A45D]
              "
            >
              <FaInstagram size={14} />
            </motion.a>

            {/* FACEBOOK */}

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Facebook"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/30
                bg-[#081510]/20
                text-[#F6F0E5]/85
                backdrop-blur-[2px]
                transition-all
                duration-300
                hover:border-[#C8A45D]/70
                hover:bg-[#C8A45D]/20
                hover:text-[#C8A45D]
              "
            >
              <FaFacebookF size={13} />
            </motion.a>

            {/* BACK TO TOP */}

            <motion.a
              href="#"
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Volver arriba"
              className="
                ml-1
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-[#C8A45D]
                text-[#171714]
                shadow-[0_8px_25px_rgba(200,164,93,0.28)]
                transition-shadow
                duration-300
                hover:shadow-[0_8px_30px_rgba(200,164,93,0.45)]
              "
            >
              <ArrowUp
                size={15}
                strokeWidth={2}
              />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}