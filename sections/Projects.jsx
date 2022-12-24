'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';
import styles from '../styles';
import { projects } from '../constants';

const Projects = () => (
  <section id="Projects" className={`${styles.paddings} relative z-10`}>
    <div className="p-5">
      <TypingText
        title="Projetos Desenvolvidos"
        textStyles="text-center text-slate-700 dark:text-secondary-white font-bold p-10 mb-24 text-3xl"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid gap-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-5"
      >
        {projects.map(project => (
          <motion.div
            variants={fadeIn(`${project.fadeIn}`, 'tween', 0, 1)}
            key={project.id}
            className="col-span-1"
          >
            <div className="glassmorphism hover:-translate-y-3 transition-all flex flex-col justify-center rounded-xl shadow-lg shadow-slate-900 p-5">
              <div className="rounded-xl shadow-md shadow-black overflow-hidden">
                <Image
                  src={project.imgUrl}
                  width={800}
                  height={300}
                  alt="Projetos desenvolvidos"
                  unoptimized
                  className="rounded-xl w-[800px] h-[300px] hover:scale-105 transition-all"
                />
              </div>
              <div className="text-center">
                <div className="grid items-center my-2 text-secondary-white">
                  <div className="text-xl">{project.title}</div>
                </div>
                <div className="text-white font-mono h-28 overflow-scroll">
                  {project.description}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
