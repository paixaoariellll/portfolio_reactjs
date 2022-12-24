import { Footer, Nav, Navbar } from '../components';
import { Who, About, About2, About3, About4, About5, About6, About7, About8, Experience, Explore, Projects, Feedback, Hero, Me, Services, World } from '../sections';
const Page = () => (
  <>
    <div className="bg-gradient-to-b from-[#212020] to-[#150224] overflow-hidden">
      <Navbar />
      <Nav />
      <Hero />
      <Who />
      <div className='grid grid-cols-2 gap-2'>
        <About />
        <About2 />
        <About3 />
        <About4 />
        <About6 />
        <About7 />
      </div>
      <About5 />
      <About8 />
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
