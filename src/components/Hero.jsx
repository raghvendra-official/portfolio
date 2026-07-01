import heroGraphic from "../assets/hero.png";
import { profile } from "../data/portfolio";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCheck,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-copy">

        <div className="availability-badge">
          <span className="status-dot"></span>
          Available for Software Engineering Opportunities
        </div>

        <p className="eyebrow">
          Full Stack / Cloud / DevOps
        </p>

        <h1>{profile.name}</h1>

        <h2 className="hero-title">
          Software Engineer focused on full stack, cloud, and DevOps.
        </h2>

        <p className="hero-summary">
          {profile.summary}
        </p>

        <div className="tech-stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>AWS</span>
          <span>Docker</span>
          <span>Terraform</span>
          <span>Ansible</span>
        </div>

        <div className="hero-actions">

          <a
            className="button button-primary"
            href="#projects"
          >
            Explore Projects
            <FaArrowRight />
          </a>

          <a
            className="button button-secondary"
            href={profile.resumeUrl}
            download
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin />
          </a>

          <a href={`mailto:${profile.email}`} aria-label="Email Raghvendra">
            <FaEnvelope />
          </a>

        </div>

        

      </div>

      <div className="hero-panel">

        <img
          src={heroGraphic}
          alt="Developer Illustration"
          className="hero-graphic"
        />

        <div className="expertise-card">

          <h3>Core Expertise</h3>

          <ul>
            {[
              "Full Stack Development",
              "Cloud Architecture",
              "DevOps Automation",
              "REST API Development",
              "Database Design",
              "CI/CD Pipelines",
            ].map((item) => (
              <li key={item}>
                <FaCheck aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}
