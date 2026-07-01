import { certifications } from "../data/portfolio";
import "../styles/Certifications.css";

import githubBadge from "../assets/github-foundations.png";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section section-muted">
      <div className="section-header">
        <p className="eyebrow">CERTIFICATIONS</p>
        <h2>Professional Certifications</h2>
        <p className="section-description">
          Industry-recognized certifications demonstrating expertise in software
          development, version control, cloud technologies, and modern
          engineering practices.
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="cert-card">
            <div className="cert-badge">
              <img src={githubBadge} alt="GitHub Foundations Certification" />
            </div>
            <div className="cert-content">
              <div className="meta-line">

<span>{cert.issuer}</span>

<span>Issued {cert.date}</span>

</div>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-button"
              >
                View Credential →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
