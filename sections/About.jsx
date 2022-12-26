'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      id="About"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="py-5"
    >
      <TypingText
        title="Auto didata"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex flex-col bg-[rgb(26,26,26)] rounded-xl p-4 w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            A escola da vida
          </span>
          <span className="!text-gray-300 text-justify">
            "Não me adaptei ao ensino regular, por isso estudei sozinho para
            saber o conteúdo que os professores passavam em sala de aula.
            <br />
            Observei que eu era um pouco diferente das demais crianças da minha
            socialização secundária.
            <br />
            Por vim de uma família humilde, nunca tive tempo pra desperdiçá-lo
            com futilidades.
            <br />
            Busquei conhecimento através de livros desde pequeno e quando tive
            acesso à internet ampliei meus conhecimentos por fazer buscas em
            fontes mais modernas."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
