import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Layers, Folder, Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="
      fixed top-0 left-0 w-full z-50
      /* Dark Transparent Glass Background */
      bg-[#0f0715]/70 backdrop-blur-xl 
      border-b border-white/10
      shadow-2xl
      px-6 py-4
      flex items-center justify-between
    ">

      {/* Left: Brand */}
      <div className="flex items-center gap-4">
        <h1 className="text-white text-xl font-bold tracking-wide">
          <span className="text-purple-500">☁️</span> Maheshi<span className="text-purple-500">.dev</span>
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-3">
        <NavItem to="/" icon={<Home size={18} />} label="Home" />
        <NavItem to="/about" icon={<User size={18} />} label="About" />
        <NavItem to="/skills" icon={<Layers size={18} />} label="Skills" />
        <NavItem to="/projects" icon={<Folder size={18} />} label="Projects" />
        
        {/* Contact Button - Solid Gradient to pop */}
        <NavLink
          to="/contact"
          className="
            flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold
            bg-gradient-to-r from-purple-600 to-indigo-600
            hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]
            transition-all duration-300 transform hover:scale-105
          "
        >
          <Mail size={18} /> Contact
        </NavLink>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 rounded-full hover:bg-white/10 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="
          absolute top-full left-0 w-full 
          bg-[#0f0715]/95 backdrop-blur-2xl 
          border-b border-white/10
          shadow-lg md:hidden flex flex-col items-start p-6 gap-4 z-40
        ">
          <MobileNavLink to="/" icon={<Home size={18} />} label="Home" onClick={handleLinkClick} />
          <MobileNavLink to="/about" icon={<User size={18} />} label="About" onClick={handleLinkClick} />
          <MobileNavLink to="/skills" icon={<Layers size={18} />} label="Skills" onClick={handleLinkClick} />
          <MobileNavLink to="/projects" icon={<Folder size={18} />} label="Projects" onClick={handleLinkClick} />
          <MobileNavLink to="/contact" icon={<Mail size={18} />} label="Contact" onClick={handleLinkClick} primary />
        </div>
      )}
    </nav>
  );
};

// Desktop Nav Item
const NavItem = ({ to, icon, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `
      flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
      ${isActive 
        ? "bg-purple-600/20 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]" 
        : "text-gray-300 hover:text-white hover:bg-white/10"}
    `}
  >
    {icon}
    <span className="font-medium text-sm">{label}</span>
  </NavLink>
);

// Mobile Nav Item
const MobileNavLink = ({ to, icon, label, onClick, primary }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) => `
      flex items-center gap-3 px-5 py-3 rounded-2xl w-full justify-start transition-all
      ${primary 
        ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold" 
        : isActive 
          ? "bg-purple-600/20 text-purple-400 border border-purple-500/30" 
          : "text-gray-300 hover:bg-white/10"}
    `}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </NavLink>
);

export default Navbar;