'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About8 = () => (
  <section
    id="Formação"
    className={`${styles.paddings} flex justify-center items-center h-screen  w-full relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="Formação acadêmica"
        textStyles="text-5xl w-full text-center font-extrabold !text-white"
      />
      <motion.p
        variants={fadeIn('up', 'tween', 0, 1)}
        className={`${styles.xPaddings} mt-2 flex flex-col font-normal sm:text-xl text-lg text-center text-secoundary-white`}
      >
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
          <br /> Conhecimento amplo na linguagem SQL e utilização de bancos
          relaçionais e não relacionais como:
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
