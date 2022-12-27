'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About2 = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-5"
    >
      <TypingText
        title="Dedicado"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('left', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex glassmorphism rounded-xl p-4 flex-col w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            Só levanto quando termino!
          </span>
          <span className="!text-gray-300 text-justify">
            "Percebi que se eu quisesse mudar algo em minha vida, teria que
            fazer o que ninguém estava disposto. Por não ter a mesma facilidade
            que os demais, procurei suprir minha pouquidade com muito esforço e
            dedicação.
            <br />
            Quando cheguei ao nível de aprendizado dos demais colegas, percebi
            que por ter tido muito mais dedicação, adiquiri mais base para saber
            o que ninguém mais entendia."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About2;
