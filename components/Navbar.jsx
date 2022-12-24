'use client';

import { motion } from 'framer-motion';
import { TypingText } from './CustomTexts';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className={`${styles.xPaddings} py-8 relative `}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex items-center justify-between gap-8`}
    >
      <TypingText
        title="Seja bem-vindo!"
        textStyles="text-center text-secondary-white font-bold p-10 text-4xl"
      />
    </div>
  </motion.nav>
);

export default Navbar;
