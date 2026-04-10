import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const roles = ["Python Developer", "Full Stack Developer", "Software Engineer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="flex items-center max-w-6xl mx-auto px-6 pt-28 pb-16">

      {/* LEFT SIDE */}
      <div className="max-w-xl">

        <p className="text-purple-400 tracking-widest text-sm mb-4">
          About Me
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          <span className="text-white">SHRUTI </span>
          <span className="bg-linear-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            HARAYAN
          </span>
        </h1>

        <h2 className="text-purple-400 text-xl mt-6">
          I design, develop, test, and maintain software applications and systems using engineering principles.
        </h2>

        {/* Typing */}
        <p className="text-gray-300 text-lg mt-2 h-6">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        {/* Stats */}
        <p className="text-gray-400 mt-6 text-sm">
          MSc IT • Academic Topper • Software Engineer • Full Stack Developer
        </p>

        {/* Quote */}
        <p className="border-l-2 border-purple-400 pl-4 mt-6 text-gray-300 italic">
          I build fast, clean, production-ready applications — not just projects.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-8">

          <a
            href="/Resume.pdf"
            className="px-6 py-3 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 text-white font-medium hover:opacity-90"
          >
            VIEW RESUME
          </a>

          {/* Socials */}
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="https://github.com/shruti-harayan">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/shruti-harayan">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block">

        <div className="relative">

          {/* Glow */}
          <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-2xl"></div>

          {/* Image */}
          <img
            src="/Profile.avif"
            alt="Shruti"
            className="relative w-[320px] h-100 object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}