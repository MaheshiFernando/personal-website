import React, { useState } from "react";
import { motion } from "framer-motion";
import skillsIllustration from "../assets/skills-girl.png";

const frontendSkills = [
  "React ⚛️", "Tailwind CSS 🎨", "HTML5 📄", "CSS3 🎨", "JavaScript 🟨", "React Native 📱", "Expo ⚡","UI / UX"
];

const backendSkills = [
  "Java ☕", "Spring Boot 🌱", "Node.js 🟢", "MongoDB 🍃", "MySQL 🐬", "Express.js 🚀", "JWT 🔑 "
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const SkillButton = ({ skill }) => {
    const isActive = skill === activeSkill;
    return (
      <button
        onClick={() => setActiveSkill(isActive ? null : skill)}
        className={`
          relative px-6 py-3 rounded-xl font-medium text-white transition-all duration-300
          backdrop-blur-md border
          ${isActive 
            ? "bg-purple-600/40 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.5)] scale-110 z-20" 
            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-purple-500/50"
          }
        `}
      >
        {skill}
      </button>
    );
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0715] overflow-hidden relative">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* LEFT SIDE: TEXT & SKILLS */}
        <div className="space-y-10">
          <motion.header 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 mb-4">
              Technical Arsenal
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Combining aesthetics with robust logic to build seamless digital experiences.
            </p>
          </motion.header>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-purple-300 mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-purple-500"></span> Frontend Development
              </h2>
              <div className="flex flex-wrap gap-4">
                {frontendSkills.map((skill) => (
                  <SkillButton key={skill} skill={skill} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-indigo-300 mb-6 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-indigo-500"></span> Backend & Tools
              </h2>
              <div className="flex flex-wrap gap-4">
                {backendSkills.map((skill) => (
                  <SkillButton key={skill} skill={skill} />
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE WITH ORBITING BUBBLES */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* --- BIG BUBBLE --- */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/30 to-transparent rounded-full blur-xl border border-white/10 z-0"
          />

          {/* --- SMALL BUBBLE --- */}
          <motion.div
            animate={{
              y: [0, 60, 0],
              x: [0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-tr from-indigo-500/40 to-transparent rounded-full blur-lg border border-white/20 z-20"
          />

          {/* Image Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative group"
          >
            {/* Animated Ring behind the girl */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-purple-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border-t-2 border-indigo-400/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
            
            <img
              src={skillsIllustration}
              alt="Skills Illustration"
              className="w-full max-w-lg md:max-w-xl z-10 transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Shadow under image */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-purple-900/40 blur-3xl rounded-full" />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Skills;