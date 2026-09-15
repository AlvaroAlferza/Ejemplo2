"use client";

import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  {
    label: "Inicio",
    href: "#",
  },
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

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
          relative
          mx-auto
          max-w-7xl
          rounded-[2rem]
          border
          border-white/10
          bg-[#12352B]/95
          text-white
          shadow-[0_20px_60px_rgba(0,0,0,0.22)]
          backdrop-blur-xl
        "
      >

        {/* =====================================================
            NAVBAR PRINCIPAL
        ===================================================== */}

        <div
          className="
            flex
            h-[76px]
            items-center
            justify-between
            px-5
            sm:px-7
            lg:px-8
          "
        >

          {/* =================================================
              LOGO
          ================================================= */}

          <a
            href="#"
            aria-label="Inicio"
            className="
              group
              flex
              shrink-0
              items-center
              gap-2.5
            "
          >
            <span
              className="
                text-xl
                font-semibold
                tracking-[-0.05em]
                sm:text-[22px]
              "
            >
              NAVIDAD
            </span>

            <motion.span
              animate={{
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-base
                text-[#C8A45D]
              "
            >
              ✦
            </motion.span>
          </a>

          {/* =================================================
              NAVEGACIÓN DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-1 lg:flex">

            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  rounded-full
                  px-4
                  py-2.5
                  text-[14px]
                  font-medium
                  text-white/65
                  transition-all
                  duration-300
                  hover:bg-white/[0.07]
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}

          </div>

          {/* =================================================
              ACCIONES DESKTOP
          ================================================= */}

          <div className="hidden items-center gap-2 lg:flex">

            {/* BUSCAR */}

            <motion.button
              type="button"
              aria-label="Buscar productos"
              whileTap={{
                scale: 0.94,
              }}
              onClick={() =>
                setSearchOpen((value) => !value)
              }
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                transition-all
                duration-300
                ${
                  searchOpen
                    ? "bg-white/10 text-white"
                    : "text-white/65 hover:bg-white/[0.07] hover:text-white"
                }
              `}
            >
              {searchOpen ? (
                <X
                  size={18}
                  strokeWidth={1.8}
                />
              ) : (
                <Search
                  size={18}
                  strokeWidth={1.8}
                />
              )}
            </motion.button>

            {/* CARRITO */}

            <motion.button
              type="button"
              aria-label="Abrir carrito"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
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
                shadow-[0_5px_20px_rgba(200,164,93,0.15)]
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
                  h-[17px]
                  min-w-[17px]
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
            </motion.button>

            {/* CONTACTO */}

            <motion.a
              href="#contacto"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                ml-1
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[#F6F0E5]
                px-5
                py-2.5
                text-[13px]
                font-semibold
                text-[#12352B]
                shadow-[0_8px_25px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                hover:bg-white
              "
            >
              Contáctanos

              <ArrowUpRight
                size={15}
                strokeWidth={2}
              />
            </motion.a>

          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setOpen((value) => !value)
            }
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.06]
              transition-colors
              hover:bg-white/[0.1]
              lg:hidden
            "
            aria-label={
              open
                ? "Cerrar menú"
                : "Abrir menú"
            }
          >
            {open ? (
              <X
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.8}
              />
            )}
          </button>

        </div>

        {/* =====================================================
            BUSCADOR DESKTOP
        ===================================================== */}

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                overflow-hidden
                border-t
                border-white/10
              "
            >
              <div className="px-5 pb-5 pt-4 sm:px-7 lg:px-8">

                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#081510]/35
                    px-4
                  "
                >

                  <Search
                    size={18}
                    className="shrink-0 text-white/40"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Buscar productos, adornos, regalos..."
                    autoFocus
                    className="
                      h-12
                      w-full
                      bg-transparent
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-white/35
                    "
                  />

                  {search && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearch("")
                      }
                      className="
                        text-white/35
                        transition-colors
                        hover:text-white
                      "
                      aria-label="Limpiar búsqueda"
                    >
                      <X size={16} />
                    </button>
                  )}

                </div>

                {search && (
                  <p
                    className="
                      mt-3
                      px-1
                      text-xs
                      text-white/40
                    "
                  >
                    Buscando:{" "}
                    <span className="text-[#E7D8B8]">
                      {search}
                    </span>
                  </p>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                overflow-hidden
                border-t
                border-white/10
                lg:hidden
              "
            >

              <div className="p-3">

                {/* LINKS */}

                <div className="flex flex-col">

                  {navigation.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() =>
                        setOpen(false)
                      }
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.04,
                      }}
                      className="
                        rounded-2xl
                        px-4
                        py-3.5
                        text-sm
                        font-medium
                        text-white/70
                        transition-colors
                        hover:bg-white/[0.06]
                        hover:text-white
                      "
                    >
                      {item.label}
                    </motion.a>
                  ))}

                </div>

                {/* MOBILE ACTIONS */}

                <div
                  className="
                    mt-2
                    grid
                    grid-cols-2
                    gap-2
                    border-t
                    border-white/10
                    pt-3
                  "
                >

                  {/* BUSCAR */}

                  <button
                    type="button"
                    onClick={() => {
                      setSearchOpen(
                        (value) => !value
                      );
                      setOpen(false);
                    }}
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      px-4
                      py-3.5
                      text-sm
                      font-medium
                      text-white/70
                      transition-colors
                      hover:bg-white/[0.08]
                      hover:text-white
                    "
                  >
                    <Search size={16} />

                    Buscar
                  </button>

                  {/* CARRITO */}

                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-2xl
                      bg-[#C8A45D]
                      px-4
                      py-3.5
                      text-sm
                      font-semibold
                      text-[#171714]
                    "
                  >
                    <ShoppingBag size={16} />

                    Carrito

                    <span
                      className="
                        flex
                        h-5
                        min-w-5
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

                {/* CONTACTO */}

                <motion.a
                  href="#contacto"
                  onClick={() =>
                    setOpen(false)
                  }
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-2xl
                    bg-[#F6F0E5]
                    px-4
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#12352B]
                  "
                >
                  Contáctanos

                  <ArrowUpRight size={16} />
                </motion.a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.nav>
    </header>
  );
}