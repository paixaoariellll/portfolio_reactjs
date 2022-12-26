'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GiCoffeeCup } from 'react-icons/gi';
import { BiWorld } from 'react-icons/bi';
import { IoMdSchool } from 'react-icons/io';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import styles from '../styles';
import Eu from '../public/Me.jpg';
import { TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

function ImpedirArrastar(event) {
  event.preventDefault();
}

const Me = () => (
  <section id="Me" className={`${styles.yPaddings} sm:16 sm:pl-6 `}>
    <div>
      <div className="grid grid-cols-7">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="col-span-3"
        >
          <motion.div
            variants={fadeIn('right', 'tween', 0, 1)}
            className="flex justify-center"
          >
            <motion.div
              className="bg-gradient-to-r from-[rgb(86,128,237)] to-[#ed4b15] rounded-full p-2 shadow-md shadow-slate-700"
              animate={{
                scale: [1, 1, 1, 1, 1],
                rotate: [5, -5, 5, -5, 5],
                borderRadius: ['50%', '40%', '50%', '40%', '50%'],
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.8 }}
                className="cursor-pointer"
                drag
                dragConstraints={{
                  top: -10,
                  left: -20,
                  right: 20,
                  bottom: 10,
                }}
              >
                <Image
                  src={Eu}
                  alt="Eu"
                  width={300}
                  height={300}
                  className="rounded-full shadow-md  shadow-slate-800"
                  unoptimized
                  onDragStart={ImpedirArrastar}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="col-span-4 mr-36 bg-[rgba(26,26,26,0.72)] p-5 rounded-xl"
        >
          <TypingText
            title="A caminho de me tornar um fullstack"
            textStyles="font-bold my-10 text-3xl"
          />
          <motion.div
            variants={fadeIn('left', 'tween', 0, 1)}
            className="flex flex-col justify-start gap-5"
          >
            <div className="flex gap-3 items-center">
              <GiCoffeeCup className="text-indigo-400 text-4xl" />
              <p className="text-white font-mono text-lg">
                "Um dia o <span className="font-bold">talentoso</span> verá o{' '}
                <span className="font-bold">insistente</span> alcançando os
                objetivos caminho que ele nasceu pra trilhar."
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <BiWorld className="text-indigo-600 text-3xl" />
              <p className="text-white font-mono text-lg">
                Brasil, São Paulo, Guaratinguetá.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <IoMdSchool className="text-orange-500 text-3xl" />
              <p className="text-white font-mono text-lg">
                Último semestre na Formação em Analise e Desenvolvimento de
                Sistemas.
              </p>
            </div>
            <div>
              <TypingText
                title="Que tal conversarmos um pouco?"
                textStyles=" text-secondary-white font-bold my-2 text-xl"
              />
              <div className="flex gap-x-5 text-5xl">
                <Link href="https://github.com/paixaoariellll">
                  <AiFillGithub className="text-white hover:text-slate-400 transition-all hover:scale-110" />
                </Link>
                <Link href="https://www.instagram.com/ariel.paixaao/">
                  <AiFillInstagram className="text-white hover:text-orange-600 transition-all hover:scale-110" />
                </Link>
                <Link href="https://www.linkedin.com/in/ariel-paixao/">
                  <AiFillLinkedin className="text-white hover:text-indigo-400 transition-all hover:scale-110" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Me;
