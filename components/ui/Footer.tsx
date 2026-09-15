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
    <footer className="bg-[#171714] px-6 pb-6 pt-20 text-[#F6F0E5] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* ================= TOP ================= */}

        <div className="grid gap-16 border-b border-[#F6F0E5]/10 pb-16 lg:grid-cols-[1.5fr_1fr_1fr]">

          {/* BRAND */}

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2"
            >
              <span className="text-xl font-semibold tracking-[-0.04em]">
                NAVIDAD
              </span>

              <span className="text-[#C8A45D]">
                ✦
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-6 text-[#F6F0E5]/45">
              Detalles que hacen especial la Navidad.
              Adornos, personajes y regalos para celebrar
              con intención.
            </p>

            <a
              href="mailto:hola@navidad.com"
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                text-[#E7D8B8]
                transition-colors
                hover:text-white
              "
            >
              <Mail size={16} />

              hola@navidad.com
            </a>
          </div>

          {/* LINKS */}

          {links.map((group) => (
            <div key={group.title}>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                {group.title}
              </p>

              <div className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="
                      w-fit
                      text-sm
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

        <div className="flex flex-col justify-between gap-6 py-7 sm:flex-row sm:items-center">

          <p className="text-xs text-[#F6F0E5]/30">
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
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/10
                text-[#F6F0E5]/50
                transition-all
                duration-300
                hover:border-[#C8A45D]/40
                hover:text-[#C8A45D]
              "
            >
              <FaInstagram size={16} />
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
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#F6F0E5]/10
                text-[#F6F0E5]/50
                transition-all
                duration-300
                hover:border-[#C8A45D]/40
                hover:text-[#C8A45D]
              "
            >
              <FaFacebookF size={15} />
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
                ml-2
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-[#C8A45D]
                text-[#171714]
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