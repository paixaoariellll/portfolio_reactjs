'use client';

import { motion } from 'framer-motion';
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
      <motion.p
        variants={fadeIn('right', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex font-normal sm:text-xl text-lg  text-center text-secoundary-white`}
      >
        <span className="w-2/4 font-extrabold text-white">Sou detalhista</span>
        <span className="w-3/4 text-gray-400 text-justify">
          <span className="flex text-white mb-2">Educação primária</span>
          "Por ser o mais novo de 7 filhos (10 anos de diferença entre mim e o
          mais velho), não conseguiria meu espaço se tentasse ser o maior, nem o
          mais forte e muito menos o mais inteligente.
          <br />
          Sendo assim, procurei ser mais atento que os demais e contribuia com
          atenção aos detalhes que passavam despercebidos por vários olhares
          antes de chegar em mim."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About3;
