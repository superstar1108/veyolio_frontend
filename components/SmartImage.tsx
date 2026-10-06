"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// next/image with a graceful fallback: if the photo fails to load, show a soft gradient instead.
export default function SmartImage({ className = "", alt, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div className="absolute inset-0 bg-gradient-to-br from-paper-warm to-accent-light" aria-hidden />;
  }
  return <Image {...props} alt={alt} className={className} onError={() => setFailed(true)} />;
}