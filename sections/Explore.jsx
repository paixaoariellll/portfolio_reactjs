'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import { Cep, Cnpj } from '.';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section id="Ideas" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText
          title="Exemplos de APIs"
          textStyles="text-center text-4xl !font-bold"
        />
        <div className="mt-[10px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <>
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleClick={setActive}
                className="absolute"
              />
              {world.id === active && world.id === 'CEP' ? (
                <div className="absolute">
                  <Cep />
                </div>
              ) : (
                ''
              )}
              {world.id === active && world.id === 'CNPJ' ? (
                <div className="absolute flex flex-row">
                  <div className="w-36 h-[1px]" />
                  <Cnpj />
                </div>
              ) : (
                ''
              )}
            </>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
