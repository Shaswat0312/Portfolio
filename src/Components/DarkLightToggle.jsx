import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkLightToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
 <button onClick={toggleTheme} className="fixed z-50 right-3 top-20 sm:top-5 sm:right-5 md:top-6 md:right-6 lg:top-5 lg:right-5 p-2 sm:p-3 rounded-full  bg-black text-white dark:bg-white dark:text-black  border border-white/90 shadow-md backdrop-blur-lg hover:bg-black/70 dark:hover:bg-white/80 transition duration-300 cursor-pointer" aria-label="Hover Button">{isDark ? <Sun size={20} /> : <Moon size={20} />}</button>
  );
}
