"use client";

import { motion } from "motion/react";
import {
  HandHeart,
  Sparkles,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: HandHeart,
    title: "Hecho con intención",
    description:
      "Cada pieza busca aportar personalidad y calidez a tu espacio.",
  },
  {
    icon: Sparkles,
    title: "Detalles especiales",
    description:
      "Seleccionamos personajes, adornos y objetos que se sienten diferentes.",
  },
  {
    icon: Gift,
    title: "Pensado para regalar",
    description:
      "Detalles que funcionan igual de bien para decorar como para sorprender.",
  },
];

export default function Craftsmanship() {
  return (
    <section
      id="nosotros"
      className="bg-[#12352B] px-6 py-28 text-[#F6F0E5] sm:px-8 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
              Nuestra forma de celebrar
            </p>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              La Navidad
              <br />
              está en los
              <br />
              <span className="text-[#E7D8B8]">
                detalles.
              </span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-[#F6F0E5]/55 sm:text-base">
              Creemos que decorar no consiste solamente en
              llenar un espacio. Consiste en crear una atmósfera,
              contar una historia y hacer que alguien quiera
              quedarse un poco más.
            </p>
          </motion.div>

          {/* RIGHT */}

          <div className="divide-y divide-[#F6F0E5]/10">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.7,
                  }}
                  className="
                    group
                    grid
                    gap-6
                    py-8
                    sm:grid-cols-[70px_1fr]
                  "
                >
                  <div className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8A45D]/25
                    bg-[#F6F0E5]/[0.04]
                    text-[#C8A45D]
                    transition-transform
                    duration-300
                    group-hover:rotate-6
                  ">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.025em]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#F6F0E5]/50">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}