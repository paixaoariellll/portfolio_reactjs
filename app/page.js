import { Footer, Nav, Navbar } from '../components';
import { Who, About, About2, About3, About4, About6, About7, About8, Experience, Explore, Projects, Feedback, Hero, Me, Services, World } from '../sections';
/*
https://www.shadertoy.com/embed/4sXBRn? agua viva
https://www.shadertoy.com/embed/7dyyRy? sound 
https://www.shadertoy.com/embed/ldd3DB? peixes
https://www.shadertoy.com/embed/XtGGRt? aurora
https://www.shadertoy.com/embed/4ttSWf? floresta de montanhas
 */
const Page = () => (
  <>
    <Navbar />
    <iframe
      title="bg"
      className="w-full z-10 fixed min-h-screen "
      src="https://www.shadertoy.com/embed/XtGGRt?gui=true&t=10&paused=false&muted=true&autoplay=1" />
    <div className="overflow-hidden max-w-screen">
      <Nav />
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
      </div>
      <Services />
      <Explore />
      <World />
      <Feedback />
      <Footer />
    </div>
  </>
);

export default Page;
