import React from 'react'
import About from "./About";
import Contacts from "./Contacts";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";




const Home = () => {
  return (

    <>
    <div className="overflow-x-hidden min-h-screen">




      <section id="home">

        <Hero />
      

      </section>

      <section id="about">
        <About />
      
      </section>

      <section id="Education">
        <Education />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        
        <Contacts/>

      </section>
    </div>
    </>
  );
}

export default Home;