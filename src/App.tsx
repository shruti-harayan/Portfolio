import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Publication from "./components/Publication";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white scroll-smooth">
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>
        {/* HERO */}
        <Hero />

        {/* SKILLS */}
        <Skills />

        {/* EXPERIENCE */}
        <Experience />

        {/* PROJECTS */}
        <Projects />

        <Education />
        <Achievements />
        <Publication />
        <Contact />
      </main>
    </div>
  );
}

export default App;
