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
    <section id="education" className="min-h-screen text-white py-20 px-4 flex justify-center scroll-mt-24">

      <div className="max-w-6xl w-full relative">
       
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-serif italic font-semibold mt-10 text-center text-yellow-300/90 tracking-wide uppercase"
          >
          Education
        </motion.h2>
        <div className="w-32 h-1 bg-yellow-300/90 rounded mb-16 ml-113 mx-auto" />

     
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute left-1/2 top-28 bottom-0 w-[6px] bg-yellow-700 rounded-full z-0 origin-top shadow-[0_0_20px_#d97706]"
          />


        <div className="space-y-20 relative z-10">
          {educationData.map((item, index) => {const isLeft = index % 2 === 0;
            
            return (
              <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row items-center justify-between">
    
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-blue-400 border-[5px] border-black rounded-full z-10" />

            

               
                <div className={` w-full md:w-[46%] p-6 rounded-xl border-2 border-yellow-600 bg-neutral-900 shadow-lg
  hover:scale-[1.03] transition-transform duration-300 z-10 flex items-center gap-4
                    ${isLeft ? "md:mr-auto md:pl-6" : "md:ml-auto md:pr-6"}
                    `}
                    >
               
                  <div className="w-28 h-28 rounded-full overflow-hidden border border-white bg-white/10 flex items-center justify-center">
                    <img src={item.logo} alt={`${item.institute} logo`} className="w-full h-full object-contain"/>
                  </div>

             
                  <div className="flex-1 text-center md:text-left">
  <h3 className="text-2xl font-bold text-yellow-300 mb-1">
    {item.institute}
  </h3>
  <p className="text-sm text-gray-200 italic font-bold mb-2">
    📍 {item.location}
  </p>
  <p className="text-cyan-400">{item.level}</p>
  <p className="text-gray-200 italic mt-1">{item.year}</p>
  <p className="text-gray-200 mt-1">
    📊 Marks:{" "}
    <span className="text-white font-semibold italic">
      {item.marks}
    </span>
  </p>
</div>

                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education