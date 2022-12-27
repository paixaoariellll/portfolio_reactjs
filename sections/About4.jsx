'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About4 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-5"
    >
      <TypingText
        title="Disciplinado"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('left', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex flex-col glassmorphism rounded-xl p-4 w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            Herança proloquial
          </span>
          <span className="!text-gray-300 text-justify">
            "Sou filho de militar "raiz",na infância tinha hora pra comer,
            dormir, ler, brincar e estudar.
            <br />
            Dentre tantos benefícios de ser disciplinado, chamo atenção à auto
            confiança, alguém que sabe exatamente como é, sabe como lidar com
            circunstâncias que pra outros são incômodas.
            <br />
            Sei cumprir regras, prazos e quando dou minha palavra, por herança
            de princípios, eu cumpro."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About4;
