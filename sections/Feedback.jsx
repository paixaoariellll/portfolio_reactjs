'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { feedbacks } from '../constants';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const Feedback = () => (
  <section id="Feedback" className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col gap-6`}
    >
      <ul className="grid grid-cols-4 gap-x-10">
        {feedbacks.messages.map((message, index) => (
          <motion.div
            key={index}
            variants={fadeIn(`${message.fadeIn}`, 'tween', 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
          >
            <li className="w-full items-center flex rounded-full justify-center p-2">
              <Image
                src={message.image}
                alt={`Foto de ${message.name}`}
                width={70}
                height={70}
                unoptimized
                className="flex justify-center text-center rounded-full"
              />
            </li>
            <li>
              <h4 className="font-bold sm:text-[24px] text-center text-[26px] sm:leading-[40px] leading-[36px] text-white">
                {message.name}
              </h4>
              <p className=" mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
                Recrutador - DivCode
              </p>
            </li>
            <li className="overflow-scroll max-h-36 min-h-36 mt-[24px] font-normal sm:text-[20px] text-[14px] sm:leading-[45px] leading-[39px] text-white">
              <p>{message.description}</p>
            </li>
          </motion.div>
        ))}
      </ul>
    </motion.div>
  </section>
);

export default Feedback;
