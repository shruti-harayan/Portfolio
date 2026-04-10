export default function Achievements() {
  const achievements = [
    "1st Rank – M.Sc IT (Part 1)",
    "2nd Rank – TY B.Sc IT & SY B.Sc IT",
    "1st Rank – FY B.Sc IT & HSC(12th)",
    "Subject Topper – Advanced Web Programming & Project Dissertation",
    "Resume Writing Competition Winner - 2nd Rank",
  ];

  return (
    <section id="achievements" className="py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <p className="text-purple-400 text-sm tracking-widest mb-2">
          ACHIEVEMENTS
        </p>

        <h2 className="text-4xl font-bold mb-12">
          Highlights & <span className="text-purple-400">Awards</span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">

          {achievements.map((item, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-xl p-5 hover:border-purple-400 transition"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}