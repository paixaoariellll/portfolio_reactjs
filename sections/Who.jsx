'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';

const Who = () => (
  <section className={`${styles.paddings} relative z-30`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="Quem Sou eu?"
        textStyles="text-center !font-bold p-10 text-6xl"
      />
    </motion.div>
  </section>
);

export default Who;
