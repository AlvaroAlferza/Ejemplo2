"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-[#F6F0E5] px-6 pb-8 pt-4 sm:px-8 lg:px-10">
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
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          rounded-[2.5rem]
          bg-[#171714]
          px-8
          py-20
          text-center
          text-[#F6F0E5]
          sm:px-12
          lg:py-28
        "
      >
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#12352B] opacity-60 blur-[100px]" />

        <div className="relative">
          <div className="mx-auto mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-[#C8A45D]/30 text-[#C8A45D]">
            <Sparkles size={18} />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8A45D]">
            Esta Navidad
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-7xl">
            Haz que tu espacio
            <br />
            se sienta especial.
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-sm leading-6 text-[#F6F0E5]/50 sm:text-base">
            Descubre personajes, adornos y pequeños detalles
            pensados para celebrar a tu manera.
          </p>

          <motion.a
            href="#productos"
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              mt-9
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#C8A45D]
              px-7
              py-4
              text-sm
              font-semibold
              text-[#171714]
            "
          >
            Explorar colección

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}