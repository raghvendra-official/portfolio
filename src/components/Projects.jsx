import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section section-accent">
      <div className="section-header">
        <p className="eyebrow">Projects</p>
        <h2>Applied full stack work across travel and cybersecurity platforms.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-topline">
              <span>{project.category}</span>
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>

            <ul className="project-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="tag-list" aria-label={`${project.name} tech stack`}>
              {project.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
