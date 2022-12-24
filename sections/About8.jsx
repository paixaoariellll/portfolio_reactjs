'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About8 = () => (
  <section className={`${styles.paddings} z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.p
        variants={fadeIn('up', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex flex-col font-normal sm:text-xl text-lg text-center text-secoundary-white`}
      >
        <span className="font-extrabold text-3xl text-white">
          Formação acadêmica
        </span>
        <span className="w-full text-gray-400">
          Conhecimento amplo nas linguagens de programação, sendo as principais,
          por ordem de conhecimento do maior para o menor:
          <br />
          <code className="font-bold text-white">
            JavaScript, Html_5, Java, TypeScript, Node e C#
          </code>
          .
          <br /> Faço uso e personalização usando modeladores e frameworks como:
          <br />
          <code className="font-bold text-white">
            Angular, Bootstrap, CSS, Entities, Tailwind, Javascript, NextJs,
            View, e ReactJS
          </code>
          .
          <br /> Conhecimento amplo na linguagem SQL e utilização de banco
          relaçionais e Não relacionais como:
          <code className="font-bold text-white">
            {' '}
            MySQL, FireBase, Mongo e Sanity
          </code>
          .
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About8;
