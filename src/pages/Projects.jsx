import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CyboPunk",
    description: "Gamified quiz Web-App making cybersecurity fun and visually immersive.",
    image: "/proj1.avif",
    tags: ["React", "Tailwind", "Context API"],
    liveLink: "https://cybopunk.vercel.app/",
    githubLink: "https://github.com/Shaswat0312/CYBOPUNK",
  },
  {
    title: "TempTrek",
    description: "TempTrek is a weather app fetching real-time data from OpenWeather API with clean UI.",
    image: "/TempTrek.avif",
    tags: ["JavaScript", "OpenWeather API"],
    liveLink: "https://mini-projects-one-lyart.vercel.app/",
    githubLink: "https://github.com/Shaswat0312/Mini-Projects/tree/main/weather-app",
  },
  {
    title: "LOLgorithm",
    description: "LOLgorithm is a Joke App using Joke API",
    image: "/LOLgorithm.avif",
    tags: ["JavaScript", "Official Joke API"],
    liveLink: "https://mini-projects-sw43.onrender.com/",
    githubLink: "https://github.com/Shaswat0312/Mini-Projects/tree/main/LOLgorithm",
  },
  {
    title: "TO-DO-APP",
    description: "TO-DO-APP with resposive and interactive UI",
    image: "/TODO.avif",
    tags: ["HTML5", "CSS3", "JAVASCRIPT"],
    liveLink: "https://wonderful-tarsier-c79011.netlify.app/",
    githubLink: "https://github.com/Shaswat0312/Mini-Projects/tree/main/TO-DO-LIST",
  }
];

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 800);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = (index) => {
    if (isMobile) {
      setActiveCard(activeCard === index ? null : index);
    }
  };

  return (
    <section id="projects" className="min-h-screen py-24 px-4 text-white flex flex-col items-center">
      <h1 className="text-4xl font-semibold font-serif italic tracking-wider text-blue-600 dark:text-yellow-300/90 mb-10">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3 px-4 sm:xl sm:px-8 lg:px-20 max-w-[1600px] w-full">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={!isMobile ? { scale: 1.025 } : {}}
            onClick={() => handleCardClick(index)}
            className="group relative overflow-hidden rounded-2xl shadow-[0_0_50px_rgba(0,255,255,0.08)] border border-cyan-300/20 bg-white/5 backdrop-blur-lg mx-auto w-full transition-all duration-300"
            style={{ aspectRatio: "16 / 9", maxWidth: "100%" }}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />

           <div className="absolute top-0 left-0 right-0 p-2 sm:p-4 flex justify-between items-start z-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none sm:font-medium">
              <div className="text-sm sm:text-2xl font-semibold rounded-xl text-white bg-black/70 px-2 py-1 ">
                {proj.title}
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-cyan-500 hover:text-cyan-400/65 transition">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-cyan-300 transition">
                  <FaGithub /> Code
                </a>
              </div>
            </div>

            {isMobile && activeCard === index && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="absolute inset-0 flex justify-center items-center text-center px-6 py-12 bg-black/60 backdrop-blur-md z-10"
  >
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="text-sm text-white mb-9 mt-9 font-bold">{proj.description}</p>
      <div className="flex flex-wrap gap-2 text-xs justify-center">
        {proj.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase">
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
)}


          {!isMobile && (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="absolute inset-0 hidden group-hover:flex justify-center items-center text-center px-6 py-12 bg-black/40 backdrop-blur-sm z-10"
  >
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <p className="text-sm text-white mb-9 mt-9 font-bold">{proj.description}</p>
      <div className="flex flex-wrap gap-2 text-xs justify-center">
        {proj.tags.map((tag, i) => (
          <span key={i} className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase">
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
