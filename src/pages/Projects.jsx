import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CyboPunk",
    description: "Gamified quiz Web-App making cybersecurity fun and visually immersive.",
    image: "/proj1.png",
    tags: ["React", "Tailwind", "Context API"],
    liveLink: "https://cybopunk.vercel.app/",
    githubLink: "https://github.com/Shaswat0312/CYBOPUNK",
  },
  {
    title: "TempTrek",
    description: "TempTrek is a weather app fetching real-time data from OpenWeather API with clean UI.",
    image: "/TempTrek.png",
    tags: ["JavaScript", "OpenWeather API"],
    liveLink: "https://mini-projects-one-lyart.vercel.app/",
    githubLink: "https://github.com/Shaswat0312/Mini-Projects/tree/main/weather-app",
  },
  {
    title: "LOLgorithm",
    description: "LOLgorithm is a Joke App using Joke API",
    image: "/LOLgorithm.png",
    tags: ["JavaScript", "Official Joke API"],
    liveLink: "https://mini-projects-sw43.onrender.com/",
    githubLink: "https://github.com/Shaswat0312/Mini-Projects/tree/main/LOLgorithm",
  },
  {
    title: "TO-DO-APP",
    description: "TO-DO-APP with resposive and interactive UI",
    image: "/TODO.png",
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
    <section id="projects" className="min-h-screen py-24 px-6 text-white flex flex-col items-center">
      <h1 className="text-4xl font-semibold font-serif italic tracking-wider text-yellow-300/90 mt-5 mb-5">
        PROJECTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={!isMobile ? { scale: 1.02 } : {}}
            onClick={() => handleCardClick(index)}
            className="group relative overflow-hidden m-3 rounded-xl shadow-[0_0_40px_rgba(0,255,255,0.08)] border border-cyan-300/20 bg-white/5 backdrop-blur-lg mx-auto"
            style={{ width: "105%", height: "100%", aspectRatio: "16 / 9" }}
          >
            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />

            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-20 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
              <div className="text-xl font-semibold text-white-200 bg-black/30 drop-shadow-sm">
                {proj.title}
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <a href={proj.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-green-400 hover:text-green-300 transition">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={proj.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-white hover:text-yellow-300 transition">
                  <FaGithub /> Code
                </a>
              </div>
            </div>

            {isMobile && activeCard === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex justify-center items-center text-center px-6 py-12 bg-black/60 backdrop-blur-md z-10"
              >
                <motion.div initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.4 }}>
                  <p className="text-sm text-gray-300 mb-9 mt-9 font-bold">{proj.description}</p>
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
              <div className="hidden group-hover:flex absolute inset-0 justify-center items-center text-center px-6 py-12 bg-black/60 backdrop-blur-md z-10 transition-opacity duration-300">
                <div>
                  <p className="text-sm text-gray-300 mb-9 mt-9 font-bold">{proj.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs justify-center">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
