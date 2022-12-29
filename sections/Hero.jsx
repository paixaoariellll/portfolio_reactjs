'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <>
    <section
      id="Hero"
      className={`${styles.yPaddings} relative sm:pr-6 sm:pl-6 pointer-events-none`}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto h-screen flex flex-col justify-between`}
      >
        <div className="flex justify-between items-center flex-col relative z-10">
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            Ariel Paixão
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Curriculum Vitae</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full z-50 md:pl-12 md:-mt-[20px] -mt-[12px]"
        >
          <h3 className="text-xl text-white">Tela de fundo interativa</h3>
        </motion.div>

        <div></div>
        <div />
      </motion.div>
    </section>
  </>
);

export default Hero;
