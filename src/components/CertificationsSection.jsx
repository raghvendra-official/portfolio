import { certifications } from "../data/portfolio";
import "../styles/Certifications.css";

export default function CertificationsSection() {
  return (
    <section id="certifications" className="section section-muted">
      <div className="section-header">
        <p className="eyebrow">Certification</p>
        <h2>Validated GitHub fundamentals for collaborative engineering.</h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="cert-card">
            <div className="cert-badge" aria-hidden="true">
              GH
            </div>
            <div className="cert-content">
              <p className="meta-line">
                {cert.issuer} - {cert.date}
              </p>
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
