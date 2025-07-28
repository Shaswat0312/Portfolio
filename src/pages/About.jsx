import React from 'react'
import { motion } from "framer-motion";


const About = () =>{
  return (
   <section id="about" className="relative min-h-screen px-6 py-24 lg:pt-32 text-white flex items-center justify-center overflow-hidden scroll-mt-24">
  <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-20 px-2">


    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative group w-[320px] h-[420px] overflow-hidden rounded-xl border-2 border-yellow-500 shadow-lg flex-shrink-0 mt-15">
      <img src="./profile.JPG" alt="Shaswat Mishra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>


      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full bg-black/70 text-yellow-400 text-center py-2 text-lg font-semibold">
        Shaswat Mishra
      </div>
    </motion.div>


    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-gray-300 text-[15px] lg:text-[16px] flex-1 leading-relaxed"
    >
      <h2 className="text-4xl font-semibold font-serif italic tracking-wider  text-yellow-300/90 uppercase">
        About Me
      </h2>
      <div className="w-16 h-1 bg-yellow-300/90 rounded mb-6"></div>

      <p className="mb-4">
        Hey there! I’m <span className="text-yellow-400 font-semibold">Shaswat Mishra</span>, a curious and people-driven Computer Science undergrad at <span className="text-pink-400 font-medium">I.T.E.R, Siksha 'O' Anusandhan</span>.
      </p>

      <p className="mb-4">
        As part of the Outreach team at <span className="text-red-400 font-semibold">CN10XITER</span> and <span className="text-red-400 font-semibold">GDG</span>, I love turning chaos into community — planning events, talking to awesome folks, and getting things done behind the scenes.
      </p>

      <p className="mb-4">
        When I’m not deep in code, you’ll catch me vibing to music, watching cricket [<span className="text-blue-400">Bleed Blue</span>, <span className="text-yellow-400">YELLOVE</span>], or geeking out over aviation.
      </p>

  
      <div className="mb-6">
        <ul className="list-disc list-inside space-y-2 text-white/90">
          <li>
            Led the wildest AI Treasure Hunt at Elysium 2025 — 140 teams, 400+ participants across the entire campus
          </li>
          <li>
            Ranked in the <span className="text-yellow-400">Top 20</span> at HackWar 5.0
          </li>
          <li>Actively contributing to open-source and real-world collaborations</li>
          <li>Love networking, sharing ideas, and energizing community spaces</li>
        </ul>
      </div>

        <div className="mb-6 text-white/80">
        <p className="text-l font-bold italic "><span>📍</span> Bhubaneswar, Odisha</p>
        <p className="font-bold italic"><span className="text-yellow-400  font-bold">🗣️ Languages:</span> English, Hindi,Odia</p>
        <p className="font-bold italic"><span className="text-yellow-400 font-bold">🔥 Hobby:</span>Travelling,Reading,Creating Memes </p>
<p className="flex items-center text-xl gap-2 italic text-red-500">btw don't forget to follow My Meme Page <a href="https://www.instagram.com/thanda.memee/" target="_blank"><img src="./instagram.png" alt="" width="35" height="35"/></a></p>
      </div>


      <p className="mt-4 text-sm italic text-white/70">
        Want to dive deeper into my journey? Tap below to check out my resume 👇
      </p>

      <motion.a href="https://drive.google.com/file/d/1Ysp6atXxabgQBiIUj-wQM1etbANpc-vL/view?usp=sharing" target="_blank"
        rel="noopener noreferrer" whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }} className="block mx-auto mt-6 max-w-[220px] px-8 py-3 rounded-full bg-black text-white border border-white font-semibold shadow-md hover:bg-gray-800 hover:shadow-yellow-500/50 hover:text-black hover:border-black transition-colors duration-300 text-center">
        📄 Resume
      </motion.a>
    </motion.div>
  </div>
</section>

  );
}
export default About