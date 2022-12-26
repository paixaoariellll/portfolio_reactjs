'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About3 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="Detalhista"
        textStyles="text-2xl w-full text-center font-extrabold"
      />
      <motion.p
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings}`}
      >
        <span className="mt-2 flex flex-col bg-[rgb(26,26,26)] rounded-xl p-4 w-full font-normal sm:text-xl text-lg text-center">
          <span className="text-xl mb-4 text-center w-full font-extrabold text-gray-400">
            Educação primária
          </span>
          <span className="!text-gray-300 text-justify">
            "Por ser o mais novo de 7 filhos (10 anos de diferença entre mim e o
            mais velho), não conseguiria meu espaço se tentasse ser o maior, nem
            o mais forte e muito menos o mais inteligente.
            <br />
            Sendo assim, procurei ser mais atento que os demais e contribuia com
            atenção aos detalhes que passavam despercebidos por vários olhares
            antes de chegar em mim."
          </span>
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About3;
