import React from 'react'
 import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      institute: "I.T.E.R, Siksha 'O' Anusandhan",
      level: "B.Tech – Computer Science & Engineering",
      year: "2023–2027",
      marks: "Pursuing",
      logo: "/iter.png",
      location: "Bhubaneswar, Odisha",
    },
    {
      institute: "Mother's Public School",
      level: "Senior Secondary (Class 12)",
      year: "2022",
      marks: "88%",
      logo: "/mps.jpeg",
      location: "Bhubaneswar, Odisha",
    },
    {
      institute: "St. Xavier's High School",
      level: "Secondary (Class 10)",
      year: "2020",
      marks: "93%",
      logo: "/sxhs.png",
      location: "Keonjhar, Odisha",
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 flex justify-center scroll-mt-24  text-black  dark:text-white transition-colors duration-300">
      <div className="max-w-6xl w-full relative">
        <h2 className="text-4xl font-serif italic font-semibold mt-10 mb-16 text-center tracking-wide uppercase text-blue-700 dark:text-yellow-300">
          Education
        </h2>

      <div className="absolute left-1/2 top-28 bottom-0 w-[6px] bg-yellow-300/90 dark:bg-yellow-300 rounded-full z-0 origin-top shadow-[0_0_20px] dark:shadow-yellow-500/60"/>
      <div className="space-y-20 relative z-10">
          {educationData.map((item, index) => {
const isLeft = index % 2 === 0;
return (
 <div key={index} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: index * 0.2 }}className="relative flex flex-col md:flex-row items-center justify-between">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 dark:bg-yellow-400 border-[5px] border-black dark:border-white rounded-full z-10" />
    
   <div className={`w-full md:w-[48%] p-4 sm:p-6 rounded-xl border-2 border-black dark:border-yellow-300 bg-gray-100 dark:bg-neutral-900 shadow-lg hover:scale-[1.03] transition-transform duration-300 z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6
  ${isLeft ? "md:mr-auto md:pl-6" : "md:ml-auto md:pr-6"}`}>

  <div className="w-28 h-28 md:w-38 md:h-38 rounded-full overflow-hidden border border-white dark:border-white/40 bg-white/10 flex items-center justify-center">
    <img src={item.logo} alt={`${item.institute} logo`} className="w-full h-full object-contain"/>
  </div>

  <div className="flex-1 text-center sm:text-left space-y-1 lg:space-y-2">
    <h3 className="text-2xl lg:text-2xl font-semibold text-blue-800 dark:text-yellow-300 mb-1 lg:mb-2 text-center">
      {item.institute}
    </h3>
    <p className="text-sm lg:text-base italic font-bold text-black dark:text-gray-300 text-center">
      📍 {item.location}
    </p>
    <p className="text-blue-700 dark:text-cyan-400 text-sm lg:text-lg font-medium text-center">
      {item.level}
    </p>
    <p className="italic text-gray-700 dark:text-gray-300 text-sm lg:text-base text-center">{item.year}</p>
    
  </div>
</div>

              </div>
              );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education