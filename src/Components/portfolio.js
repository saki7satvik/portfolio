import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "WALLE",
    description: "An autonomous surveillance robot with object detection and motion tracking.",
    tech: ["Arduino", "RaspberryPi", "Python", "OpenCV"],
    github: "https://github.com/yourname/walle",
  },
  {
    title: "Humanoid",
    description: "A walking robot with face tracking and gesture responses.",
    tech: ["Servo", "OpenCV", "Python", "Arduino", "RaspberryPi", "jetson Nano"],
    github: "https://github.com/yourname/humanoid",
  },
  {
    title: "Lab Management System",
    description: "A web app to manage hardware and component inventory in college labs.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourname/lab-manager",
  },
  {
    title: "AI Question Generator",
    description: "Generates MCQs and theory questions from any text using LangChain + OpenAI.",
    tech: ["Python", "LangChain", "GPT-4"],
    github: "https://github.com/yourname/question-generator",
  },
  {
    title: "Bobotto Bot",
    description: "A Discord bot with fun games and AI-powered features.",
    tech: ["ESP32", "OpenAI API"],
    github: "https://github.com/yourname/bobotto",
  },
  {
    title: "Path Planner Bot",
    description: "A line-following robot with shortest-path algorithm and live map plotting.",
    tech: ["Python", "Arduino"],
    github: "https://github.com/yourname/path-bot",
  }
];

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">Your Name</div>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-600 transition">Skills</a>
            <a href="#experience" className="text-gray-600 hover:text-blue-600 transition">Experience</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white text-center`}>
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600">About</a>
          <a href="#skills" className="block py-2 text-gray-600 hover:text-blue-600">Skills</a>
          <a href="#experience" className="block py-2 text-gray-600 hover:text-blue-600">Experience</a>
          <a href="#projects" className="block py-2 text-gray-600 hover:text-blue-600">Projects</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-32 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">A passionate builder exploring AI, embedded systems, and full-stack development. Vice President at Build Club.</p>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I'm a third-year Computer Science student at Presidency University, Bengaluru, and the Vice President of the Build Club. I’m passionate about building things — from smart electronics to AI-driven apps — and I thrive on solving real-world problems creatively.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            I specialize in machine learning, embedded systems, and full-stack web development. I enjoy diving deep into new technologies, whether it’s training neural networks or crafting 3D designs for robotics.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            When I’m not coding or wiring up circuits, you’ll probably find me reading about finance, experimenting with Arduino hacks, or mentoring juniors in the club.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>MERN Stack, MySQL</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Machine Learning & AI</h3>
            <p>Scikit-learn, PyTorch, OpenCV, YOLO</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">NLP</h3>
            <p>NLTK, SciPy</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
            <p>Leadership, Communication, Event Management</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-white px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto bg-gray-100 shadow-lg rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Vice President & Intern – Build Club</h3>
          <p className="text-gray-600 text-sm">Jul 2023 – Present | Presidency University</p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>Led a team to build and showcase projects in AI, robotics, and web development.</li>
            <li>Organized hands-on workshops and mentorship sessions for junior members.</li>
            <li>Contributed to projects like a humanoid bot, AI question generator, and lab management system.</li>
            <li>Hosted and coordinated college hackathons and technical events.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div key={i} className="bg-white rounded-2xl shadow-md p-6"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-sm bg-gray-200 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              <a href={project.github} className="text-blue-600 hover:underline">GitHub</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-10 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h4 className="text-2xl font-semibold mb-4">Let's Connect</h4>
          <p className="mb-4 text-gray-300">Open to internships, collaborations, and cool ideas!</p>
          <div className="flex justify-center flex-wrap gap-6 mb-6 text-gray-300 text-lg">
            <span className="flex items-center gap-2"><FaPhoneAlt /> +91-9876543210</span>
            <a href="https://github.com/yourusername" target="_blank" className="flex items-center gap-2 hover:text-white"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" className="flex items-center gap-2 hover:text-white"><FaLinkedin /> LinkedIn</a>
            <a href="https://instagram.com/yourusername" target="_blank" className="flex items-center gap-2 hover:text-white"><FaInstagram /> Instagram</a>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
