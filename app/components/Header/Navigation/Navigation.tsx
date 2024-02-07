"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import styles from "./styles.module.scss";
import Body from "./Body/Body";
import Image from "./Image/Image";

const links = [
  {
    title: "About",
    href: "/about",
    src: "stage.jpg",
  },
  {
    title: "Service",
    href: "/service",
    src: "our-works-cta.jpg",
  },
  {
    title: "Projects",
    href: "/projects",
    src: "homepage-header.jpg",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "homepage-hollistic-approach.jpg",
  },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
        </div>
        <Image
          src={links[selectedLink.index].src}
          selectedLink={selectedLink}
        />
      </div>
    </motion.div>
  );
}
