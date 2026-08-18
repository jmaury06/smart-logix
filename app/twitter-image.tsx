import { ImageResponse } from "next/og";
import { OgImageContent, ogImageSize } from "@/lib/og-image";

export const alt = "Smart Logix SAS | Logística Inteligente, Éxito sin Fronteras";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
