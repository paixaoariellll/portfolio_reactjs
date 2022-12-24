'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About2 = () => (
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
        <span className="w-2/4 font-extrabold text-white">Sou dedicado</span>
        <span className="w-3/4 text-gray-400 text-justify">
          <span className="flex text-white mb-2">
            Só levanto quando termino!
          </span>
          "Percebi que se eu quisesse mudar algo em minha vida, teria que fazer
          o que ninguém estava disposto. Por não ter a mesma facilidade que os
          demais, procurei suprir minha pouquidade com muito esforço e
          dedicação.
          <br />
          Quando cheguei ao nível de aprendizado dos demais colegas, percebi que
          por ter tido muito mais dedicação, adiquiri mais base para saber o que
          ninguém mais entendia."
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About2;
