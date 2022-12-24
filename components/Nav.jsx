'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { slideIn } from '../utils/motion';
import { navbarItems } from '../constants';

const Nav = () => (
  <motion.div
    id="nav"
    variants={slideIn('left', 'tween', 0.5, 1)}
    initial="hidden"
    whileInView="show"
    className="p-2 z-30 top-0 flex flex-col justify-center h-screen fixed shadow-md shadow-slate-50 left-[10px]"
  >
    <div className="flex flex-col  gap-6">
      {navbarItems.map((item) => (
        <nav key={item.title}>
          <Link
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById(item.href.substring(1));
              element.scrollIntoView();
            }}
          >
            <div className="rounded-full hover:bg-slate-900 text-secondary-white hover:text-white hover:shadow-md hover:shadow-black transition-all p-2 shadow-sm shadow-slate-900">
              <div
                className={`text-${item.icon}-500 text-3xl `}
                title={`${item.title}`}
              >
                <item.icon />
              </div>
            </div>
          </Link>
        </nav>
      ))}
    </div>
  </motion.div>
);

export default Nav;
