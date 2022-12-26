import { Footer, Nav, Navbar } from '../components';
import { Who, About, About2, About3, About4, About6, About7, About8, Experience, Explore, Projects, Feedback, Hero, Me, Services, World } from '../sections';

const Page = () => (
  <>
    <Navbar />
    <iframe className='w-full fixed -z-10 min-h-screen' src="https://www.shadertoy.com/embed/7dyyRy?controls=0&paused=false&muted=false&autoplay=1" ></iframe>

    <div className="overflow-hidden max-w-screen">
      <Nav />
      <Hero />
      <Who />
      <div className='grid bg-[rgba(0,0,0,0.8)] grid-cols-2 gap-2'>
        <About />
        <About2 />
        <About3 />
        <About4 />
        <About6 />
        <About7 />
      </div>
      <div className='bg-[rgb(26,26,26)] relative z-40'>
        <About8 />
      </div>
      <Me />
      <Experience />
      <Projects />
      <Services />
      <Explore />
      <World />
      <Feedback />
      <Footer />
    </div>
  </>
);

export default Page;
