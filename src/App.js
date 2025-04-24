import React, { useState } from "react";
import "./App.css";
import { Link as ScrollLink } from 'react-scroll';
import myImage from "./me.png"; // Adjust the path as necessary

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Satvik K R</div>
        <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <ScrollLink 
                to="hero" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
                to="about" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
                to="projects" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
                to="skills" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
                to="experience" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              Experience
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
                to="contact" 
                smooth={true} 
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="nav-link"
              >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Satvik K R</span></h1>
          <p className="subtitle">Full Stack Developer | AI Enthusiast | Electronics Hobbyist</p>
          <div className="hero-buttons">
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="btn primary"
            >
              View My Work
            </ScrollLink>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="btn secondary"
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a 3rd year Computer Science student at Presidency University Bengaluru with a passion for building innovative solutions. My expertise spans across web development, machine learning, and embedded systems.
              </p>
              <p>
                When I'm not coding, you can find me exploring 3D design, learning about economics, or tinkering with electronics.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <img src={myImage} alt="About Me" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <div className="section-container">
          <h2 className="section-title">My Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Wall-E</h3>
              <p>**Wall-E** is a semi-automatic robotic project powered by Jetson Nano, Arduino Mega, and ESP32. It uses YOLO for object detection, NLP with spaCy, and OpenAI's Gen AI for interactive responses. Wall-E can detect objects, follow humans, and answer questions intelligently.</p>
              <div className="project-tags">
                <span>Jetson Nano</span>
                <span>YOLO</span>
                <span>OpenAI</span>
                <span>spaCy</span>
                <span>Arduino</span>
                <span>ESP32</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Humanoid</h3>
              <p>Humanoid Bot is a stationary robot powered by Jetson Nano, Arduino Mega, and ESP32, with YOLO, spaCy, and OpenAI API for perception and interaction. It can recognize objects, follow faces, answer questions, and perform hand gestures like waving, counting, and greeting.</p>
              <div className="project-tags">
              <span>Jetson Nano</span>
                <span>YOLO</span>
                <span>OpenAI</span>
                <span>spaCy</span>
                <span>Arduino</span>
                <span>ESP32</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Lab Management System</h3>
              <p><bold>Lab Management System</bold> is a smart web platform where students can request/return components and get AI-generated project ideas. It also assists lab instructors in tracking inventory and managing records efficiently.</p>
              <div className="project-tags">
                <span>MERN</span>
                <span>MongoDB</span>
                <span>Python Flask</span>
                <span>OpenAI</span>
              </div>
            </div>
            <div className="project-card">
              <h3>AI Question Generator</h3>
              <p><bold>AI Question Generator</bold> is a React + FastAPI app designed for placement prep, where students can take quizzes on selected topics. Questions are generated and evaluated by AI for a personalized learning experience.</p>
              <div className="project-tags">
                <span>NLP</span>
                <span>OpenAI</span>
                <span>LangChain</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Bobotto Bot</h3>
              <p>NLP-powered chatbot for answering student queries about campus information.</p>
              <div className="project-tags">
                <span>Chatbot</span>
                <span>NLTK</span>
                <span>Python</span>
              </div>
            </div>
            <div className="project-card">
              <h3>Path Planner Bot</h3>
              <p>Autonomous robot that navigates using computer vision for pathfinding.</p>
              <div className="project-tags">
                <span>Computer Vision</span>
                <span>Raspberry Pi</span>
                <span>Pathfinding</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <div className="section-container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Web Development</h3>
              <div className="skill-items">
                <div className="skill-item">MERN Stack</div>
                <div className="skill-item">React.js</div>
                <div className="skill-item">Node.js</div>
                <div className="skill-item">MySQL</div>
                <div className="skill-item">MongoDB</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>AI/ML</h3>
              <div className="skill-items">
                <div className="skill-item">Python</div>
                <div className="skill-item">PyTorch</div>
                <div className="skill-item">Scikit-learn</div>
                <div className="skill-item">OpenCV</div>
                <div className="skill-item">YOLO</div>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other</h3>
              <div className="skill-items">
                <div className="skill-item">Arduino</div>
                <div className="skill-item">Raspberry Pi</div>
                <div className="skill-item">3D Design</div>
                <div className="skill-item">NLP/NLTK</div>
                <div className="skill-item">SciPy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience">
        <div className="section-container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2023 - Present</div>
              <div className="timeline-content">
                <h3>Vice President</h3>
                <h4>Build Club, Presidency University</h4>
                <p>
                  Led a team of 30+ members, organized hackathons and workshops, and mentored students on technical projects.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022 - 2023</div>
              <div className="timeline-content">
                <h3>Tech Intern</h3>
                <h4>Build Club</h4>
                <p>
                  Contributed to club projects, developed technical documentation, and assisted in event coordination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="footer">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p><i className="icon">📧</i> satvik75.official@gmail.com</p>
              <p><i className="icon">📱</i> +91 9876543210</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/satvik-kr-b926aa253/" target="_blank" rel="noreferrer">
                  <i className="icon">🔗</i> LinkedIn
                </a>
                <a href="https://github.com/saki7satvik" target="_blank" rel="noreferrer">
                  <i className="icon">🐱</i> GitHub
                </a>
                <a href="https://www.instagram.com/saki7satvik/" target="_blank" rel="noreferrer">
                  <i className="icon">📸</i> Instagram
                </a>
              </div>
            </div>
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
          </div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} Satvik. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;