import React, { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

// Project images
import velouraImg from "../assets/veloura.jpeg";
import blossomImg from "../assets/blossom.jpeg";
import cookWithLoveImg from "../assets/cookingwithlove.jpeg";

const allProjects = [
  {
    title: "Veloura Clothing",
    tech: ["HTML", "CSS", "JS"],
    description: "E-commerce clothing platform with product listings, cart, and checkout functionality.",
    image: velouraImg,
    link: "#"
  },
  {
    title: "Blossom Flower Shop",
    tech: ["React", "Tailwind", "React Router"],
    description: "Flower shop website with product showcase, order placement, and contact form.",
    image: blossomImg,
    link: "#"
  },
  {
    title: "CookWithLove",
    tech: ["React", "Vite", "EmailJS", "Lucide"],
    description: "Recipe sharing platform with search, favorites, and email contact features.",
    image: cookWithLoveImg,
    link: "#"
  }
];

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    if (visibleCount >= allProjects.length) {
      alert("All projects are currently displayed!");
    } else {
      setVisibleCount(prev => Math.min(prev + 3, allProjects.length));
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center pt-24 pb-20 bg-[#0f0715] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-400">
          Featured Projects
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl px-6 relative z-10">
        {allProjects.slice(0, visibleCount).map((project, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500 flex flex-col"
          >
            {/* Image Container with Overlay */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0715] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h2>
              
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* View Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:border-transparent transition-all duration-300 group/btn"
              >
                View Project <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allProjects.length && (
        <button
          onClick={handleLoadMore}
          className="mt-16 group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-white/5 border border-white/10 hover:border-purple-500/50 backdrop-blur-md transition-all active:scale-95"
        >
          Explore More 
          <div className="p-1 bg-purple-500 rounded-full group-hover:translate-x-2 transition-transform">
            <ArrowRight size={18} />
          </div>
        </button>
      )}
    </div>
  );
};

export default Projects;