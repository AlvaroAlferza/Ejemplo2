"use client";

import { motion } from "motion/react";
import {
  PackageCheck,
  HeartHandshake,
  Truck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Elige tus favoritos",
    description:
      "Explora nuestras colecciones y encuentra las piezas que más te gusten.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Preparamos tu pedido",
    description:
      "Cuidamos cada detalle para que tu compra llegue lista para disfrutar.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Recibe la magia",
    description:
      "Tu pedido llega a casa para comenzar a transformar tus espacios.",
  },
];

export default function Experience() {
  return (
    <section className="bg-[#F6F0E5] px-6 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2631]">
            Así funciona
          </p>

          <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Comprar Navidad
            <br />
            debería ser
            <span className="text-[#12352B]">
              {" "}simple.
            </span>
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  relative
                  min-h-[300px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[#171714]/10
                  bg-[#F6F0E5]
                  p-7
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:bg-white
                "
              >
                <span className="absolute right-7 top-7 text-xs font-semibold tracking-[0.2em] text-[#171714]/20">
                  {step.number}
                </span>

                <div className="flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#12352B] text-[#C8A45D]">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-2xl font-medium tracking-[-0.04em]">
                      {step.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-[#171714]/50">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}