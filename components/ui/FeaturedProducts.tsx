"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.filter(
    (product) => product.featured
  );

  return (
    <section
      id="productos"
      className="bg-[#F6F0E5] px-6 pb-28 sm:px-8 lg:px-10 lg:pb-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}

        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#7A2631]">
              Favoritos
            </p>

            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
              Selección de Navidad
            </h2>
          </div>

          <motion.a
            href="#todos-los-productos"
            whileHover={{ x: 4 }}
            className="hidden items-center gap-2 text-sm font-medium text-[#12352B] sm:flex"
          >
            Ver todo
            <ArrowRight size={16} />
          </motion.a>
        </div>

        {/* PRODUCTS */}

        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <motion.article
              key={product.id}
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
                delay: index * 0.1,
                duration: 0.7,
              }}
              className="group"
            >
              {/* IMAGE */}

              <div className="relative aspect-[0.9] overflow-hidden rounded-[1.75rem] bg-[#E7D8B8]/35">
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#E7D8B8]
                    via-[#D7C69F]
                    to-[#12352B]
                    opacity-70
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* decorative object */}

                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F6F0E5]/50 bg-[#12352B]/80 shadow-2xl backdrop-blur-sm">
                  <span className="text-5xl text-[#C8A45D]">
                    ✦
                  </span>
                </div>

                {/* CATEGORY */}

                <div className="absolute left-5 top-5 rounded-full bg-[#F6F0E5]/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#12352B] backdrop-blur-md">
                  {product.category}
                </div>

                {/* FAVORITE */}

                <button
                  type="button"
                  aria-label={`Añadir ${product.name} a favoritos`}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#F6F0E5]/85
                    text-[#171714]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-[#F6F0E5]
                    hover:text-[#7A2631]
                  "
                >
                  <Heart size={17} strokeWidth={1.7} />
                </button>

                {/* QUICK ADD */}

                <motion.button
                  type="button"
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#12352B]
                    py-3.5
                    text-sm
                    font-medium
                    text-[#F6F0E5]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                >
                  <ShoppingBag size={16} />
                  Añadir al carrito
                </motion.button>
              </div>

              {/* INFO */}

              <div className="mt-5 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-lg font-medium tracking-[-0.025em]">
                    {product.name}
                  </h3>

                  <p className="mt-1 max-w-[260px] text-sm leading-5 text-[#171714]/50">
                    {product.description}
                  </p>
                </div>

                <span className="shrink-0 text-sm font-semibold text-[#7A2631]">
                  S/ {product.price}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}