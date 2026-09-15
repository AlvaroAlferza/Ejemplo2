"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function EditorialBanner() {
  return (
    <section className="px-6 py-8 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="
          relative
          mx-auto
          min-h-[520px]
          max-w-7xl
          overflow-hidden
          rounded-[2.5rem]
          bg-[#7A2631]
          text-[#F6F0E5]
        "
      >
        {/* GLOW */}

        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-[#C8A45D]/20 blur-[120px]" />

        <div className="absolute -bottom-40 left-1/3 h-[450px] w-[450px] rounded-full bg-[#12352B]/40 blur-[130px]" />

        {/* DECORACIÓN */}

        <div className="absolute right-[10%] top-[15%] text-[#C8A45D]/40">
          <Sparkles size={35} />
        </div>

        <div className="absolute bottom-[18%] right-[25%] text-[#E7D8B8]/30">
          <Sparkles size={22} />
        </div>

        <div className="absolute -right-20 bottom-[-120px] h-[380px] w-[380px] rounded-full border border-[#E7D8B8]/15" />

        <div className="absolute right-[-20px] top-[-80px] h-[280px] w-[280px] rounded-full border border-[#C8A45D]/20" />

        {/* CONTENT */}

        <div className="relative flex min-h-[520px] max-w-3xl flex-col justify-center px-8 py-16 sm:px-14 lg:px-20">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#E7D8B8]">
            Para regalar
          </p>

          <h2 className="text-5xl font-medium leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Hecho para
            <br />
            <span className="text-[#E7D8B8]">
              regalar.
            </span>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-7 text-[#F6F0E5]/65 sm:text-lg">
            Porque algunos regalos no se envuelven solamente.
            Se convierten en recuerdos.
          </p>

          <div className="mt-10">
            <motion.a
              href="#productos"
              whileHover={{
                scale: 1.03,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#F6F0E5]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#7A2631]
              "
            >
              Descubrir regalos

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}