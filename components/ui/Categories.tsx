"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section
      id="colecciones"
      className="relative overflow-hidden bg-[#F6F0E5] px-6 py-24 text-[#171714] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2631]">
              Colecciones
            </p>

            <h2 className="max-w-2xl text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Encuentra algo
              <br />
              <span className="text-[#12352B]">
                especial.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="max-w-md text-sm leading-6 text-[#171714]/55 sm:text-base"
          >
            Una selección pensada para decorar, regalar
            y crear esos pequeños momentos que hacen
            diferente la Navidad.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-[2rem] bg-[#12352B]"
            >
              {/* IMAGEN / PLACEHOLDER */}

              <div className="relative aspect-[0.82] overflow-hidden">
                <div
                  className="
                    absolute
                    inset-0
                    scale-100
                    bg-gradient-to-br
                    from-[#1D4A3B]
                    via-[#12352B]
                    to-[#7A2631]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* patrón decorativo */}

                <div className="absolute inset-0 opacity-20">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#E7D8B8]" />
                  <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full border border-[#C8A45D]" />
                </div>

                {/* número */}

                <span className="absolute left-6 top-6 text-xs font-medium tracking-[0.2em] text-[#F6F0E5]/45">
                  0{index + 1}
                </span>

                {/* contenido */}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#E7D8B8]/25 bg-[#F6F0E5]/10 text-[#E7D8B8] backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </div>

                  <h3 className="text-2xl font-medium tracking-[-0.04em] text-[#F6F0E5]">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-[220px] text-sm leading-5 text-[#F6F0E5]/55">
                    {category.description}
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}