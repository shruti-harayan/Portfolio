import Reveal from "./Reveal";

export default function Education() {
  const education = [
    {
      degree: "M.Sc. Information Technology",
      institute: "Ramanand Arya D.A.V College, Mumbai University",
      grade: "9.5 CGPA",
      year: "2024 – 2026",
    },
    {
      degree: "B.Sc. Information Technology",
      institute: "Ramanand Arya D.A.V College, Mumbai University",
      grade: "9.88 CGPA",
      year: "2021 – 2024",
    },
    {
      degree: "HSC (Commerce)",
      institute: "Mumbai",
      grade: "96.33%",
      year: "2021",
    },
    {
      degree: "SSC",
      institute: "Mumbai",
      grade: "87.20%",
      year: "2019",
    },
  ];

  return (
    <section id="education" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <p className="text-purple-400 text-sm tracking-widest mb-2">
          EDUCATION
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Academic <span className="text-purple-400">Background</span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-800 pl-8 space-y-10">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="relative">
                {/* CONTENT */}
                <div className="flex flex-col gap-1">
                  {/* SINGLE LINE (MAIN) */}
                  <div className="flex flex-wrap items-center gap-2 text-sm md:text-base">
                    <span className="text-purple-400 font-semibold text-lg">
                      {edu.grade}
                    </span>

                    <span className="text-gray-500">•</span>

                    <span className="font-medium">{edu.degree}</span>

                    <span className="text-gray-500">•</span>

                    <span className="text-gray-400">
                      {edu.institute} • {edu.year}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
