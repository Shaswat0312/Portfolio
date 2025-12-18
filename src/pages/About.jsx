import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen px-6 py-16 sm:py-20 lg:pt-32 text-neutral-800 dark:text-white flex items-center justify-center overflow-hidden scroll-mt-24">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-start gap-12 lg:gap-20 px-2">

      
  <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="relative group w-[90%] max-w-[320px] h-[420px] mx-auto sm:mx-0 overflow-hidden rounded-xl border-2 border-yellow-500 shadow-lg flex-shrink-0 lg:mt-25"
>
  <img src="./profile.avif" alt="Shaswat Mishra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/50 pointer-events-none" />
  <div className="absolute bottom-0 left-0 w-full bg-black/70 text-yellow-400 text-center py-2 text-lg font-semibold">
    Shaswat Mishra
  </div>
</motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[15px] lg:text-[16px] flex-1 leading-relaxed">
          <h2 className="text-4xl font-semibold font-serif italic tracking-wider text-blue-600 dark:text-yellow-400 uppercase">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 dark:bg-yellow-400 rounded mb-6"></div>

          <p className="mb-4 font-bold">
            Hey there! I’m <span className="text-blue-500 dark:text-yellow-300 font-semibold">Shaswat Mishra</span>, a curious and people-driven Computer Science undergrad at <span className="text-pink-500 font-bold italic">I.T.E.R, Siksha 'O' Anusandhan</span>.
          </p>

          <p className="mb-4 font-bold">
            As part of the Outreach team at <span className="text-red-500 font-semibold">CN10XITER</span> and <span className="text-red-500 font-semibold">GDG</span>, I love turning chaos into community — planning events, talking to awesome folks, and getting things done behind the scenes.
          </p>

          <p className="mb-4 font-bold">
            When I’m not deep in code, you’ll catch me vibing to music, watching cricket [<span className="text-blue-500">Bleed Blue</span>, <span className="text-yellow-500">YELLOVE</span>], or geeking out over aviation.
          </p>

          <div className="mb-6 font-bold">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Led the wildest AI Treasure Hunt at Elysium 2025 — 140 teams, 400+ participants across the entire campus
              </li>
              <li>
                Ranked in the <span className="text-red-500 dark:text-yellow-400">Top 20</span> at HackWar 5.0
              </li>
              <li>Actively contributing to open-source and real-world collaborations</li>
              <li>Love networking, sharing ideas, and energizing community spaces</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-l font-bold italic"><span>📍</span> Bhubaneswar, Odisha</p>
            <p className="font-bold italic"><span className="text-blue-800 font-bold dark:text-yellow-300">🗣️ Languages:</span> English, Hindi, Odia</p>
            <p className="font-bold italic"><span className="text-blue-800  dark:text-yellow-300 font-bold">🔥 Hobby:</span> Travelling, Reading, Creating Memes</p>
          </div>

  <p className="mt-4 text-sm italic opacity-70">
  Want to dive deeper into my journey? Tap below to check out my resume 👇
  </p>

    <motion.a href="https://drive.google.com/file/d/1LwJMDPALu9jJTpq24XbSJ5L-7OmTGloY/view?usp=sharing" target="_blank" rel="noopener noreferrer"  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
  className="block mx-auto mt-6 max-w-[220px] px-8 py-3 rounded-full bg-black text-white border border-white font-semibold shadow-md hover:bg-neutral-700/90 hover:shadow-yellow-500/50 hover:text-white hover:border-black transition-colors duration-300 text-center" aria-label="Resume">
  📄 Resume
      </motion.a>
    </motion.div>
  </div>
</section>
  );
};
export default About