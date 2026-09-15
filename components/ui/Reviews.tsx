"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "María Fernanda",
    location: "Arequipa, Perú",
    image: "/images/reviews/maria.jpg",
    productImage: "/images/adornos2.jpg",
    text: "Los adornos quedaron preciosos. Se nota muchísimo el cuidado en los detalles y la calidad. Mi sala quedó completamente diferente esta Navidad.",
    product: "Decoración navideña",
    date: "Diciembre 2025",
  },
  {
    id: 2,
    name: "Carlos Mendoza",
    location: "Arequipa, Perú",
    image: "/images/reviews/carlos.jpg",
    productImage: "/images/adornos3.jpg",
    text: "Muy buena atención y los productos llegaron en perfecto estado. Los detalles artesanales hacen que todo se vea mucho más especial.",
    product: "Adornos artesanales",
    date: "Diciembre 2025",
  },
  {
    id: 3,
    name: "Lucía Ramírez",
    location: "Lima, Perú",
    image: "/images/reviews/lucia.jpg",
    productImage: "/images/adornos4.jpg",
    text: "Encontré justo lo que buscaba para decorar mi casa. Todo tiene un acabado muy bonito y diferente a lo que normalmente encuentras.",
    product: "Colección Navidad",
    date: "Noviembre 2025",
  },
  {
    id: 4,
    name: "Andrea Salazar",
    location: "Cusco, Perú",
    image: "/images/reviews/andrea.jpg",
    productImage: "/images/adornos2.jpg",
    text: "Los peluches y personajes navideños están hermosos. La presentación también está muy cuidada. Definitivamente volvería a comprar.",
    product: "Peluches navideños",
    date: "Diciembre 2025",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const currentReview = reviews[active];

  const nextReview = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setDirection(-1);
    setActive(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActive((prev) => (prev + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="reseñas"
      className="relative isolate overflow-hidden bg-[#0B211B] px-6 py-20 sm:px-8 lg:px-10 lg:py-24"
    >
      {/* =========================================================
          VIDEO DE FONDO — HD / SIN BLUR
      ========================================================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          object-cover
          object-center
        "
        style={{
          imageRendering: "auto",
        }}
      >
        <source src="/videos/navidad6.mp4" type="video/mp4" />
      </video>

      {/* =========================================================
          CAPA OSCURA MUY LIGERA
          Antes: /80
          Ahora: /25
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#07140F]/25" />

      {/* =========================================================
          GRADIENTE PARA QUE EL TEXTO SEA LEGIBLE
          Sin tapar el video
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-gradient-to-b
          from-[#07140F]/35
          via-[#0B211B]/15
          to-[#07140F]/45
        "
      />

      {/* =========================================================
          GLOW SUTIL
      ========================================================= */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          z-[3]
          h-[400px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-[#C8A45D]/5
          blur-[120px]
        "
      />

      {/* DECORACIÓN */}
      <div className="pointer-events-none absolute right-8 top-8 z-[4] hidden opacity-30 lg:block">
        <Sparkles
          size={70}
          strokeWidth={1}
          className="text-[#C8A45D]"
        />
      </div>

      {/* =========================================================
          CONTENIDO
      ========================================================= */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C8A45D]" />

            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#C8A45D]">
              Experiencias reales
            </span>

            <span className="h-px w-8 bg-[#C8A45D]" />
          </div>

          <h2 className="text-3xl font-medium tracking-[-0.035em] text-[#F6F0E5] sm:text-4xl lg:text-5xl">
            La Navidad también se recuerda por los detalles.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#E1DBCF]">
            Historias de personas que encontraron ese detalle especial
            para hacer su Navidad diferente.
          </p>
        </motion.div>

        {/* =========================================================
            RESEÑA PRINCIPAL
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[#F6F0E5]/15 bg-[#12352B]/80 shadow-2xl backdrop-blur-sm">
            <div className="grid min-h-[390px] grid-cols-1 lg:grid-cols-[40%_60%]">
              {/* =================================================
                  IMAGEN PRODUCTO
              ================================================= */}
              <div className="relative min-h-[280px] overflow-hidden bg-[#081510] lg:min-h-0">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentReview.productImage}
                    src={currentReview.productImage}
                    alt={currentReview.product}
                    initial={{
                      opacity: 0,
                      scale: 1.06,
                      x: direction * 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.03,
                      x: direction * -15,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-[#081510]/80 via-[#081510]/10 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full border border-[#F6F0E5]/15 bg-[#081510]/60 px-3 py-1.5 text-[11px] text-[#F6F0E5] backdrop-blur-md">
                    {currentReview.product}
                  </span>
                </div>

                <div className="absolute left-5 top-5 h-8 w-8 rounded-full border border-[#C8A45D]/30" />
              </div>

              {/* =================================================
                  INFO
              ================================================= */}
              <div className="relative flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <Quote
                  size={80}
                  strokeWidth={0.8}
                  className="pointer-events-none absolute right-5 top-4 text-[#C8A45D]/[0.07]"
                />

                {/* PERFIL */}
                <div className="relative mb-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#C8A45D]/30 bg-[#7A2631]">
                      {currentReview.image ? (
                        <img
                          src={currentReview.image}
                          alt={currentReview.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-sm font-medium text-[#F6F0E5]">
                          {currentReview.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                      )}
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-[#F6F0E5]">
                        {currentReview.name}
                      </h3>

                      <p className="mt-0.5 text-xs text-[#B9B1A2]">
                        {currentReview.location}
                      </p>
                    </div>
                  </div>

                  <div className="hidden items-center gap-1 sm:flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={index}
                        size={14}
                        fill="currentColor"
                        className="text-[#C8A45D]"
                      />
                    ))}
                  </div>
                </div>

                {/* ESTRELLAS MOBILE */}
                <div className="mb-5 flex items-center gap-1 sm:hidden">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={13}
                      fill="currentColor"
                      className="text-[#C8A45D]"
                    />
                  ))}
                </div>

                {/* TEXTO */}
                <div className="flex-1">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentReview.id}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        x: direction * 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{
                        opacity: 0,
                        x: direction * -25,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <p className="max-w-xl text-lg leading-8 tracking-[-0.015em] text-[#F6F0E5] sm:text-xl">
                        “{currentReview.text}”
                      </p>

                      <div className="mt-7 flex flex-col gap-2 border-t border-[#F6F0E5]/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#C8A45D]">
                            {currentReview.product}
                          </p>

                          <p className="mt-1 text-xs text-[#B9B1A2]">
                            {currentReview.date}
                          </p>
                        </div>

                        <span className="w-fit rounded-full border border-[#F6F0E5]/10 px-3 py-1.5 text-[11px] text-[#B9B1A2]">
                          Compra verificada
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* CONTROLES */}
                <div className="mt-7 flex items-center justify-between border-t border-[#F6F0E5]/10 pt-5">
                  <div className="flex items-center gap-1.5">
                    {reviews.map((review, index) => (
                      <button
                        key={review.id}
                        type="button"
                        aria-label={`Ver reseña ${index + 1}`}
                        onClick={() => {
                          setDirection(index > active ? 1 : -1);
                          setActive(index);
                        }}
                        className="group p-1"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            index === active
                              ? "w-7 bg-[#C8A45D]"
                              : "w-1.5 bg-[#F6F0E5]/20 group-hover:bg-[#F6F0E5]/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={previousReview}
                      aria-label="Reseña anterior"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F6F0E5]/10 text-[#F6F0E5] transition-colors hover:border-[#C8A45D]/40 hover:bg-[#F6F0E5]/5"
                    >
                      <ArrowLeft size={15} />
                    </motion.button>

                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={nextReview}
                      aria-label="Siguiente reseña"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F6F0E5]/10 text-[#F6F0E5] transition-colors hover:border-[#C8A45D]/40 hover:bg-[#F6F0E5]/5"
                    >
                      <ArrowRight size={15} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================
            MINI RESEÑAS
        ========================================================= */}
        <div className="mx-auto mt-5 grid max-w-4xl grid-cols-3 gap-3">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.button
              key={review.id}
              type="button"
              onClick={() => {
                setDirection(index > active ? 1 : -1);
                setActive(index);
              }}
              whileHover={{ y: -2 }}
              className={`rounded-xl border p-3 text-left transition-all ${
                active === index
                  ? "border-[#C8A45D]/30 bg-[#12352B]/90"
                  : "border-[#F6F0E5]/5 bg-[#12352B]/60 hover:border-[#F6F0E5]/10"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 shrink-0 overflow-hidden rounded-full bg-[#7A2631]">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <p className="truncate text-xs font-medium text-[#F6F0E5]">
                    {review.name}
                  </p>

                  <div className="mt-0.5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={8}
                        fill="currentColor"
                        className="text-[#C8A45D]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}