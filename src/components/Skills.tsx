import { useState } from "react";
import {
  SiJavascript,
  SiPython,
  SiTypescript,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss,
  SiFastapi,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGit,
  SiJupyter,
} from "react-icons/si";
import Reveal from "./Reveal";

const skillsData = [
  { name: "JavaScript", icon: <SiJavascript />, category: "Languages" },
  { name: "Python", icon: <SiPython />, category: "Languages" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Languages" },
  { name: "C++", icon: <SiCplusplus />, category: "Languages" },

  { name: "React", icon: <SiReact />, category: "Frontend" },
  { name: "HTML", icon: <SiHtml5 />, category: "Frontend" },
  { name: "CSS", icon: <SiCss />, category: "Frontend" },

  { name: "FastAPI", icon: <SiFastapi />, category: "Backend" },
  { name: "Flask", icon: <SiFlask />, category: "Backend" },

  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
  { name: "MySQL", icon: <SiMysql />, category: "Database" },
  { name: "SQLite", icon: <SiSqlite />, category: "Database" },

  { name: "Git", icon: <SiGit />, category: "Tools" },
  { name: "Jupyter", icon: <SiJupyter />, category: "Tools" },
];

const filters = [
  "All",
  "Languages",
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === active);

  return (
    <section id="tech" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="text-purple-400">Skills</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4 mb-12">
          {filters.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === f
                  ? "bg-linear-to-r from-purple-500 to-indigo-500 text-white"
                  : "border border-gray-700 text-gray-400 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((skill, i) => (
            <Reveal key={i} delay={i * 0.05}>
            <div
              className="group relative bg-[#0b0f14] border border-[#1f2937] rounded-2xl p-6 flex flex-col items-center justify-center transition duration-300 hover:border-purple-400 hover:-translate-y-1"
            >
              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-300 bg-purple-500 blur-xl"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-3xl text-purple-400 mb-4 transition group-hover:scale-110">
                  {skill.icon}
                </div>

                <p className="text-gray-300 text-sm">{skill.name}</p>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
