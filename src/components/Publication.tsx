export default function Publication() {
  const publication = {
    title:
      "A Hybrid AI-Powered Resume Screening Framework Using Semantic Similarity and Keyword Intelligence",
    journal:
      "Galaxy Link – International Multidisciplinary Research Journal (2025–26)",
    description:
      "Proposed a hybrid AI framework combining semantic similarity (SBERT) with keyword-based filtering to improve resume screening accuracy.",
    highlights: [
      "Improved candidate-job matching accuracy",
      "Reduced manual screening effort",
      "Designed scalable and efficient evaluation system",
    ],
    paperLink: "https://tinyurl.com/54bztnbe",
    certificateLink: "https://tinyurl.com/3725ctyb",
  };

  return (
    <section id="publication" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <p className="text-purple-400 text-sm tracking-widest mb-2">
          PUBLICATION
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          Research <span className="text-purple-400">Work</span>
        </h2>

        {/* CARD */}
        <div className="border border-gray-800 rounded-2xl p-6 hover:border-purple-400 transition">

          {/* TITLE */}
          <h3 className="text-xl font-semibold leading-snug">
            {publication.title}
          </h3>

          {/* JOURNAL */}
          <p className="text-gray-400 text-sm mt-2">
            {publication.journal}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-4">
            {publication.description}
          </p>

          {/* HIGHLIGHTS */}
          <ul className="mt-4 space-y-2 text-gray-300 text-sm">
            {publication.highlights.map((point, i) => (
              <li key={i}>• {point}</li>
            ))}
          </ul>

          {/*  LINKS  */}
          <div className="flex flex-wrap gap-4 mt-6">

            {/* PAPER LINK */}
            <a
              href={publication.paperLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full 
              bg-purple-500/10 text-purple-400 border border-purple-500/30 
              hover:bg-purple-500/20 transition"
            >
              View Research Paper →
            </a>

            {/* CERTIFICATE LINK */}
            <a
              href={publication.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-full 
              bg-gray-800 text-gray-300 border border-gray-700 
              hover:border-purple-400 hover:text-white transition"
            >
              View Certificate →
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}