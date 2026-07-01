import { education } from "../data/portfolio";
import "../styles/Education.css";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <div className="section-header">
        <p className="eyebrow">Education</p>
        <h2>Engineering foundation with consistent technical focus.</h2>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article key={item.school} className="timeline-item">
            <div className="timeline-marker" aria-hidden="true"></div>
            <div className="timeline-content">
              <div>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
              </div>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
