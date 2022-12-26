'use client';

import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from 'react-icons/ai';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <>
    <section id="Hero" className={`${styles.yPaddings} sm:pr-6 sm:pl-6 `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto h-screen flex flex-col`}
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
          className="relative w-full md:pl-12 md:-mt-[20px] -mt-[12px]"
        >
          <div
            className={`${styles.xPaddings} my-10 w-full bg-gradient-to-l from-[#6f0098] to-[#c1bfc3] shadow-sm shadow-blue-500 rounded-full h-2 mb-20`}
          />
        </motion.div>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div
            className={`${styles.flexCenter} gap-x-4 relative z-10 text-white text-4xl`}
          >
            <motion.li variants={textVariant(2.0)}>
              <AiFillGithub title="GitHub" />
            </motion.li>
            <motion.li variants={textVariant(2.2)}>
              <AiFillLinkedin title="LinkedIn" />
            </motion.li>
            <motion.li variants={textVariant(2.4)}>
              <AiFillHtml5 title="Portfólio Html_5" />
            </motion.li>
          </div>
        </motion.ul>
      </motion.div>
    </section>
  </>
);

export default Hero;
