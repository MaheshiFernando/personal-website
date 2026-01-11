import React from "react";
import aboutImg from "../assets/about-me.jpeg"; // Replace with your image path
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f0715] px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      {/* Main Glass Container */}
      <div className="relative z-10 max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-16 rounded-[2.5rem] shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="relative group">
            {/* Outer Rotating/Pulsing Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
            
            <div className="relative">
              <img
                src={aboutImg}
                alt="About Me"
                className="w-56 h-56 md:w-80 md:h-80 object-cover rounded-full border-2 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              {/* Inner subtle border */}
              <div className="absolute inset-0 rounded-full border-[6px] border-purple-500/20"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                Me
              </span>
            </h1>

            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                I'm an undergraduate <span className="text-purple-400 font-semibold italic">software engineering student</span> 
                driven by the challenge of building 
                <span className="text-white font-medium"> full-stack applications</span> and 
                <span className="text-white font-medium"> mobile apps</span>.
              </p>
              
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in creating responsive, user-centric interfaces and integrating modern backends. 
                For me, coding isn't just about syntax—it's about solving real-world problems with 
                <span className="text-indigo-400"> elegant, scalable solutions</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => navigate("/projects")}
                className="group relative px-8 py-4 rounded-full font-bold text-white overflow-hidden shadow-lg transition-all"
              >
                {/* Button Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:scale-110 transition-transform duration-300"></div>
                
                <span className="relative flex items-center gap-2">
                  <ExternalLink size={20} /> View My Work
                </span>
              </button>

              <button 
                onClick={() => navigate("/contact")} // Assuming you have a contact route
                className="px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;