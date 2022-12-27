'use client';

import { useState } from 'react';
import { Footer, Nav, Navbar } from '../components';
import { GiJellyfish, GiUfo } from 'react-icons/gi';
import { CiRainbow } from 'react-icons/ci';
import { Who, About, About2, About3, About4, About6, About7, About8, Experience, Explore, Projects, Feedback, Hero, Me, Services, World } from '../sections';
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
        className="w-full z-10 fixed min-h-screen"
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
        <div className="grid bg-[rgba(0,0,0,0.8)] grid-cols-2 gap-2 z-0 pointer-events-none">
          <About />
          <About2 />
          <About3 />
          <About4 />
          <About6 />
          <About7 />
        </div>
        <div className="bg-[rgb(26,26,26)] relative z-40">
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
