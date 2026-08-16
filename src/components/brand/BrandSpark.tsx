import Image from "next/image";
import { clsx } from "clsx";

export interface BrandSparkProps {
  size?: number;
  className?: string;
}

/** The signature orange energy mark taken directly from the AANUNI wordmark. */
export function BrandSpark({ size = 18, className }: BrandSparkProps) {
  return (
    <Image
      src="/brand/aanuni-spark.png"
      alt=""
      aria-hidden="true"
      width={size}
      height={Math.round(size * (42 / 38))}
      style={{ width: `${size}px`, height: "auto" }}
      className={clsx("brand-spark shrink-0 object-contain", className)}
    />
  );
}
