"use client";

import { useEffect, useState } from "react";
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
      className="
        bg-[#F6F0E5]
        px-6
        pb-20
        pt-4
        sm:px-8
        lg:px-10
        lg:pb-24
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#7A2631]">
            Favoritos
          </p>

          <h2 className="text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
            Selección de{" "}
            <span className="text-[#12352B]">
              Navidad.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-md text-[13px] leading-5 text-[#171714]/45">
            Una selección de piezas para decorar y regalar.
          </p>

          <motion.a
            href="#todos-los-productos"
            whileHover={{ x: 4 }}
            className="
              mt-5
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-medium
              text-[#12352B]
            "
          >
            Ver todo
            <ArrowRight size={14} />
          </motion.a>
        </motion.div>

        {/* PRODUCTS */}
        <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[number];
  index: number;
}) {
  const images =
    product.images &&
    product.images.length > 0
      ? product.images
      : [product.image];

  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  /* =========================================================
     CAMBIO AUTOMÁTICO DE IMÁGENES
  ========================================================= */

  useEffect(() => {
    if (!isHovering || images.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setCurrentImage((previous) => {
        if (previous >= images.length - 1) {
          return 0;
        }

        return previous + 1;
      });
    }, 500);

    return () => {
      window.clearInterval(interval);
    };
  }, [isHovering, images.length]);

  /* =========================================================
     MOUSE ENTER
  ========================================================= */

  const handleMouseEnter = () => {
    setIsHovering(true);

    if (images.length > 1) {
      setCurrentImage(1);
    }
  };

  /* =========================================================
     MOUSE LEAVE
  ========================================================= */

  const handleMouseLeave = () => {
    setIsHovering(false);
    setCurrentImage(0);
  };

  return (
    <motion.article
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
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >

      {/* =====================================================
          IMAGE CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          aspect-[0.92]
          overflow-hidden
          rounded-[1.5rem]
          bg-[#E7D8B8]/35
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        {/* ===================================================
            IMÁGENES
        =================================================== */}

        {images.map((image, imageIndex) => (
          <motion.img
            key={`${image}-${imageIndex}`}
            src={image}
            alt={`${product.name} vista ${imageIndex + 1}`}
            loading={
              imageIndex === 0
                ? "eager"
                : "lazy"
            }
            initial={false}
            animate={{
              opacity:
                currentImage === imageIndex
                  ? 1
                  : 0,

              scale:
                currentImage === imageIndex
                  ? 1
                  : 1.03,
            }}
            transition={{
              opacity: {
                duration: 0.25,
                ease: "easeOut",
              },

              scale: {
                duration: 0.45,
                ease: "easeOut",
              },
            }}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        ))}

        {/* ===================================================
            GRADIENT INFERIOR
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-[#081510]/40
            via-transparent
            to-transparent
          "
        />

        {/* ===================================================
            CATEGORY
        =================================================== */}

        <div
          className="
            absolute
            left-4
            top-4
            z-20
            rounded-full
            bg-[#F6F0E5]/90
            px-2.5
            py-1
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.15em]
            text-[#12352B]
            backdrop-blur-md
          "
        >
          {product.category}
        </div>

        {/* ===================================================
            FAVORITE
        =================================================== */}

        <motion.button
          type="button"
          aria-label={`Añadir ${product.name} a favoritos`}
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.94,
          }}
          className="
            absolute
            right-4
            top-4
            z-20
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#F6F0E5]/90
            text-[#171714]
            backdrop-blur-md
            transition-colors
            duration-300
            hover:bg-[#F6F0E5]
            hover:text-[#7A2631]
          "
        >
          <Heart
            size={15}
            strokeWidth={1.7}
          />
        </motion.button>

        {/* ===================================================
            INDICADORES DE IMAGEN
        =================================================== */}

        {images.length > 1 && (
          <div
            className="
              pointer-events-none
              absolute
              bottom-4
              left-1/2
              z-20
              flex
              -translate-x-1/2
              items-center
              gap-1.5
              rounded-full
              bg-[#081510]/50
              px-2.5
              py-1.5
              opacity-0
              backdrop-blur-md
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          >
            {images.map((_, imageIndex) => (
              <motion.span
                key={imageIndex}
                animate={{
                  width:
                    currentImage === imageIndex
                      ? 14
                      : 4,

                  opacity:
                    currentImage === imageIndex
                      ? 1
                      : 0.45,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  block
                  h-1
                  rounded-full
                  bg-[#F6F0E5]
                "
              />
            ))}
          </div>
        )}

        {/* ===================================================
            QUICK ADD
        =================================================== */}

        <motion.button
          type="button"
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
            absolute
            bottom-4
            left-4
            right-4
            z-20
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-[#12352B]
            py-3
            text-xs
            font-medium
            text-[#F6F0E5]
            opacity-0
            shadow-lg
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ShoppingBag size={14} />

          Añadir al carrito
        </motion.button>
      </div>

      {/* =====================================================
          PRODUCT INFO
      ===================================================== */}

      <div
        className="
          mt-4
          flex
          items-start
          justify-between
          gap-4
        "
      >
        <div>

          <h3
            className="
              text-base
              font-medium
              tracking-[-0.025em]
            "
          >
            {product.name}
          </h3>

          <p
            className="
              mt-1
              max-w-[230px]
              text-[12px]
              leading-5
              text-[#171714]/45
            "
          >
            {product.description}
          </p>

        </div>

        <span
          className="
            shrink-0
            text-xs
            font-semibold
            text-[#7A2631]
          "
        >
          S/ {product.price}
        </span>

      </div>
    </motion.article>
  );
}