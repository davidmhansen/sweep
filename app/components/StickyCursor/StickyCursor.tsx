"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorSize = 15;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothSettings = {
    stiffness: 300,
    damping: 20,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothSettings),
    y: useSpring(mouse.y, smoothSettings),
  };

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="sticky-cursor"
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
    ></motion.div>
  );
}
