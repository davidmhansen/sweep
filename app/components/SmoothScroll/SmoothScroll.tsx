"use client";

import React, { ReactNode } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return <ReactLenis root>{children}</ReactLenis>;
}
