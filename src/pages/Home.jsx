import About from "./About";
import Contacts from "./Contacts";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";




const Home = () => {
  return (

    <>
   <div className="overflow-x-hidden min-h-screen space-y-0">




      <section id="home">

        <Hero />
      

      </section>

<section id="about" className="!my-0 !py-0">
  <About />
</section>

<section id="Education" className="!my-0 !py-0">
  <Education />
</section>

<section id="Skills" className="!my-0 !py-0">
  <Skills />
</section>

<section id="projects" className="!my-0 !py-0">
  <Projects />
</section>

<section id="contact" className="!my-0 !py-0">
  <Contacts />
</section>

    </div>
    </>
  );
}

export default Home;