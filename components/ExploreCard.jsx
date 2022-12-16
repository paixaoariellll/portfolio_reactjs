'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import styles from '../styles';
import Image from 'next/image';
import headset from '../public/headset.svg';

const ExploreCard = ({ id, title, imgUrl, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 8.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } ${
      styles.flexCenter
    } min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      width={50}
      height={50}
      unoptimized={true}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 overflow-hidden justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={headset}
            alt="headset"
            width={10}
            height={10}
            unoptimized={true}
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
          Entre para saber mais
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
