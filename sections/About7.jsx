'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About7 = () => (
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
          Trabalho em equipe
        </span>
        <span className="w-3/4 text-gray-400 text-justify">
          <span className="flex text-white mb-2">Herança primária</span>
          "Sei liderar e sei ser liderado.
          <br />
          Entendo a função do papel que cada indivíduo tem num todo.
          <br />É importante para o coletivo quando o indivíduo entende suas
          limitações para que consiga desempenhar seu papel na sociedade e fazer
          fluir a engrenagem da vida.
          <br />
          Já para o indivíduo, é importante que ele supere suas limitações."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About7;
