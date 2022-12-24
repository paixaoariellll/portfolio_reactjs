'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About4 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('left', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal sm:text-xl text-lg  text-center text-secoundary-white`}
      >
        <span className="w-2/4 font-extrabold text-white">
          Sou disciplinado
        </span>
        <span className="w-3/4 text-gray-400 text-justify">
          <span className="flex text-white mb-2">Herança proloquial</span>
          "Sou filho de militar "raiz",na infância tinha hora pra comer, dormir,
          ler, brincar e estudar.
          <br />
          Dentre tantos benefícios de ser disciplinado, chamo atenção à auto
          confiança, alguém que sabe exatamente como é, sabe como lidar com
          circunstâncias que pra outros são incômodas.
          <br />
          Sei cumprir regras, prazos e quando dou minha palavra, por herança de
          princípios, eu cumpro."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About4;
