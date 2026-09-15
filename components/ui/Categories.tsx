"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

const categoryImages = [
  "/images/noel.png",
  "/images/duende.png",
  "/images/adornito.png",
  "/images/oso.png",
];

export default function Categories() {
  return (
    <section
      id="colecciones"
      className="
        relative
        overflow-hidden
        px-6
        py-24
        text-[#171714]
        sm:px-8
        lg:px-10
        lg:py-28
      "
      style={{
        backgroundImage: "url('/images/fondo2.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* CAPA SUTIL SOBRE EL FONDO */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#F6F0E5]/20
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2631]">
            Colecciones
          </p>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Encuentra algo{" "}
            <span className="text-[#12352B]">
              especial.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-[#171714]/55 sm:text-base">
            Una selección pensada para decorar, regalar
            y crear esos pequeños momentos que hacen
            diferente la Navidad.
          </p>
        </motion.div>

        {/* ================= GRID ================= */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <motion.a
              key={category.id}
              href="#productos"
              initial={{
                opacity: 0,
                y: 35,
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
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -7,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                bg-[#12352B]
                shadow-[0_18px_50px_rgba(18,53,43,0.18)]
              "
            >
              {/* ================= IMAGEN ================= */}

              <div className="relative aspect-[0.82] overflow-hidden">

                <motion.img
                  src={categoryImages[index]}
                  alt={category.name}
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* OSCURECIMIENTO GENERAL */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-b
                    from-[#081510]/10
                    via-transparent
                    to-[#081510]/90
                  "
                />

                {/* COLOR SUTIL AL HACER HOVER */}

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#12352B]/10
                    via-transparent
                    to-[#7A2631]/25
                  "
                />

                {/* ================= NUMERO ================= */}

                <span
                  className="
                    absolute
                    left-6
                    top-6
                    text-xs
                    font-medium
                    tracking-[0.2em]
                    text-[#F6F0E5]/70
                  "
                >
                  0{index + 1}
                </span>

                {/* ================= CONTENIDO ================= */}

                <div className="absolute inset-x-0 bottom-0 p-6">

                  <div
                    className="
                      mb-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E7D8B8]/35
                      bg-[#081510]/35
                      text-[#E7D8B8]
                      backdrop-blur-md
                      transition-all
                      duration-300
                      group-hover:rotate-45
                      group-hover:bg-[#C8A45D]
                      group-hover:text-[#081510]
                    "
                  >
                    <ArrowUpRight size={17} />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-medium
                      tracking-[-0.04em]
                      text-[#F6F0E5]
                    "
                  >
                    {category.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-[220px]
                      text-sm
                      leading-5
                      text-[#F6F0E5]/70
                    "
                  >
                    {category.description}
                  </p>
                </div>

                {/* BRILLO INFERIOR */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    h-1/2
                    bg-gradient-to-t
                    from-[#081510]/75
                    to-transparent
                  "
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}