'use client';

import { motion } from 'framer-motion';
import { skills } from '../constants';
import { TypingText } from '../components';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Experience = () => (
  <section id="AboutMe" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <TypingText
        title="Informações complementares"
        textStyles="text-center text-secondary-white font-bold p-10 text-3xl"
      />
      <div className="flex flex-wrap justify-center">
        {skills.map(skill => (
          <motion.div
            variants={textVariant(`${skill.time}`)}
            key={skill.name}
            className="w-64 h-fit m-4 p-4 glassmorphism text-white rounded-lg shadow-xl space-y-3 shadow-slate-50"
          >
            <div className="flex justify-center w-full">
              <div className="rounded-full p-3 shadow-md shadow-slate-50 bg-white">
                <skill.icon
                  className="text-5xl text-center w-full"
                  style={{ color: `${skill.color}` }}
                />
              </div>
            </div>
            <p className="text-xl text-center w-full">{skill.name}</p>
            <div>
              <div className="h-4 rounded-full shadow-slate-50 shadow-md">
                <div
                  className="h-4 rounded-full relative overflow-hidden"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <div
                    className="h-full absolute inset-0 rounded-full transition-all duration-300 ease-in-out"
                    style={{ backgroundColor: `${skill.color}` }}
                  />
                </div>
              </div>
              <p className="text-center font-bold mt-2">{skill.percentage}%</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Experience;
