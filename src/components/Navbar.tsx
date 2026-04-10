import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black/60 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* NAME */}
        <h1 className="text-xl font-semibold text-white">
          PORTFOLIO <span className="text-purple-400"></span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#tech" className="hover:text-white">Skills</a>
          <a href="#education" className="hover:text-white">Education</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* RESUME BUTTON */}
          <a
            href="/Resume.pdf"
            className="hidden md:block px-5 py-2 rounded-full text-sm font-medium bg-linear-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
          >
            View Resume
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-6 py-4 flex flex-col gap-4 text-gray-300">
          <a href="#tech">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/Resume.pdf" className="text-purple-400">View Resume</a>
        </div>
      )}
    </nav>
  );
}