import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contacts = () => {
  return (
    <section id="contact" className="min-h-screen w-full scroll-mt-28 px-6 py-20 flex items-center justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="text-5xl font-bold mb-6 text-blue-500 dark:text-yellow-400">
            Let's Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
            Have a project in mind or just want to say hello? I'm always open to connecting, collaborating, or just chatting about tech.
          </p>
          <p className="text-sm text-black dark:text-white mb-4 font-bold text-l">
           EMAIL ID : mishra3shaswat@gmail.com
          </p>

          <div className="flex gap-6 justify-center lg:justify-start mb-8">
            <a href="mailto:mishra3shaswat@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-yellow-400 transition" aria-label="Email">
              <FaEnvelope size={28} />
            </a>
            <a href="https://www.linkedin.com/in/shaswatmishra3" target="_blank"rel="noopener noreferrer"className="hover:text-blue-500 dark:hover:text-yellow-400 transition" aria-label="LinkedIn">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/Shaswat0312" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 dark:hover:text-yellow-400 transition" aria-label="GitHub">
              <FaGithub size={28} />
            </a>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            I’ll try my best to respond within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 w-full mt-10 p-8 sm:p-12 rounded-2xl shadow-lg border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md"
        >
          <h3 className="text-3xl font-semibold text-blue-400 dark:text-yellow-400 mb-8 text-center">
            Send Me a Message
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-black dark:text-white mb-2 font-medium">
                Name
              </label>
              <input id="name" type="text" placeholder="Name" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            </div>
            <div>
  <label htmlFor="email" className="block text-black dark:text-white mb-2 font-medium">
          Email
      </label>
    <input id="email" type="email" placeholder="you@gmail.com" className="w-full p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-black dark:text-white mb-2 font-medium">
              Message
            </label>
            <textarea id="message" rows="6" placeholder="Write your message here..." className="w-full p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-300 dark:border-gray-600 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"></textarea>
          </div>

     <button type="submit" className="w-full bg-blue-400 dark:bg-yellow-400 text-black font-bold py-4 rounded-lg hover:bg-yellow-500 transition text-lg">
           Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;
