import { useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden transition-colors duration-300">
      <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 sm:gap-16 z-10 sm:px-4 sm:pl-[112px]">
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left lg:items-start items-center">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-4xl lg:text-4xl font-bold text-blue-700/90 dark:text-cyan-400 tracking-wide">
            Welcome to Shaswat's Portfolio
          </motion.h2>

  <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            Hey, I'm Shaswat Mishra
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-sm sm:text-base lg:text-lg text-neutral-800 dark:text-gray-400">
            A tech enthusiast crafting futuristic web experiences & exploring digital security realms.
          </motion.p>

         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="text-base sm:text-xl lg:text-2xl font-medium flex flex-wrap justify-center lg:justify-start gap-2 
    bg-neutral-200/40 dark:bg-white/5 px-4 py-2 rounded-xl 
    border border-neutral-400/70 dark:border-white/10 backdrop-blur-md"
>
  <span className="text-black dark:text-white">Passionate about</span>
  <span className="text-red-400 dark:text-cyan-400 font-bold">
    <Typewriter
      words={[
        "Problem Solving",
        "Web Development",
        "CyberSecurity",
        "DevOps",
        "Cloud Computing",
        "Prompt Engineering",
      ]}
      loop
      cursor
      cursorStyle="_"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={3000}
    />
  </span>
</motion.div>

   <motion.button onClick={scrollToAbout} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}  transition={{ delay: 0.6, duration: 0.5 }} className="mt-4 sm:mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-pink-500 text-black font-semibold hover:scale-105 transition shadow-lg shadow-yellow-400/30">
            About Me
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-48 sm:w-64 md:w-72 lg:w-80 h-48 sm:h-64 md:h-72 lg:h-80 rounded-full bg-gradient-to-tr from-yellow-300 via-orange-400 to-pink-500 shadow-xl overflow-hidden border-[5px] border-yellow-300 hover:rotate-1 hover:scale-105 transition-transform">
          <img src="pic.png" alt="Shaswat" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero