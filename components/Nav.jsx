'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Nav = () => (
  <motion.div
    variants={slideIn('left', 'tween', 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className="fixed z-30 left-[20px] rounded-full shadow-md shadow-slate-50 p-2"
  >
    <motion.ul
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col justify-between gap-y-5 text-3xl relative text-indigo-800"
    >
      <motion.li
        variants={textVariant(2.2)}
        className="bg-primary-black hover:bg-secondary-white rounded-full p-2"
      >
        <Link href="#Hero">
          <AiOutlineHome className="icon active-icon" />
        </Link>
      </motion.li>
      <motion.li
        variants={textVariant(2.4)}
        className="bg-primary-black hover:bg-secondary-white rounded-full p-2"
      >
        <Link href="#Hero">
          <AiOutlineUser className="icon" />
        </Link>
      </motion.li>
      <motion.li
        variants={textVariant(2.6)}
        className="bg-primary-black hover:bg-secondary-white rounded-full p-2"
      >
        <Link href="#Hero">
          <AiOutlineHome className="icon" />
        </Link>
      </motion.li>
      <motion.li
        variants={textVariant(2.8)}
        className="bg-primary-black hover:bg-secondary-white rounded-full p-2"
      >
        <Link href="#Hero">
          <AiOutlineHome className="icon" />
        </Link>
      </motion.li>
      <motion.li
        variants={textVariant(3.0)}
        className="bg-primary-black hover:bg-secondary-white rounded-full p-2"
      >
        <Link href="#Hero">
          <AiOutlineHome className="icon" />
        </Link>
      </motion.li>
    </motion.ul>
  </motion.div>
);

/* const Icons = document.querySelector('.navigation .icon');
function changeactive() {
  Icons.forEach(icon => {
    icon.classList.remove('active-nav');
  });
}
function navLinks() {
  Icons.forEach(icon => {
    icon.addEventListener('click', () => {
      changeactive();
      icon.classList.add('active-nav');
    });
  });
}
console.log(navLinks); */

export default Nav;
