import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <p className="eyebrow">Experience</p>
        <h2>Industrial automation experience with software and systems work.</h2>
      </div>

      <div className="experience-list">
        {experience.map((company) => (
          <article key={company.company} className="experience-card">
            <div className="experience-heading">
              <div>
                <h3>{company.company}</h3>
                <p>{company.designation} - {company.location}</p>
              </div>
              <span>{company.period}</span>
            </div>

            <p className="experience-summary">{company.summary}</p>

            <div className="achievement-list">
              {company.achievements.map((achievement) => (
                <div key={achievement} className="achievement">
                  {achievement}
                </div>
              ))}
            </div>

            <div className="role-block">
              <div className="role-heading">
                <h4>Tools and systems</h4>
              </div>
              <div className="tag-list">
                {company.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
