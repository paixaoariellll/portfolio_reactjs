'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingText } from '../components';
import styles from '../styles';
import { projects } from '../constants';

const Projects = () => (
  <section id="Projects" className={`${styles.paddings} relative z-10`}>
    <div className="p-5">
      <TypingText
        title="Projetos desenvolvidos"
        textStyles="text-4xl w-full text-center font-extrabold text-white"
      />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid gap-5 grid-cols-1 p-5"
      >
        {projects.map((project) => (
          <div
            variants={fadeIn(`${project.fadeIn}`, 'tween', 0, 1)}
            key={project.id}
            className="col-span-1"
          >
            <div className="glassmorphism hover:-translate-y-3 transition-all flex flex-col justify-center rounded-xl shadow-lg shadow-slate-900 p-5">
              <div className="rounded-xl shadow-md shadow-black overflow-hidden">
                <iframe
                  src={project.link}
                  className="rounded-xl w-full h-[1000px] overflow-hidden"
                ></iframe>
              </div>
              <div className="text-center">
                <div className="grid items-center my-2 text-secondary-white">
                  <div className="text-xl">{project.title}</div>
                </div>
                <div className="text-white font-mono h-28 overflow-hidden">
                  {project.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Projects;
