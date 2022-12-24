'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About6 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal sm:text-xl text-lg  text-center text-secoundary-white`}
      >
        <span className="w-2/4 font-extrabold text-white">Sou organizado</span>
        <span className="w-3/4 text-gray-400 text-justify">
          <span className="flex text-white mb-2">Herança maternal</span>
          "Para os irmãos mais velhos era atribuído o trabalho braçal, para o
          mais novo restava planejar e organizar. Poderia mostrar uma foto de
          meu quarda roupas para mostrar-lhe o nível de minha organização, mas
          basta olhar este portfólio, tudo precisa e esteticamente alinhado."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About6;
