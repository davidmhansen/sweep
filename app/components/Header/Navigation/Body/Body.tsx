import { motion } from "framer-motion";
import Link from "next/link";
import { blur, translate } from "../../anim";
import styles from "./style.module.scss";
import { constants } from "buffer";
import { useContext } from "react";
import { headerContext } from "../../Header";

interface BodyProps {
  links: { title: string; href: string }[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (value: { isActive: boolean; index: number }) => void;
  // setIsActive: (value: { isActive: boolean }) => void;
}

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
}: // setIsActive,
BodyProps) {
  const { setIsActive } = useContext(headerContext);

  const getChars = (word: string) => {
    let chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              onClick={() => {
                setIsActive(false);
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
