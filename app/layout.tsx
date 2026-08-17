import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Logix SAS | Logística Inteligente, Éxito sin Fronteras",
  description:
    "Smart Logix SAS ayuda a empresas importadoras, exportadoras y comercializadoras a gestionar su cadena logística de forma ágil, segura y eficiente. Transporte marítimo, aéreo, terrestre y soluciones de almacenamiento.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-carbon">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
