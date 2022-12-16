'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="Quem Sou eu?"
        textStyles="text-center text-white font-bold p-3 text-3xl"
      />

      <motion.p
        variants={fadeIn('up', 'tween', 2.2, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal sm:text-2xl text-xl text-center text-secoundary-white`}
      >
        <span className="w-2/4 font-extrabold text-white">Sou auto Didata</span>
        <span className="w-3/4 !text-gray-400 text-justify">
          <span className="flex text-white mb-2">A Escola da vida</span>
          "Não me adaptei ao ensino regular, por isso estudei sozinho para saber
          o conteúdo que os professores passavam em sala de aula. Observei que
          eu era um pouco diferente das demais crianças da minha socialização
          secundária. Por vim de uma família humilde, nunca tive tempo pra
          desperdiçá-lo com futilidades. Busquei conhecimento através de livros
          desde pequeno e quando tive acesso à internet, rapidamente, ampliei
          meus conhecimentos por fazer buscas em fontes mais modernas."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
