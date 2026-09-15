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
        pb-5
        pt-12
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
      "
      style={{
        backgroundImage: "url('/images/fondo.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CAPA OSCURA */}
      <div className="pointer-events-none absolute inset-0 bg-[#081510]/80" />

      {/* GLOW SUTIL */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C8A45D]/5
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= TOP ================= */}

        <div
          className="
            grid
            gap-10
            border-b
            border-[#F6F0E5]/10
            pb-10
            lg:grid-cols-[1.5fr_1fr_1fr]
          "
        >

          {/* BRAND */}

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2"
            >
              <span className="text-lg font-semibold tracking-[-0.04em]">
                NAVIDAD
              </span>

              <span className="text-[#C8A45D]">
                ✦
              </span>
            </a>

            <p className="mt-4 max-w-sm text-xs leading-5 text-[#F6F0E5]/50">
              Detalles que hacen especial la Navidad.
              Adornos, personajes y regalos para celebrar
              con intención.
            </p>

            <a
              href="mailto:hola@navidad.com"
              className="
                mt-4
                inline-flex
                items-center
                gap-2
                text-xs
                text-[#E7D8B8]
                transition-colors
                hover:text-white
              "
            >
              <Mail size={14} />

              hola@navidad.com
            </a>
          </div>

          {/* LINKS */}

          {links.map((group) => (
            <div key={group.title}>
              <p
                className="
                  mb-4
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#C8A45D]
                "
              >
                {group.title}
              </p>

              <div className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      w-fit
                      text-xs
                      text-[#F6F0E5]/45
                      transition-colors
                      hover:text-[#F6F0E5]
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

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

          <p className="text-[10px] text-[#F6F0E5]/30">
            © 2026 Navidad. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">

            {/* INSTAGRAM */}

            <motion.a
              href="#"
              whileHover={{
                y: -3,
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
                border-[#F6F0E5]/10
                bg-[#081510]/40
                text-[#F6F0E5]/55
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#C8A45D]/40
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
                border-[#F6F0E5]/10
                bg-[#081510]/40
                text-[#F6F0E5]/55
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-[#C8A45D]/40
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
                shadow-[0_8px_30px_rgba(200,164,93,0.15)]
              "
            >
              <ArrowUp size={15} />
            </motion.a>

          </div>
        </div>
      </div>
    </footer>
  );
}