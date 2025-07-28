
import { useEffect, useState } from "react";

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    >
      {isVisible && (
        <div
          className="w-1.5 h-1.5 rounded-full bg-red-600 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          style={{
            transform: `translate3d(${position.x - 1}px, ${position.y - 2}px, 0)`,
            transition: "transform 0.05s ease-out",
            position: "absolute",
          }}
        />
      )}
    </div>
  );
}

export default CursorTracker