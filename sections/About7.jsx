'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About7 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-5"
    >
      <TypingText
        title="Trabalho em equipe"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('left', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex flex-col bg-[rgb(26,26,26)] rounded-xl p-4 w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            Trabalho em equipe
          </span>
          <span className="!text-gray-300 text-justify">
            "Sei liderar e sei ser liderado.
            <br />
            Entendo a função do papel que cada indivíduo tem num todo.
            <br />É importante para o coletivo quando o indivíduo entende suas
            limitações para que consiga desempenhar seu papel na sociedade e
            fazer fluir a engrenagem da vida.
            <br />
            Já para o indivíduo, é importante que ele supere suas limitações."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About7;
