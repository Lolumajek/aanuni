import Image from "next/image";
import { clsx } from "clsx";

/**
 * AANUNI wordmark.
 *
 * IMPORTANT — asset provenance: no vector master has been supplied yet.
 * These are raster PNGs derived (background removed, cropped, and
 * mechanically recolored by hue/chroma — never redrawn or retraced) from a
 * reference logo sheet. They are placeholders until a true SVG master
 * ships to /public/brand/aanuni-logo.svg — see docs/missing-assets.md.
 * Swap the `src` values below once the real vector files arrive; the
 * component API should not need to change.
 */
const LOGO_ASSETS = {
  primary: { src: "/brand/aanuni-logo.png", alt: "aanuni" },
  reversed: { src: "/brand/aanuni-logo-reversed.png", alt: "aanuni" },
  mono: { src: "/brand/aanuni-logo-mono.png", alt: "aanuni" },
} as const;

const ASPECT_RATIO = 900 / 213;

export type LogoVariant = keyof typeof LOGO_ASSETS;

export interface LogoProps {
  variant?: LogoVariant;
  /** Rendered height in pixels; width is derived from the fixed aspect ratio. */
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({
  variant = "primary",
  height = 28,
  className,
  priority,
}: LogoProps) {
  const asset = LOGO_ASSETS[variant];
  const width = Math.round(height * ASPECT_RATIO);

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={width}
      height={height}
      priority={priority}
      className={clsx("h-auto w-auto", className)}
    />
  );
}
