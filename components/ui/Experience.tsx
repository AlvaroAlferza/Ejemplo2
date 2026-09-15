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
    <section
      className="
        relative
        isolate
        overflow-hidden
        px-6
        pt-32
        pb-20
        text-[#171714]
        sm:px-8
        lg:px-10
        lg:pt-36
        lg:pb-24
      "
      style={{
        backgroundImage: "url('/images/fondo2.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        backgroundPosition: "center top",
        backgroundColor: "#F6F0E5",
      }}
    >
      {/* ================= CAPA SUTIL ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-[#F6F0E5]/10
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= TITULO ================= */}

        <motion.div
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
            duration: 0.7,
          }}
          className="
            mx-auto
            mb-12
            max-w-2xl
            text-center
          "
        >
          <p
            className="
              mb-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#7A2631]
            "
          >
            Así funciona
          </p>

          <h2
            className="
              text-3xl
              font-medium
              leading-[0.98]
              tracking-[-0.05em]
              text-[#171714]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Comprar Navidad
            <br />
            debería ser{" "}
            <span className="text-[#12352B]">
              simple.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              text-sm
              leading-6
              text-[#171714]/50
            "
          >
            Un proceso sencillo para que solo tengas que
            preocuparte por disfrutar la Navidad.
          </p>
        </motion.div>

        {/* ================= PASOS ================= */}

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
                  amount: 0.15,
                }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                  scale: 1.01,
                }}
                className="
                  group
                  relative
                  min-h-[230px]
                  overflow-hidden
                  rounded-[1.5rem]
                  bg-[#12352B]
                  p-[2px]
                  shadow-[0_18px_55px_rgba(18,53,43,0.15)]
                "
              >
                {/* ================================================= */}
                {/* GLOW EXTERIOR */}
                {/* ================================================= */}

                <motion.div
                  animate={{
                    opacity: [0.35, 0.85, 0.35],
                    scale: [0.98, 1.02, 0.98],
                  }}
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.45,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -inset-3
                    rounded-[1.7rem]
                    bg-[#FFD21F]
                    opacity-60
                    blur-[18px]
                  "
                />

                {/* ================================================= */}
                {/* BORDE LED BASE */}
                {/* ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[1.5rem]
                    bg-[linear-gradient(90deg,#6F5310,#C99718,#FFD21F,#C99718,#6F5310)]
                    opacity-70
                  "
                />

                {/* ================================================= */}
                {/* LUZ QUE RECORRE TODO EL BORDE */}
                {/* ================================================= */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                    rounded-[1.5rem]
                  "
                >
                  {/* ESTELA GRANDE */}

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.65,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[190%]
                      w-[70%]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_285deg,#8C6900_305deg,#FFC400_320deg,#FFF4A3_335deg,#FFFFFF_343deg,#FFD21F_350deg,transparent_360deg)]
                      blur-[7px]
                    "
                  />

                  {/* NÚCLEO DE LUZ */}

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.65,
                    }}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      h-[190%]
                      w-[68%]
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D99F00_315deg,#FFD21F_330deg,#FFFBD1_340deg,#FFFFFF_347deg,#FFD21F_353deg,transparent_360deg)]
                    "
                  />
                </div>

                {/* ================================================= */}
                {/* INTERIOR */}
                {/* ================================================= */}

                <div
                  className="
                    relative
                    z-10
                    h-full
                    min-h-[226px]
                    overflow-hidden
                    rounded-[1.38rem]
                    bg-[#12352B]
                    p-6
                  "
                >
                  {/* GLOW INTERIOR */}

                  <motion.div
                    animate={{
                      opacity: [0.03, 0.12, 0.03],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-48
                      w-48
                      rounded-full
                      bg-[#FFD21F]
                      blur-[70px]
                    "
                  />

                  {/* ================================================= */}
                  {/* NUMERO */}
                  {/* ================================================= */}

                  <span
                    className="
                      absolute
                      right-6
                      top-6
                      text-[10px]
                      font-semibold
                      tracking-[0.2em]
                      text-[#F6F0E5]/30
                    "
                  >
                    {step.number}
                  </span>

                  {/* ================================================= */}
                  {/* ICONO */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 rgba(255,210,31,0)",
                        "0 0 18px rgba(255,210,31,0.25)",
                        "0 0 0 rgba(255,210,31,0)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                    className="
                      relative
                      mb-7
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#FFD21F]/40
                      bg-[#081510]/50
                      text-[#FFD21F]
                    "
                  >
                    <Icon
                      size={17}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                  {/* ================================================= */}
                  {/* TITULO */}
                  {/* ================================================= */}

                  <h3
                    className="
                      relative
                      text-xl
                      font-medium
                      tracking-[-0.035em]
                      text-[#F8F3E8]
                    "
                  >
                    {step.title}
                  </h3>

                  {/* ================================================= */}
                  {/* DESCRIPCION */}
                  {/* ================================================= */}

                  <p
                    className="
                      relative
                      mt-3
                      max-w-sm
                      text-[13px]
                      leading-5
                      text-[#F6F0E5]/55
                    "
                  >
                    {step.description}
                  </p>

                  {/* ================================================= */}
                  {/* DESTELLO INFERIOR */}
                  {/* ================================================= */}

                  <motion.div
                    animate={{
                      x: ["-120%", "420%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.9,
                    }}
                    className="
                      pointer-events-none
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-16
                      bg-[#FFFBD1]
                      shadow-[0_0_8px_#FFFBD1,0_0_18px_#FFD21F,0_0_35px_#FFB300]
                    "
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}