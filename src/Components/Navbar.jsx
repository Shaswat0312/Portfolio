import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#Education" },
    { name: "Skills", href: "#Skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact Me", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 10);
  };

  return (
    <nav className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-[100] w-[90vw] max-w-4xl navbar-bg">
      <div className="relative px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-gray-600/10 dark:bg-white/10 backdrop-blur-lg border border-neutral-300 dark:border-white/20 shadow-md transition-all duration-300 text-sm sm:text-base md:text-lg">

        <div className="absolute inset-0 rounded-full pointer-events-none overflow-hidden z-[-1]">
          <div className="absolute -top-1/2 left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-cyan-300/10 to-transparent animate-spin-slow blur-2xl opacity-20" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex w-full justify-between items-center text-neutral-900 dark:text-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="flex-1 text-center dark:hover:text-cyan-400 hover:text-blue-500 font-semibold transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="sm:hidden flex justify-between items-center text-neutral-900 dark:text-white">
          <span className="text-lg font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl font-bold"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden mt-2 w-[90vw] max-w-4xl mx-auto bg-neutral-100/80 dark:bg-white/10 backdrop-blur-md border border-neutral-300 dark:border-white/20 rounded-lg p-4 space-y-3 shadow-lg"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-center text-neutral-900 dark:text-white hover:text-cyan-400 font-semibold transition"
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
