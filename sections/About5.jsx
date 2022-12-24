'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About5 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex flex-col font-normal sm:text-xl text-lg text-center text-secoundary-white`}
      >
        <span className="font-extrabold text-3xl text-white">
          Sou subordinado
        </span>
        <span className="text-center w-full text-white mb-2">
          Educação primária
        </span>
        <span className="w-full text-gray-400">
          "Por ter tido muita experiência em resolução de conflitos como o filho
          mais novo, percebi que o diálogo real é um dos caminhos para
          resolvê-los e comecei superar e ensinar como minha mente soluciona
          problemas lógicos que aconteciam em meu âmbito familiar.
          <br />
          Após anos de diálogo e soluções lógicas, é característico de minha
          persona motivar e imbuido a mim está o ato de diferenciar o momento de
          obedecer do momento de dialogar.
          <br />
          Sou respeitoso e ouço ao máximo de pontos de vista antes de tomar uma
          decisão para o bem comum."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About5;
