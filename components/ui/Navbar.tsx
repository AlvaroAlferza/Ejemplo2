"use client";

import { motion } from "motion/react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Colecciones",
    href: "#colecciones",
  },
  {
    label: "Productos",
    href: "#productos",
  },
  {
    label: "Nosotros",
    href: "#nosotros",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.nav
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mx-auto
          flex
          h-[70px]
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          border-white/10
          bg-[#12352B]/90
          px-5
          text-white
          shadow-[0_20px_60px_rgba(0,0,0,0.20)]
          backdrop-blur-xl
          sm:px-7
        "
      >
        {/* LOGO */}

        <a
          href="#"
          className="group flex items-center"
          aria-label="Inicio"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-[-0.04em]">
              NAVIDAD
            </span>

            <span className="text-[#C8A45D]">
              ✦
            </span>
          </div>
        </a>

        {/* NAVEGACIÓN */}

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                rounded-full
                px-4
                py-2.5
                text-[14px]
                text-white/65
                transition-all
                duration-300
                hover:bg-white/[0.06]
                hover:text-white
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ACCIONES */}

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Buscar"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              text-white/65
              transition-all
              duration-300
              hover:bg-white/[0.07]
              hover:text-white
            "
          >
            <Search size={18} strokeWidth={1.7} />
          </button>

          <button
            type="button"
            aria-label="Carrito"
            className="
              relative
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-[#C8A45D]
              text-[#171714]
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <ShoppingBag
              size={17}
              strokeWidth={1.8}
            />

            <span
              className="
                absolute
                -right-1
                -top-1
                flex
                h-4
                min-w-4
                items-center
                justify-center
                rounded-full
                bg-[#7A2631]
                px-1
                text-[9px]
                font-bold
                text-white
              "
            >
              0
            </span>
          </button>
        </div>

        {/* MOBILE */}

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            md:hidden
          "
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? (
            <X size={18} />
          ) : (
            <Menu size={18} />
          )}
        </button>

        {/* MOBILE MENU */}

        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="
              absolute
              left-0
              right-0
              top-[78px]
              rounded-[28px]
              border
              border-white/10
              bg-[#12352B]/95
              p-2
              shadow-2xl
              backdrop-blur-2xl
              md:hidden
            "
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="
                  block
                  rounded-2xl
                  px-5
                  py-4
                  text-sm
                  text-white/70
                  transition-colors
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              className="
                mt-1
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#C8A45D]
                px-5
                py-4
                text-sm
                font-semibold
                text-[#171714]
              "
            >
              <ShoppingBag size={16} />
              Carrito
            </button>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}