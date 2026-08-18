import type { Metadata, Viewport } from "next";
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

const SITE_URL = "https://smartlogix.com.co";
const SITE_NAME = "Smart Logix SAS";
const TITLE = "Smart Logix SAS | Agencia de Logística y Comercio Exterior en Barranquilla";
const DESCRIPTION =
  "Smart Logix SAS es una agencia de logística en Barranquilla, Colombia. Gestionamos transporte marítimo, aéreo y terrestre, comercio exterior, almacenamiento y distribución para empresas importadoras, exportadoras y comercializadoras.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "agencia de logística Barranquilla",
    "operador logístico Colombia",
    "comercio exterior Barranquilla",
    "transporte marítimo internacional",
    "transporte aéreo de carga",
    "transporte terrestre de carga Colombia",
    "importaciones y exportaciones Colombia",
    "agencia aduanera Barranquilla",
    "almacenamiento y bodegaje Barranquilla",
    "carga FCL LCL",
    "Smart Logix SAS",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e14",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-carbon" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
