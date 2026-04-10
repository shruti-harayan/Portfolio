import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";

type Project = {
  title: string;
  type: string;
  date: string;
  desc: string;
  tech: string[];   
  github: string;
  points: string[];
};
export default function Projects() {
  const projects: Project[] = [
    {
      title: "GradeFlow- College focused Grading & Marks Management System",
      type: "Full Stack Project",
      date: "Nov 2025 – Feb 2026",
      desc: "Academic management system replacing Excel workflows.",
      tech: ["React", "FastAPI", "PostgreSQL", "JWT", "REST APIs", "Tailwind CSS", "Typescript"],
      github: "https://github.com/shruti-harayan/gradeflow",
      points: [
        "Reduced manual errors by 70%",
        "Improved processing time by 40%",
        "Built role-based authentication and workflows",
      ],
    },
    {
      title: "CVisionary- AI Powered Resume Analyzer",
      type: "Research-based Project",
      date: "Jul 2025 – Sep 2025",
      desc: "NLP-based resume screening system using SBERT.",
      tech: ["Python", "FastAPI", "SBERT", "React", "Javascript", "SQLite", "REST APIs", "JWT"],
      github: "https://github.com/shruti-harayan/ai-resume-analyzer",
      points: [
        "Improved matching accuracy by 30% using SBERT",
        "Reduced manual screening effort by 50%",
        "Built semantic similarity scoring system",
      ],
    },
    {
      title: "Book Buffet",
      type: "Desktop Application",
      date: "Aug 2023 – Jan 2024",
      desc: "Library management system for efficient cataloging and tracking.",
      tech: ["Python", "Tkinter", "SQLite"],
      github: "https://github.com/shruti-harayan/book-buffet",
      points: [
        "Reduced manual workload by 60%",
        "Implemented issue/return tracking system",
        "Improved data access speed by 35%",
      ],
    },
  ];
  return (
    <Reveal>
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Project <span className="text-purple-400">Work</span>
        </h2>

        {/* LIST */}
        <div className="space-y-12">
          {projects.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
            <div className="border-b border-gray-800 pb-10">
              {/* HEADER ROW */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold hover:text-purple-400 transition">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {p.type} • {p.date}
                  </p>
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  className="text-gray-400 hover:text-white text-lg"
                >
                  <FaGithub />
                </a>
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-300 mt-3 max-w-xl">{p.desc}</p>

              {/*  TECH STACK (NEW DESIGN) */}
              <div className="flex flex-wrap gap-3 mt-4">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* IMPACT */}
              <ul className="mt-5 space-y-2 text-gray-300 text-sm">
                {p.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}
