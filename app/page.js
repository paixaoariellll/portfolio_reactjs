'use client';

import { useState } from 'react';
import { Footer, Nav, Navbar } from '../components';
import { GiUfo } from 'react-icons/gi';
import { CiRainbow } from 'react-icons/ci';
import { Who, About, About2, About3, About4, About5, About6, About7, About8, Experience, Explore, Projects, Feedback, Hero, Me, Services, World } from '../sections';
import { IoPlanet } from 'react-icons/io5';
/*
https://www.shadertoy.com/embed/4sXBRn? agua viva
https://www.shadertoy.com/embed/7dyyRy? sound 
https://www.shadertoy.com/embed/ldd3DB? peixes
https://www.shadertoy.com/embed/XtGGRt? aurora
https://www.shadertoy.com/embed/4ttSWf? floresta de montanhas
https://www.shadertoy.com/embed/MsVXWW? Nebulosa de fogo
https://www.shadertoy.com/embed/4dSfDK? Circulo negra
https://www.shadertoy.com/embed/XsjGRd? Planeta terra
https://www.shadertoy.com/embed/4t3BWl? Matrix
https://www.shadertoy.com/embed/XtSfDD? Pedra Angular
https://www.shadertoy.com/embed/Mll3zj? Galáxia
https://www.shadertoy.com/embed/4dGXRz? Puzzle
https://www.shadertoy.com/embed/MddGzf? Atari
https://www.shadertoy.com/embed/XddXWf? Gravidade
https://www.shadertoy.com/embed/tsScWR? Bolas coloridas
 */
const Page = () => {
  const [src, setSrc] = useState('https://www.shadertoy.com/embed/XtGGRt?gui=true&t=10&paused=false&muted=true&autoplay=1');
  function alterarEnd(endereco) {
    setSrc(endereco);
  }
  return (
    <>
      <iframe
        title="Background"
        className="w-full z-10 fixed min-h-screen cursor-move"
        src={src}
      />
      <div className="fixed z-50 right-2 gap-x-10 flex top-1">
        <div className="flex text-md items-center rounded-full font-mono">
          <span className="font-bold text-white">Mudar tema:</span>
          <div className="flex ml-2 gap-x-5">
            <button type="button" className="rounded-full bg-green-500 hover:bg-green-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/XtGGRt?gui=true&t=10&paused=false&muted=true&autoplay=1')}>
              <CiRainbow />
            </button>
            <button type="button" className="rounded-full bg-violet-500 hover:bg-violet-800 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/tsScWR?gui=true&t=10&paused=false&muted=true&autoplay=2')}>
              <GiUfo />
            </button>
            <button type="button" className="rounded-full bg-green-700 hover:text-white shadow-sm shadow-slate-900 p-2" onClick={() => alterarEnd('https://www.shadertoy.com/embed/4ts3z2?gui=true&t=10&paused=false&muted=false&autoplay=2')}>
              <IoPlanet />
            </button>
          </div>
        </div>
      </div>
      <div className='absolute z-40'>
        <Navbar />
        <Nav />
      </div>
      <div className="overflow-hidden max-w-screen">
        <Hero />
        <Who />
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col gap-2 z-0">
          <div className="w-full lg:w-1/2 md:w-full sm:w-full xs:w-full p-4 flex md:flex-col pointer-events-none">
            <About />
            <About3 />
            <About6 />
          </div>
          <div className="w-full lg:w-1/2 md:w-full sm:w-full xs:w-full p-4 flex md:flex-col pointer-events-none">
            <About2 />
            <About4 />
            <About7 />
          </div>
        </div>
        <div className="bg-[rgb(26,26,26)] relative z-30">
          <About8 />
        </div>
        <div className="relative z-20">
          <Me />
          <Experience />
          <Projects />
          <Services />
          <Explore />
          <World />
        </div>
        <Feedback />
        <Footer />
      </div>
    </>
  );
};

export default Page;
