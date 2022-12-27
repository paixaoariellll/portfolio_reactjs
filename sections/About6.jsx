'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About6 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-5"
    >
      <TypingText
        title="Organizado"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex flex-col glassmorphism rounded-xl p-4 w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            Herança maternal
          </span>
          <span className="!text-gray-300 text-justify">
            "Para os irmãos mais velhos era atribuído o trabalho braçal, para o
            mais novo restava planejar e organizar. Poderia mostrar uma foto de
            meu quarda roupas para mostrar-lhe o nível de minha organização, mas
            basta olhar este portfólio, tudo precisa e esteticamente alinhado."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About6;
