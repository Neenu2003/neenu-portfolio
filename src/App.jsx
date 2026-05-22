import "./App.css"
import { useState } from "react"
function App() {
   const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="portfolio">

      <nav className="navbar">

  <h2 className="logo">Neenu</h2>

  <div
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </div>

  <ul className={menuOpen ? "nav-links active" : "nav-links"}>

    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>

  </ul>

</nav>
      {/* Hero Section */}
      <section id="home" className="hero">

        <div className="hero-text">

          <h1>Hi, I'm Neenu 👋</h1>

          <h2>React Front-End Developer</h2>

          <p>
            Passionate Front-End Developer skilled in building
            responsive and scalable web applications using
            React.js, Redux, REST APIs, and modern frontend technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects">
              <button>View Projects</button>
            </a>

            <a href="/resume.pdf" download>
              <button className="resume-btn">
                Download Resume
              </button>
            </a>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
          />
        </div>

      </section>

      {/* About */}
      <section id="about" className="about">

        <h2>About Me</h2>

        <p>
          I am a passionate Front-End Developer with experience
          in React.js, Redux, REST APIs, and responsive web design.
          I enjoy creating clean, user-friendly interfaces and
          continuously improving my frontend development skills.
        </p>

      </section>

      {/* Skills */}
      <section id="skills" className="skills">

        <h2>Skills</h2>

        <div className="skill-container">

          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React.js</div>
          <div className="skill-card">Redux</div>
          <div className="skill-card">Bootstrap</div>
          <div className="skill-card">Git</div>
          <div className="skill-card">GitHub</div>
          <div className="skill-card">Axios</div>
          <div className="skill-card">REST APIs</div>

        </div>

      </section>

      {/* Experience */}
      <section id="experience" className="experience">

        <h2>Experience</h2>

        <div className="experience-card">

          <h3>React.js Intern</h3>

          <h4>A-Team Soft Solutions</h4>

          <p>Jan 2025 – May 2025</p>

          <ul>
            <li>Built reusable React.js components</li>
            <li>Integrated REST APIs using Axios</li>
            <li>Worked with Redux state management</li>
            <li>Designed responsive user interfaces</li>
            <li>Used Git and GitHub for version control</li>
          </ul>

        </div>

      </section>

      {/* Projects */}
      <section id="projects" className="projects">

        <h2>Projects</h2>

        <div className="project-container">

          <div className="project-card">

            <h3>E-Kart Web Application</h3>

            <p>
              Responsive e-commerce application with product listing,
              checkout, JWT authentication, live search,
              and order tracking.
            </p>

            <div className="tech-stack">
              <span>React.js</span>
              <span>Redux</span>
              <span>Axios</span>
              <span>JWT</span>
            </div>

            <button>Live Demo</button>

          </div>

          <div className="project-card">

            <h3>Student Management System</h3>

            <p>
              Admin and student dashboard system with
              authentication, registration forms,
              and profile management.
            </p>

            <div className="tech-stack">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>GitHub</span>
            </div>

            <button>Live Demo</button>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section id="contact" className="contact">

        <h2>Contact Me</h2>

        <div className="contact-box">

          <p>📧 Email: neenunn2003@gmail.com</p>

          <p>📍 Tamil Nadu, India</p>

          {/* <p>💻 GitHub: github.com/yourgithub</p> */}

          {/* <p>🔗 LinkedIn: linkedin.com/in/yourlinkedin</p> */}

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">

        <p>
          © 2026 Neenu | Front-End Developer
        </p>

      </footer>

    </div>
  )
}

export default App