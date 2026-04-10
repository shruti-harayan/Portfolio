import Reveal from "./Reveal";

export default function Experience() {
  const experience = [
    {
      title: "College Enquiry Chatbot",
      type: "Internship Project | Company Name:India Tech International",
      tech: [
        "Flask(Python)",
        "Dialogflow",
        "FastAPI",
        "Railway Deployment",
        "HTML",
        "CSS",
        "JavaScript",
        "Google Cloud Console",
      ],
      github: "https://github.com/shruti-harayan/college-enquiry-chatbot",
      period: "Mar 2025 – Apr 2025",
      points: [
        "Reduced manual support workload by 60%",
        "Integrated Dialogflow with backend APIs",
        "Deployed scalable chatbot system on cloud",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}

        <h2 className="text-4xl md:text-5xl font-semibold mb-10">
          Internship <span className="text-purple-400">Experience</span>
        </h2>

        {/* TIMELINE */}
        <div className="relative border-l border-gray-800 pl-8">
          {experience.map((item, i) => (
            <Reveal key={i}>
              <div className="relative pb-10">
                {/* CONTENT */}
                <div>
                  {/* TITLE */}
                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  {/* META */}
                  <p className="text-sm text-gray-500 mt-1">
                    {item.type} • {item.period}
                  </p>

                  {/* POINTS */}
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                    {item.points.map((p, idx) => (
                      <li key={idx}>• {p}</li>
                    ))}
                  </ul>
                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {item.tech.map((t: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm font-medium rounded-full 
      bg-purple-500/10 text-purple-400 border border-purple-500/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GITHUB LINK */}
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm 
  text-gray-400 hover:text-purple-400 transition"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
