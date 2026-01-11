import React, { useState, useEffect } from "react";
import robot from "../assets/cuterobot_0000-removebg-preview.png";
import { Download } from "lucide-react";

const Home = () => {
  const fullText = "Hi, I’m Maheshi Fernando";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = 150;
    let timeout;

    if (!isDeleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index));
        setIndex(index - 1);
      }, speed / 2);
    }

    if (index === fullText.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (index === -1) {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#0f0715] relative overflow-hidden px-6">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full" />

      {/* Main Content Card */}
      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Robot Section */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
          <img
            src={robot}
            alt="Robot"
            className="w-32 h-32 sm:w-48 sm:h-48 object-contain relative z-10 animate-float"
          />
        </div>

        {/* Typing Name */}
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            {displayedText}
          </span>
          <span className="text-purple-500 animate-blink">|</span>
        </h1>

        {/* Roles with Glass Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-2xl">
          {["Frontend Developer", "HTML", "CSS", "JS", "React"].map((skill, i) => (
            <span 
              key={i} 
              className="px-4 py-1.5 rounded-full text-sm font-medium text-purple-200 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Download CV Button */}
        <a
          href="/assets/Maheshi_Fernando_CV.pdf"
          download
          className="group relative flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-[0_0_30px_rgba(128,0,255,0.4)] hover:shadow-[0_0_50px_rgba(128,0,255,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          Download My CV
        </a>
      </div>

      {/* Global Style for Float and Blink */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}} />
    </div>
  );
};

export default Home;