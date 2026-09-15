"use client";

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Heart,
  LoaderCircle,
  Mail,
  MessageSquare,
  Minus,
  Phone,
  Plus,
  ShoppingBag,
  Trash2,
  User,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { products } from "@/data/products";

type SelectedProduct = {
  id: string;
  quantity: number;
};

type FormDataState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const FORMSPREE_ENDPOINT =
  "https://formspree.io/f/mnpnavpa";

export default function FeaturedProducts() {
  /*
   * =========================================================
   * SOLO 3 FAVORITOS
   * =========================================================
   */

  const featured = products
    .filter((product) => product.featured)
    .slice(0, 3);

  /*
   * =========================================================
   * ESTADOS DE COMPRA
   * =========================================================
   */

  const [selectedProducts, setSelectedProducts] =
    useState<SelectedProduct[]>([]);

  const [selectionOpen, setSelectionOpen] =
    useState(false);

  const [formOpen, setFormOpen] =
    useState(false);

  const [sending, setSending] =
    useState(false);

  const [sent, setSent] =
    useState(false);

  const [error, setError] =
    useState("");

  const [submittedTotal, setSubmittedTotal] =
    useState(0);

  const [formData, setFormData] =
    useState<FormDataState>({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  /*
   * =========================================================
   * CANTIDAD TOTAL
   * =========================================================
   */

  const selectedCount =
    selectedProducts.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  /*
   * =========================================================
   * TOTAL
   * =========================================================
   */

  const selectedTotal =
    selectedProducts.reduce(
      (total, item) => {
        const product =
          products.find(
            (product) =>
              product.id === item.id
          );

        if (!product) {
          return total;
        }

        return (
          total +
          product.price * item.quantity
        );
      },
      0
    );

  /*
   * =========================================================
   * VERIFICAR SI ESTÁ SELECCIONADO
   * =========================================================
   */

  const isSelected = (
    productId: string
  ) => {
    return selectedProducts.some(
      (item) =>
        item.id === productId
    );
  };

  /*
   * =========================================================
   * AÑADIR PRODUCTO
   * =========================================================
   */

  const addProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) => {
        const exists =
          current.find(
            (item) =>
              item.id === productId
          );

        if (exists) {
          return current.map(
            (item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity:
                      item.quantity + 1,
                  }
                : item
          );
        }

        return [
          ...current,
          {
            id: productId,
            quantity: 1,
          },
        ];
      }
    );
  };

  /*
   * =========================================================
   * DISMINUIR PRODUCTO
   * =========================================================
   */

  const decreaseProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) =>
        current
          .map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity:
                    item.quantity - 1,
                }
              : item
          )
          .filter(
            (item) =>
              item.quantity > 0
          )
    );
  };

  /*
   * =========================================================
   * ELIMINAR PRODUCTO
   * =========================================================
   */

  const removeProduct = (
    productId: string
  ) => {
    setSelectedProducts(
      (current) =>
        current.filter(
          (item) =>
            item.id !== productId
        )
    );
  };

  /*
   * =========================================================
   * VACIAR SELECCIÓN
   * =========================================================
   */

  const clearSelection = () => {
    setSelectedProducts([]);
  };

  /*
   * =========================================================
   * ABRIR FORMULARIO
   * =========================================================
   */

  const openForm = () => {
    if (
      selectedProducts.length === 0
    ) {
      return;
    }

    setError("");
    setSent(false);
    setFormOpen(true);
  };

  /*
   * =========================================================
   * CERRAR FORMULARIO
   * =========================================================
   */

  const closeForm = () => {
    if (sending) {
      return;
    }

    setFormOpen(false);
    setError("");
  };

  /*
   * =========================================================
   * ACTUALIZAR FORMULARIO
   * =========================================================
   */

  const updateFormField = (
    field: keyof FormDataState,
    value: string
  ) => {
    setFormData(
      (current) => ({
        ...current,
        [field]: value,
      })
    );
  };

  /*
   * =========================================================
   * CREAR MENSAJE DE PRODUCTOS
   * =========================================================
   */

  const buildProductsMessage =
    () => {
      return selectedProducts
        .map((item, index) => {
          const product =
            products.find(
              (product) =>
                product.id ===
                item.id
            );

          if (!product) {
            return "";
          }

          const subtotal =
            product.price *
            item.quantity;

          return [
            `${index + 1}. ${product.name}`,
            `   Categoría: ${product.category}`,
            `   Cantidad: ${item.quantity}`,
            `   Precio unitario: S/ ${product.price}`,
            `   Subtotal: S/ ${subtotal}`,
          ].join("\n");
        })
        .filter(Boolean)
        .join("\n\n");
    };

  /*
   * =========================================================
   * ENVIAR SOLICITUD
   * =========================================================
   */

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");

    if (!formData.name.trim()) {
      setError(
        "Por favor, ingresa tu nombre."
      );
      return;
    }

    if (!formData.email.trim()) {
      setError(
        "Por favor, ingresa tu correo electrónico."
      );
      return;
    }

    if (!formData.phone.trim()) {
      setError(
        "Por favor, ingresa tu número de contacto."
      );
      return;
    }

    if (
      selectedProducts.length === 0
    ) {
      setError(
        "No hay productos seleccionados."
      );
      return;
    }

    setSending(true);

    try {
      const form =
        new FormData();

      form.append(
        "_subject",
        `Nueva solicitud de productos — ${formData.name}`
      );

      form.append(
        "_replyto",
        formData.email.trim()
      );

      form.append(
        "Nombre",
        formData.name.trim()
      );

      form.append(
        "Correo electrónico",
        formData.email.trim()
      );

      form.append(
        "Teléfono / WhatsApp",
        formData.phone.trim()
      );

      form.append(
        "Productos seleccionados",
        buildProductsMessage()
      );

      form.append(
        "Total referencial",
        `S/ ${selectedTotal}`
      );

      form.append(
        "Cantidad total de productos",
        String(selectedCount)
      );

      form.append(
        "Mensaje adicional",
        formData.message.trim() ||
          "Sin mensaje adicional."
      );

      const response =
        await fetch(
          FORMSPREE_ENDPOINT,
          {
            method: "POST",
            body: form,
            headers: {
              Accept:
                "application/json",
            },
          }
        );

      if (!response.ok) {
        throw new Error(
          "No se pudo enviar la solicitud."
        );
      }

      /*
       * Guardamos el total antes de
       * limpiar la selección.
       */

      setSubmittedTotal(
        selectedTotal
      );

      setSent(true);

      setSelectedProducts([]);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setError(
        "No pudimos enviar tu solicitud. Inténtalo nuevamente."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section
        id="productos"
        className="
          relative
          overflow-hidden
          px-6
          pb-20
          pt-4
          text-[#171714]
          sm:px-8
          lg:px-10
          lg:pb-24
        "
        style={{
          backgroundImage:
            "url('/images/fondo2.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        {/* =====================================================
            CAPA DE FONDO
        ===================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-[#F6F0E5]/25
          "
        />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* ===================================================
              HEADER
          =================================================== */}

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
              mb-10
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
              Favoritos
            </p>

            <h2
              className="
                text-3xl
                font-medium
                leading-tight
                tracking-[-0.045em]
                sm:text-4xl
              "
            >
              Selección de{" "}
              <span className="text-[#12352B]">
                Navidad.
              </span>
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-md
                text-[13px]
                leading-5
                text-[#171714]/45
              "
            >
              Una selección de piezas
              que se han convertido en
              favoritas para decorar y
              regalar.
            </p>

            <motion.a
              href="/catalogo"
              whileHover={{
                x: 4,
              }}
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

          {/* ===================================================
              PRODUCTOS
          =================================================== */}

          <div
            className="
              grid
              gap-x-5
              gap-y-10
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {featured.map(
              (product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  isSelected={isSelected(
                    product.id
                  )}
                  onAdd={() => {
                    addProduct(
                      product.id
                    );

                    setSelectionOpen(
                      true
                    );
                  }}
                />
              )
            )}
          </div>

        </div>
      </section>

      {/* =======================================================
          BARRA FLOTANTE
      ======================================================= */}

      <AnimatePresence>
        {selectedCount > 0 &&
          !selectionOpen &&
          !formOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              className="
                fixed
                bottom-5
                left-1/2
                z-50
                w-[calc(100%-2rem)]
                max-w-xl
                -translate-x-1/2
              "
            >

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  rounded-[1.25rem]
                  border
                  border-[#F6F0E5]/10
                  bg-[#12352B]
                  px-4
                  py-3
                  text-[#F6F0E5]
                  shadow-[0_20px_70px_rgba(8,21,16,0.35)]
                  backdrop-blur-xl
                  sm:px-5
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C8A45D]
                      text-[#171714]
                    "
                  >
                    <ShoppingBag
                      size={16}
                    />
                  </div>

                  <div>

                    <p className="text-xs font-semibold">
                      Mi selección
                    </p>

                    <p
                      className="
                        text-[11px]
                        text-[#F6F0E5]/50
                      "
                    >
                      {selectedCount}{" "}
                      {selectedCount ===
                      1
                        ? "producto"
                        : "productos"}{" "}
                      · S/{" "}
                      {selectedTotal}
                    </p>

                  </div>

                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() =>
                    setSelectionOpen(
                      true
                    )
                  }
                  className="
                    shrink-0
                    rounded-full
                    bg-[#F6F0E5]
                    px-4
                    py-2.5
                    text-xs
                    font-semibold
                    text-[#12352B]
                  "
                >
                  Ver selección
                </motion.button>

              </div>

            </motion.div>
          )}
      </AnimatePresence>

      {/* =======================================================
          OVERLAY SELECCIÓN
      ======================================================= */}

      <AnimatePresence>
        {selectionOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelectionOpen(
                false
              )
            }
            className="
              fixed
              inset-0
              z-[60]
              bg-[#081510]/55
              backdrop-blur-sm
            "
          />
        )}
      </AnimatePresence>

      {/* =======================================================
          DRAWER SELECCIÓN
      ======================================================= */}

      <AnimatePresence>
        {selectionOpen && (
          <motion.aside
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              duration: 0.4,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              fixed
              right-0
              top-0
              z-[70]
              flex
              h-full
              w-full
              max-w-md
              flex-col
              bg-[#F6F0E5]
              shadow-[-20px_0_70px_rgba(8,21,16,0.2)]
            "
          >

            {/* HEADER DRAWER */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#12352B]/10
                px-6
                py-5
              "
            >

              <div>

                <p
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.22em]
                    text-[#7A2631]
                  "
                >
                  Tu selección
                </p>

                <h2
                  className="
                    mt-1
                    text-xl
                    font-medium
                    tracking-[-0.04em]
                    text-[#12352B]
                  "
                >
                  Productos elegidos
                </h2>

              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectionOpen(
                    false
                  )
                }
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#12352B]/10
                  text-[#12352B]
                  transition-colors
                  hover:bg-[#12352B]/5
                "
                aria-label="Cerrar selección"
              >
                <X size={18} />
              </button>

            </div>

            {/* PRODUCTOS SELECCIONADOS */}

            <div
              className="
                flex-1
                overflow-y-auto
                px-6
                py-6
              "
            >

              {selectedProducts.length >
              0 ? (
                <div className="space-y-4">

                  {selectedProducts.map(
                    (item) => {
                      const product =
                        products.find(
                          (product) =>
                            product.id ===
                            item.id
                        );

                      if (!product) {
                        return null;
                      }

                      return (
                        <motion.div
                          layout
                          key={
                            product.id
                          }
                          className="
                            flex
                            gap-4
                            rounded-2xl
                            border
                            border-[#12352B]/10
                            bg-[#F8F3E8]
                            p-3
                          "
                        >

                          <div
                            className="
                              h-20
                              w-20
                              shrink-0
                              overflow-hidden
                              rounded-xl
                              bg-[#E7D8B8]/40
                            "
                          >
                            <img
                              src={
                                product.images?.[0] ??
                                product.image
                              }
                              alt={
                                product.name
                              }
                              className="
                                h-full
                                w-full
                                object-cover
                              "
                            />
                          </div>

                          <div className="min-w-0 flex-1">

                            <div
                              className="
                                flex
                                items-start
                                justify-between
                                gap-2
                              "
                            >

                              <div>

                                <h3
                                  className="
                                    truncate
                                    text-sm
                                    font-medium
                                  "
                                >
                                  {
                                    product.name
                                  }
                                </h3>

                                <p
                                  className="
                                    mt-0.5
                                    text-[10px]
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#7A2631]
                                  "
                                >
                                  {
                                    product.category
                                  }
                                </p>

                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  removeProduct(
                                    product.id
                                  )
                                }
                                className="
                                  text-[#171714]/25
                                  transition-colors
                                  hover:text-[#7A2631]
                                "
                                aria-label={`Eliminar ${product.name}`}
                              >
                                <Trash2
                                  size={15}
                                />
                              </button>

                            </div>

                            <div
                              className="
                                mt-3
                                flex
                                items-center
                                justify-between
                              "
                            >

                              <div
                                className="
                                  flex
                                  items-center
                                  gap-1
                                  rounded-full
                                  border
                                  border-[#12352B]/10
                                  bg-[#F6F0E5]
                                  p-1
                                "
                              >

                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseProduct(
                                      product.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[#12352B]/60
                                    transition-colors
                                    hover:bg-[#12352B]/5
                                  "
                                >
                                  <Minus
                                    size={12}
                                  />
                                </button>

                                <span
                                  className="
                                    w-5
                                    text-center
                                    text-xs
                                    font-medium
                                  "
                                >
                                  {
                                    item.quantity
                                  }
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    addProduct(
                                      product.id
                                    )
                                  }
                                  className="
                                    flex
                                    h-6
                                    w-6
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[#12352B]/60
                                    transition-colors
                                    hover:bg-[#12352B]/5
                                  "
                                >
                                  <Plus
                                    size={12}
                                  />
                                </button>

                              </div>

                              <span
                                className="
                                  text-sm
                                  font-semibold
                                  text-[#7A2631]
                                "
                              >
                                S/{" "}
                                {
                                  product.price *
                                  item.quantity
                                }
                              </span>

                            </div>

                          </div>

                        </motion.div>
                      );
                    }
                  )}

                </div>
              ) : (
                <div
                  className="
                    flex
                    h-full
                    min-h-[350px]
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#12352B]/5
                      text-[#12352B]/40
                    "
                  >
                    <ShoppingBag
                      size={22}
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-medium">
                    Tu selección está vacía
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-xs
                      text-sm
                      leading-5
                      text-[#171714]/40
                    "
                  >
                    Añade alguno de nuestros
                    favoritos para comenzar
                    tu solicitud.
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectionOpen(
                        false
                      )
                    }
                    className="
                      mt-6
                      rounded-full
                      bg-[#12352B]
                      px-5
                      py-3
                      text-xs
                      font-medium
                      text-[#F6F0E5]
                    "
                  >
                    Volver
                  </button>

                </div>
              )}

            </div>

            {/* TOTAL */}

            {selectedProducts.length >
              0 && (
              <div
                className="
                  border-t
                  border-[#12352B]/10
                  bg-[#F8F3E8]
                  px-6
                  py-5
                "
              >

                <div
                  className="
                    mb-4
                    flex
                    items-end
                    justify-between
                  "
                >

                  <div>

                    <p
                      className="
                        text-xs
                        text-[#171714]/40
                      "
                    >
                      Total referencial
                    </p>

                    <p
                      className="
                        mt-1
                        text-2xl
                        font-medium
                        tracking-[-0.04em]
                        text-[#12352B]
                      "
                    >
                      S/{" "}
                      {
                        selectedTotal
                      }
                    </p>

                  </div>

                  <button
                    type="button"
                    onClick={
                      clearSelection
                    }
                    className="
                      text-xs
                      text-[#171714]/35
                      transition-colors
                      hover:text-[#7A2631]
                    "
                  >
                    Vaciar selección
                  </button>

                </div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={openForm}
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-[#7A2631]
                    px-6
                    py-3.5
                    text-sm
                    font-medium
                    text-[#F6F0E5]
                    shadow-[0_10px_30px_rgba(122,38,49,0.18)]
                  "
                >
                  Solicitar productos
                  <ArrowRight
                    size={16}
                  />
                </motion.button>

              </div>
            )}

          </motion.aside>
        )}
      </AnimatePresence>

      {/* =======================================================
          FORMULARIO
      ======================================================= */}

      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              bg-[#081510]/70
              p-4
              backdrop-blur-md
            "
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                relative
                flex
                max-h-[90vh]
                w-full
                max-w-2xl
                flex-col
                overflow-hidden
                rounded-[2rem]
                bg-[#F6F0E5]
                shadow-[0_30px_100px_rgba(0,0,0,0.3)]
              "
            >

              {/* =================================================
                  ÉXITO
              ================================================= */}

              {sent ? (
                <div
                  className="
                    flex
                    min-h-[520px]
                    flex-col
                    items-center
                    justify-center
                    px-8
                    py-12
                    text-center
                  "
                >

                  <motion.div
                    initial={{
                      scale: 0,
                      opacity: 0,
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 18,
                    }}
                    className="
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-full
                      bg-[#12352B]
                      text-[#C8A45D]
                      shadow-[0_15px_50px_rgba(18,53,43,0.2)]
                    "
                  >
                    <Check
                      size={36}
                      strokeWidth={2}
                    />
                  </motion.div>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="
                      mt-7
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-[#7A2631]
                    "
                  >
                    Solicitud enviada
                  </motion.p>

                  <motion.h2
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.22,
                    }}
                    className="
                      mt-3
                      max-w-md
                      text-3xl
                      font-medium
                      leading-tight
                      tracking-[-0.05em]
                      text-[#12352B]
                    "
                  >
                    ¡Recibimos tu solicitud!
                  </motion.h2>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="
                      mt-4
                      max-w-md
                      text-sm
                      leading-6
                      text-[#171714]/50
                    "
                  >
                    Hemos recibido
                    correctamente tu
                    selección de productos
                    y tus datos de contacto.
                  </motion.p>

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.38,
                    }}
                    className="
                      mt-8
                      rounded-2xl
                      border
                      border-[#12352B]/10
                      bg-[#F8F3E8]
                      px-6
                      py-4
                    "
                  >

                    <p
                      className="
                        text-xs
                        text-[#171714]/40
                      "
                    >
                      Total de tu solicitud
                    </p>

                    <p
                      className="
                        mt-1
                        text-xl
                        font-semibold
                        text-[#7A2631]
                      "
                    >
                      S/{" "}
                      {
                        submittedTotal
                      }
                    </p>

                  </motion.div>

                  <motion.button
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.46,
                    }}
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setFormOpen(
                        false
                      );
                      setSelectionOpen(
                        false
                      );
                    }}
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-[#12352B]
                      px-6
                      py-3.5
                      text-sm
                      font-medium
                      text-[#F6F0E5]
                      transition-transform
                      hover:scale-[1.02]
                    "
                  >
                    Volver al catálogo

                    <ArrowRight
                      size={16}
                    />
                  </motion.button>

                </div>
              ) : (
                <>
                  {/* =================================================
                      HEADER FORMULARIO
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      border-b
                      border-[#12352B]/10
                      px-6
                      py-5
                      sm:px-8
                    "
                  >

                    <div>

                      <p
                        className="
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.22em]
                          text-[#7A2631]
                        "
                      >
                        Solicitud
                      </p>

                      <h2
                        className="
                          mt-1
                          text-xl
                          font-medium
                          tracking-[-0.04em]
                          text-[#12352B]
                        "
                      >
                        Completa tus datos
                      </h2>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-[#171714]/40
                        "
                      >
                        Te contactaremos para
                        confirmar tu solicitud.
                      </p>

                    </div>

                    <button
                      type="button"
                      onClick={
                        closeForm
                      }
                      disabled={
                        sending
                      }
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#12352B]/10
                        text-[#12352B]
                        transition-colors
                        hover:bg-[#12352B]/5
                        disabled:cursor-not-allowed
                        disabled:opacity-40
                      "
                      aria-label="Cerrar formulario"
                    >
                      <X size={18} />
                    </button>

                  </div>

                  {/* =================================================
                      FORM
                  ================================================= */}

                  <form
                    onSubmit={
                      handleSubmit
                    }
                    className="overflow-y-auto"
                  >

                    <div
                      className="
                        grid
                        gap-8
                        p-6
                        sm:p-8
                        lg:grid-cols-[1fr_0.85fr]
                      "
                    >

                      {/* ================================
                          DATOS CLIENTE
                      ================================= */}

                      <div>

                        <div className="space-y-4">

                          {/* NOMBRE */}

                          <div>

                            <label
                              htmlFor="featured-name"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Nombre completo
                            </label>

                            <div className="relative">

                              <User
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="featured-name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                value={
                                  formData.name
                                }
                                onChange={(
                                  event
                                ) =>
                                  updateFormField(
                                    "name",
                                    event
                                      .target
                                      .value
                                  )
                                }
                                placeholder="Tu nombre"
                                disabled={
                                  sending
                                }
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>

                          </div>

                          {/* CORREO */}

                          <div>

                            <label
                              htmlFor="featured-email"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Correo electrónico
                            </label>

                            <div className="relative">

                              <Mail
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="featured-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={
                                  formData.email
                                }
                                onChange={(
                                  event
                                ) =>
                                  updateFormField(
                                    "email",
                                    event
                                      .target
                                      .value
                                  )
                                }
                                placeholder="tu@email.com"
                                disabled={
                                  sending
                                }
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>

                          </div>

                          {/* TELEFONO */}

                          <div>

                            <label
                              htmlFor="featured-phone"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Número / WhatsApp
                            </label>

                            <div className="relative">

                              <Phone
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-1/2
                                  -translate-y-1/2
                                  text-[#12352B]/30
                                "
                              />

                              <input
                                id="featured-phone"
                                name="phone"
                                type="tel"
                                autoComplete="tel"
                                value={
                                  formData.phone
                                }
                                onChange={(
                                  event
                                ) =>
                                  updateFormField(
                                    "phone",
                                    event
                                      .target
                                      .value
                                  )
                                }
                                placeholder="Tu número de contacto"
                                disabled={
                                  sending
                                }
                                className="
                                  h-12
                                  w-full
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  pl-11
                                  pr-4
                                  text-sm
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>

                          </div>

                          {/* MENSAJE */}

                          <div>

                            <label
                              htmlFor="featured-message"
                              className="
                                mb-2
                                block
                                text-xs
                                font-medium
                                text-[#12352B]
                              "
                            >
                              Mensaje adicional

                              <span
                                className="
                                  ml-1
                                  font-normal
                                  text-[#171714]/30
                                "
                              >
                                (opcional)
                              </span>
                            </label>

                            <div className="relative">

                              <MessageSquare
                                size={16}
                                className="
                                  pointer-events-none
                                  absolute
                                  left-4
                                  top-4
                                  text-[#12352B]/30
                                "
                              />

                              <textarea
                                id="featured-message"
                                name="message"
                                value={
                                  formData.message
                                }
                                onChange={(
                                  event
                                ) =>
                                  updateFormField(
                                    "message",
                                    event
                                      .target
                                      .value
                                  )
                                }
                                placeholder="¿Quieres dejarnos alguna indicación?"
                                rows={4}
                                disabled={
                                  sending
                                }
                                className="
                                  w-full
                                  resize-none
                                  rounded-xl
                                  border
                                  border-[#12352B]/10
                                  bg-[#F8F3E8]
                                  py-3.5
                                  pl-11
                                  pr-4
                                  text-sm
                                  leading-5
                                  text-[#171714]
                                  outline-none
                                  transition-all
                                  placeholder:text-[#171714]/25
                                  focus:border-[#12352B]/30
                                  focus:ring-2
                                  focus:ring-[#12352B]/5
                                  disabled:opacity-60
                                "
                              />

                            </div>

                          </div>

                        </div>

                        {/* ERROR */}

                        <AnimatePresence>
                          {error && (
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: 5,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              exit={{
                                opacity: 0,
                                y: -5,
                              }}
                              className="
                                mt-4
                                rounded-xl
                                border
                                border-[#7A2631]/15
                                bg-[#7A2631]/5
                                px-4
                                py-3
                                text-xs
                                leading-5
                                text-[#7A2631]
                              "
                            >
                              {error}
                            </motion.div>
                          )}
                        </AnimatePresence>

                      </div>

                      {/* ================================
                          RESUMEN
                      ================================= */}

                      <div>

                        <div
                          className="
                            rounded-2xl
                            border
                            border-[#12352B]/10
                            bg-[#F8F3E8]
                            p-5
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              justify-between
                            "
                          >

                            <div>

                              <p
                                className="
                                  text-[10px]
                                  font-semibold
                                  uppercase
                                  tracking-[0.18em]
                                  text-[#7A2631]
                                "
                              >
                                Resumen
                              </p>

                              <h3
                                className="
                                  mt-1
                                  text-base
                                  font-medium
                                  text-[#12352B]
                                "
                              >
                                Tu selección
                              </h3>

                            </div>

                            <span
                              className="
                                rounded-full
                                bg-[#12352B]
                                px-2.5
                                py-1
                                text-[10px]
                                font-semibold
                                text-[#F6F0E5]
                              "
                            >
                              {
                                selectedCount
                              }
                            </span>

                          </div>

                          <div
                            className="
                              my-5
                              h-px
                              bg-[#12352B]/10
                            "
                          />

                          <div className="space-y-3">

                            {selectedProducts.map(
                              (item) => {
                                const product =
                                  products.find(
                                    (
                                      product
                                    ) =>
                                      product.id ===
                                      item.id
                                  );

                                if (
                                  !product
                                ) {
                                  return null;
                                }

                                return (
                                  <div
                                    key={
                                      product.id
                                    }
                                    className="
                                      flex
                                      items-start
                                      justify-between
                                      gap-3
                                    "
                                  >

                                    <div className="min-w-0">

                                      <p
                                        className="
                                          truncate
                                          text-xs
                                          font-medium
                                          text-[#171714]
                                        "
                                      >
                                        {
                                          product.name
                                        }
                                      </p>

                                      <p
                                        className="
                                          mt-0.5
                                          text-[10px]
                                          text-[#171714]/40
                                        "
                                      >
                                        {
                                          item.quantity
                                        }{" "}
                                        × S/{" "}
                                        {
                                          product.price
                                        }
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
                                      S/{" "}
                                      {
                                        product.price *
                                        item.quantity
                                      }
                                    </span>

                                  </div>
                                );
                              }
                            )}

                          </div>

                          <div
                            className="
                              my-5
                              h-px
                              bg-[#12352B]/10
                            "
                          />

                          <div
                            className="
                              flex
                              items-end
                              justify-between
                            "
                          >

                            <div>

                              <p
                                className="
                                  text-[10px]
                                  text-[#171714]/40
                                "
                              >
                                Total referencial
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-xl
                                  font-semibold
                                  tracking-[-0.03em]
                                  text-[#12352B]
                                "
                              >
                                S/{" "}
                                {
                                  selectedTotal
                                }
                              </p>

                            </div>

                            <span
                              className="
                                text-[10px]
                                text-[#171714]/30
                              "
                            >
                              {selectedCount}{" "}
                              unidades
                            </span>

                          </div>

                        </div>

                        <p
                          className="
                            mt-4
                            text-[10px]
                            leading-4
                            text-[#171714]/35
                          "
                        >
                          Los precios mostrados
                          son referenciales. La
                          disponibilidad y los
                          detalles finales se
                          confirmarán posteriormente.
                        </p>

                      </div>

                    </div>

                    {/* BOTÓN ENVIAR */}

                    <div
                      className="
                        border-t
                        border-[#12352B]/10
                        bg-[#F8F3E8]
                        px-6
                        py-4
                        sm:px-8
                      "
                    >

                      <motion.button
                        type="submit"
                        disabled={
                          sending
                        }
                        whileHover={
                          !sending
                            ? {
                                scale: 1.01,
                              }
                            : undefined
                        }
                        whileTap={
                          !sending
                            ? {
                                scale: 0.98,
                              }
                            : undefined
                        }
                        className="
                          flex
                          w-full
                          items-center
                          justify-center
                          gap-2.5
                          rounded-full
                          bg-[#7A2631]
                          px-6
                          py-3.5
                          text-sm
                          font-semibold
                          text-[#F6F0E5]
                          shadow-[0_10px_30px_rgba(122,38,49,0.18)]
                          transition-all
                          disabled:cursor-not-allowed
                          disabled:opacity-60
                        "
                      >

                        {sending ? (
                          <>
                            <LoaderCircle
                              size={17}
                              className="animate-spin"
                            />

                            Enviando solicitud...
                          </>
                        ) : (
                          <>
                            Enviar solicitud

                            <ArrowRight
                              size={16}
                            />
                          </>
                        )}

                      </motion.button>

                      <p
                        className="
                          mt-3
                          text-center
                          text-[10px]
                          text-[#171714]/30
                        "
                      >
                        Tus datos se utilizarán
                        únicamente para gestionar
                        esta solicitud.
                      </p>

                    </div>

                  </form>
                </>
              )}

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({
  product,
  index,
  isSelected,
  onAdd,
}: {
  product: (typeof products)[number];
  index: number;
  isSelected: boolean;
  onAdd: () => void;
}) {
  const images = useMemo(
    () =>
      product.images &&
      product.images.length > 0
        ? product.images
        : [product.image],
    [product.images, product.image]
  );

  const [currentImage, setCurrentImage] =
    useState(0);

  const [isHovering, setIsHovering] =
    useState(false);

  /*
   * =========================================================
   * CAMBIO AUTOMÁTICO DE IMAGEN
   * =========================================================
   */

  useEffect(() => {
    if (
      !isHovering ||
      images.length <= 1
    ) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setCurrentImage(
          (previous) => {
            if (
              previous >=
              images.length - 1
            ) {
              return 0;
            }

            return previous + 1;
          }
        );
      }, 500);

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, [
    isHovering,
    images.length,
  ]);

  const handleMouseEnter = () => {
    setIsHovering(true);

    if (images.length > 1) {
      setCurrentImage(1);
    }
  };

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
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      className="group"
    >

      {/* =====================================================
          IMAGEN
      ===================================================== */}

      <div
        className="
          relative
          aspect-[0.92]
          overflow-hidden
          rounded-[1.5rem]
          bg-[#E7D8B8]/35
        "
        onMouseEnter={
          handleMouseEnter
        }
        onMouseLeave={
          handleMouseLeave
        }
      >

        {/* IMÁGENES */}

        {images.map(
          (image, imageIndex) => (
            <motion.img
              key={`${image}-${imageIndex}`}
              src={image}
              alt={`${product.name} vista ${
                imageIndex + 1
              }`}
              loading={
                imageIndex === 0
                  ? "eager"
                  : "lazy"
              }
              initial={false}
              animate={{
                opacity:
                  currentImage ===
                  imageIndex
                    ? 1
                    : 0,

                scale:
                  currentImage ===
                  imageIndex
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
          )
        )}

        {/* GRADIENTE */}

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

        {/* CATEGORÍA */}

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

        {/* FAVORITO */}

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

        {/* INDICADORES */}

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
            {images.map(
              (_, imageIndex) => (
                <motion.span
                  key={imageIndex}
                  animate={{
                    width:
                      currentImage ===
                      imageIndex
                        ? 14
                        : 4,

                    opacity:
                      currentImage ===
                      imageIndex
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
              )
            )}
          </div>
        )}

        {/* =================================================
            AÑADIR
        ================================================= */}

        <motion.button
          type="button"
          onClick={onAdd}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className={`
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
            py-3
            text-xs
            font-medium
            shadow-lg
            transition-all
            duration-300
            opacity-100
            lg:opacity-0
            lg:group-hover:opacity-100
            ${
              isSelected
                ? "bg-[#C8A45D] text-[#171714]"
                : "bg-[#12352B] text-[#F6F0E5]"
            }
          `}
        >

          {isSelected ? (
            <>
              <Plus size={14} />
              Añadir otro
            </>
          ) : (
            <>
              <ShoppingBag
                size={14}
              />
              Añadir al carrito
            </>
          )}

        </motion.button>

      </div>

      {/* =====================================================
          INFORMACIÓN
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