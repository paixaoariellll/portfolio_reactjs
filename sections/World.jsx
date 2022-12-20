'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import map from '../public/map.png';
import people1 from '../public/people-01.png';
import people2 from '../public/people-02.png';
import people3 from '../public/people-03.png';
import { TitleText, TypingText } from '../components/CustomTexts';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} z-10 relative`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}
    >
      <TypingText
        title="Desenvolvimento disponível para todo o mundo..."
        textStyles="text-center w-full text-white font-bold p-3 text-5xl"
      />
      <TitleText title="Destaque-se" textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative flex w-full h-[550px]"
      >
        <Image
          src={map}
          alt="map"
          width={50}
          height={50}
          unoptimized
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d5590]">
          <Image
            src={people1}
            alt="people1"
            width={50}
            height={50}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-1/3 right-1/2 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d5590]">
          <Image
            src={people2}
            alt="people2"
            width={50}
            height={50}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d5590]">
          <Image
            src={people3}
            alt="people3"
            width={50}
            height={50}
            unoptimized
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
