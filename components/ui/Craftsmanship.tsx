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
    description: "Piezas con personalidad y calidez.",
  },
  {
    icon: Sparkles,
    title: "Detalles especiales",
    description: "Adornos que hacen diferente tu Navidad.",
  },
  {
    icon: Gift,
    title: "Pensado para regalar",
    description: "Detalles para decorar o sorprender.",
  },
];

export default function Craftsmanship() {
  return (
    <section
      id="nosotros"
      className="
        relative
        overflow-hidden
        bg-[#12352B]
        px-6
        py-20
        text-[#F6F0E5]
        sm:px-8
        lg:px-10
        lg:py-24
      "
    >
      {/* GLOW */}

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
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#C8A45D]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= TITULO ================= */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
            Nuestra forma de celebrar
          </p>

          <h2 className="text-3xl font-medium leading-[0.97] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
            La Navidad está en los{" "}
            <span className="text-[#E7D8B8]">
              detalles.
            </span>
          </h2>
        </motion.div>

        {/* ================= CARACTERISTICAS ================= */}

        <div className="mx-auto max-w-4xl divide-y divide-[#F6F0E5]/10">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  delay: index * 0.12,
                  duration: 0.65,
                }}
                whileHover={{
                  x: 5,
                }}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-5
                  py-5
                  sm:gap-7
                "
              >
                {/* ICONO */}

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 8,
                  }}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C8A45D]/30
                    bg-[#F6F0E5]/[0.04]
                    text-[#C8A45D]
                    transition-colors
                    duration-300
                    group-hover:border-[#C8A45D]/70
                    group-hover:bg-[#C8A45D]/10
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* TEXTO */}

                <div className="flex-1">
                  <h3 className="text-base font-medium tracking-[-0.02em] sm:text-lg">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[12px] leading-5 text-[#F6F0E5]/45 sm:text-[13px]">
                    {feature.description}
                  </p>
                </div>

                {/* NUMERO */}

                <span className="hidden text-[10px] font-medium tracking-[0.2em] text-[#F6F0E5]/20 sm:block">
                  0{index + 1}
                </span>

                {/* LINEA */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.15 + 0.3,
                    duration: 0.7,
                  }}
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-16
                    origin-left
                    bg-[#C8A45D]/50
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}