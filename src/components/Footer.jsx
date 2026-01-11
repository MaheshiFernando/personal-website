import React from "react";
import { Github, Linkedin, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0f0715] pt-12">
      {/* Decorative Glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-3 items-start">
          
          {/* Section 1: Branding */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              🚀 Maheshi<span className="text-purple-500">.dev</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-xs leading-relaxed">
              Full Stack Developer specializing in building high-performance 
              web & mobile applications with modern tech stacks.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left">
              <li><Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">About</Link></li>
              <li><Link to="/skills" className="text-gray-400 hover:text-purple-400 transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3: Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Connect With Me
            </h3>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/yourusername" icon={<Github size={20} />} />
              <SocialIcon href="https://linkedin.com/in/yourusername" icon={<Linkedin size={20} />} />
              <SocialIcon href="mailto:your@email.com" icon={<Mail size={20} />} />
              <SocialIcon href="#" icon={<Globe size={20} />} />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/10 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} <span className="text-white font-semibold">Maheshi Fernando</span></p>
          <p className="flex items-center gap-1">
            Built with <span className="text-purple-500">React</span> & <span className="text-indigo-500">Tailwind</span>
          </p>
          <p className="hover:text-purple-400 transition-colors cursor-default">Designed with ❤️</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Social Icon Component
const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-12 h-12 flex items-center justify-center rounded-xl
      bg-white/5 border border-white/10 text-gray-400
      hover:bg-purple-600/20 hover:text-purple-400 hover:border-purple-500/50 
      hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
      transition-all duration-300 transform hover:-translate-y-1
    "
  >
    {icon}
  </a>
);

export default Footer;