'use client';

import Link from 'next/link';
import { navbarItems } from '../constants';

const Nav = () => {
  return (
    <div className="p-2 z-50 bottom-0 flex flex-row justify-center fixed bg-black h-14 w-full">
      <div className="flex flex-row gap-6">
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
              <div className="rounded-full transition-all text-white p-2 shadow-sm shadow-slate-900">
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
      <div className="absolute right-1">
        <a href="https://github.com/paixaoariellll/fisrt-page/raw/269a5d88828271a321da64432ac480fa202fa756/Ariel%20Paix%C3%A3o.pdf">
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 justify-end text-white font-bold py-2 px-4 rounded"
          >
            Baixar currículo
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
