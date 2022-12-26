'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText } from '../components/CustomTexts';
import { fadeIn, staggerContainer } from '../utils/motion';
import styles from '../styles';

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText
        title="Desenvolvimento de aplicativos para uso global"
        textStyles="text-center w-full text-secondary-white font-bold  text-3xl"
      />
      <TitleText title={<span>Destaque-se</span>} textStyles="text-center " />
      <motion.div
        variants={fadeIn('up', 'tween', 0, 1)}
        className="relative flex w-full h-[550px]"
      ></motion.div>
    </motion.div>
  </section>
);

export default World;
