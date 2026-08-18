import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Smart Logix SAS | Logística Inteligente, Éxito sin Fronteras",
    short_name: "Smart Logix",
    description:
      "Agencia de logística y comercio exterior en Barranquilla, Colombia. Transporte marítimo, aéreo, terrestre y soluciones de almacenamiento.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0e14",
    theme_color: "#0b0e14",
    lang: "es",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
