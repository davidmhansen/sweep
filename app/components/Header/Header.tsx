"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

import Link from "next/link";
import Nav from "./Navigation/Navigation";

import { motion, AnimatePresence } from "framer-motion";
import { opacity } from "./anim";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <nav className="navigation">
      <div className="navigation__wrapper">
        <span className="navigation__logo">
          <Link href="/">sweeppeople</Link>
        </span>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className="el"
        >
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>

          <div className="label">
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>

            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </nav>
  );
}
