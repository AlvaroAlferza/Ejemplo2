import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Navidad | Adornos, regalos y decoración",
  description:
    "Descubre adornos navideños, peluches, elfos, Papá Noel y detalles especiales para llenar tu hogar de magia esta Navidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}