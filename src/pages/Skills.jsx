import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />, label: "Java" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />, label: "Python" },
  { icon: "devicon-apachekafka-original", label: "Data Structures" },
  { icon: "devicon-html5-plain colored", label: "HTML5" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />, label: "CSS3" },
  { icon: "devicon-javascript-plain colored", label: "JavaScript" },
  { icon: "devicon-react-original-wordmark", label: "React.js" },
  { icon: "devicon-tailwindcss-original colored", label: "Tailwind CSS" },
  { icon: "devicon-framermotion-original colored", label: "Framermotion" },
  { icon: "devicon-nextjs-plain colored", label: "Next.js" },
  { icon: "devicon-nodejs-plain-wordmark colored", label: "Node.js" },
  { icon: "devicon-express-original", label: "Express.js" },
  { icon: "devicon-mongodb-plain-wordmark colored", label: "MongoDB" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />, label: "Azure SQL" },
  { icon: "devicon-openapi-plain colored", label: "REST APIs" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" />, label: "MySQL" },
  { icon: "devicon-firebase-line colored", label: "Firebase" },
  { icon: "devicon-ssh-original", label: "Cybersecurity" },
  { icon: "devicon-git-plain colored", label: "Git & GitHub" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />, label: "Figma" },
  { icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />, label: "AWS" },
];

const columns = 4;
const totalRows = Math.ceil(skills.length / columns);
const baseDelay = 250;

export default function Skills() {
  const [activeCell, setActiveCell] = useState({ row: 0, col: 0 });
  const [animatedItems, setAnimatedItems] = useState({});

  useEffect(() => {
    let row = 0;
    let col = 0;
    let direction = 1;

    const move = () => {
      setActiveCell({ row, col });

      col += direction;
      if (col >= columns || col < 0) {
        row = (row + 1) % totalRows;
        direction = row % 2 === 0 ? 1 : -1;
        col = direction === 1 ? 0 : columns - 1;
      }

      setTimeout(move, baseDelay);
    };

    const timer = setTimeout(move, baseDelay);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 px-6 text-white scroll-mt-24">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-semibold font-serif italic text-center text-yellow-300/90  mt-5 mb-5"
      >
        SKILLS
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => {
      const row = Math.floor(i / columns);
      const col = i % columns;
      const isActive = activeCell.row === row && activeCell.col === col;
          const isNear = activeCell.row === row && (activeCell.col === col - 1 || activeCell.col === col + 1);

      let baseStyle = "bg-white/5";
      let extraStyle = ""
      if (isActive) {
        baseStyle = "bg-[#ffb347]";
        extraStyle = "shadow-[0_0_20px_#00f7ff] shadow-md border border-[#00f7ff]/40";
      } else if (isNear) {
        baseStyle = "bg-[#ffb347]/50";
        extraStyle = "shadow-[0_0_10px_#00f7ff88] border border-[#00f7ff]/20";
      }

          return (
  <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={animatedItems[i] ? { opacity: 1, scale: 1 } : undefined}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() =>
        setAnimatedItems((prev) => ({...prev,[i]: true,}))
      }
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      viewport={{ amount: 0.5 }}
              className={`transition-all duration-700 ease-in-out rounded-xl px-6 py-5 text-center text-lg font-semibold text-white backdrop-blur-md border border-cyan-400/20 ${baseStyle} ${extraStyle}`}>
       <div className="flex flex-col items-center justify-center gap-2">
                {typeof skill.icon === "string" && skill.icon !== "" ? (
       <i className={`${skill.icon} text-4xl text-cyan-300`}></i>
     ) : typeof skill.icon === "object" && skill.icon.type === "img" ? (
<img  src={skill.icon.props.src} alt={skill.label} className="w-10 h-10 object-contain"/>
                ) : (
                  <span className="text-3xl">🧠</span>
                )}
                <span className="text-cyan-100 text-base">{skill.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
