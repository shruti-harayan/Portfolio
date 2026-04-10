import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white text-center"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Let’s Build Something{" "}
          <span className="text-purple-400">Great Together</span>
        </h2>

        {/* SUBTEXT */}
        <p className="mt-6 text-gray-400 text-lg">
          I’m currently looking for opportunities where I can contribute,
          learn, and grow as a software engineer.
        </p>

        {/* EMAIL BUTTON */}
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=shrutiharayan06@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-8 px-8 py-3 rounded-full 
  bg-linear-to-r from-purple-500 to-indigo-500 
  text-white font-medium transition 
  hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]"
>
  Get In Touch
</a>

        {/* EMAIL TEXT */}
        <p className="mt-4 text-gray-500 text-sm">
          or reach out at{" "}
          <span className="text-gray-300">
            shrutiharayan06@gmail.com
          </span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex justify-center gap-6 mt-8 text-xl text-gray-400">

          <a
            href="https://github.com/shruti-harayan"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/shruti-harayan"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* FOOTER */}
        <p className="mt-12 text-gray-600 text-sm">
          © {new Date().getFullYear()} Shruti Harayan. All rights reserved.
        </p>

      </div>
    </section>
  );
}