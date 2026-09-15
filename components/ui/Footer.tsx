"use client";

import { motion } from "motion/react";
import {
  ArrowUp,
  Mail,
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
        overflow-hidden
        bg-[#081510]
        px-6
        pb-6
        pt-16
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
        lg:pt-20
      "
    >

      {/* =====================================================
          VIDEO DE FONDO
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
          h-full
          w-full
          object-cover
        "
      >
        <source
          src="/images/navidad7.mp4"
          type="video/mp4"
        />
      </video>

      {/* =====================================================
          OVERLAY PRINCIPAL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#081510]/45
        "
      />

      {/* =====================================================
          GRADIENTE PARA LEGIBILIDAD
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-b
          from-[#081510]/20
          via-[#081510]/35
          to-[#081510]/75
        "
      />

      {/* =====================================================
          VIÑETA LATERAL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,transparent_15%,rgba(8,21,16,0.45)_100%)]
        "
      />

      {/* =====================================================
          GLOW DORADO
      ===================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#C8A45D]
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTENIDO
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ===================================================
            TOP
        =================================================== */}

        <div
          className="
            grid
            gap-12
            border-b
            border-[#F6F0E5]/15
            pb-12
            lg:grid-cols-[1.7fr_1fr_1fr]
            lg:gap-16
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

            <a
              href="#"
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
                "
              >
                NAVIDAD
              </span>

              <span
                className="
                  text-lg
                  text-[#C8A45D]
                "
              >
                ✦
              </span>
            </a>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-5
                max-w-md
                text-sm
                leading-6
                text-[#F6F0E5]/65
                sm:text-[15px]
                sm:leading-7
              "
            >
              Detalles que hacen especial la Navidad.
              Adornos, personajes y regalos para crear
              espacios llenos de magia y celebrar con intención.
            </p>

            {/* EMAIL */}

            <a
              href="mailto:hola@navidad.com"
              className="
                mt-6
                inline-flex
                items-center
                gap-2.5
                text-sm
                font-medium
                text-[#E7D8B8]
                transition-colors
                duration-300
                hover:text-white
              "
            >
              <Mail size={16} />

              hola@navidad.com
            </a>

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
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8A45D]
              "
            >
              Explorar
            </p>

            <div className="flex flex-col gap-3.5">

              {links[0].items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-[#F6F0E5]/65
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
                mb-5
                text-xs
                font-semibold
                uppercase
                tracking-[0.22em]
                text-[#C8A45D]
              "
            >
              Ayuda
            </p>

            <div className="flex flex-col gap-3.5">

              {links[1].items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    w-fit
                    text-sm
                    text-[#F6F0E5]/65
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
            gap-6
            py-6
            sm:flex-row
            sm:items-center
          "
        >

          {/* COPYRIGHT */}

          <p
            className="
              text-xs
              text-[#F6F0E5]/40
            "
          >
            © 2026 Navidad. Todos los derechos reservados.
          </p>

          {/* SOCIAL */}

          <div className="flex items-center gap-2.5">

            {/* INSTAGRAM */}

            <motion.a
              href="#"
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Instagram"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/20
                bg-[#081510]/35
                text-[#F6F0E5]/70
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C8A45D]/60
                hover:bg-[#C8A45D]/15
                hover:text-[#C8A45D]
              "
            >
              <FaInstagram size={15} />
            </motion.a>

            {/* FACEBOOK */}

            <motion.a
              href="#"
              whileHover={{
                y: -4,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Facebook"
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/20
                bg-[#081510]/35
                text-[#F6F0E5]/70
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C8A45D]/60
                hover:bg-[#C8A45D]/15
                hover:text-[#C8A45D]
              "
            >
              <FaFacebookF size={14} />
            </motion.a>

            {/* BACK TO TOP */}

            <motion.a
              href="#"
              whileHover={{
                y: -4,
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Volver arriba"
              className="
                ml-1
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#C8A45D]
                text-[#171714]
                shadow-[0_8px_30px_rgba(200,164,93,0.25)]
                transition-shadow
                duration-300
                hover:shadow-[0_8px_35px_rgba(200,164,93,0.45)]
              "
            >
              <ArrowUp size={16} />
            </motion.a>

          </div>

        </div>

      </div>
    </footer>
  );
}