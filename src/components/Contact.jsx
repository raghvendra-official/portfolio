import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div>
        <p className="eyebrow">Contact</p>
        <h2>Let us build something useful.</h2>
        <p>
          Based in {profile.location}, with hands-on experience in full stack
          applications, cloud tooling, and automation systems.
        </p>
      </div>

      <div className="contact-actions">
        <a className="button button-primary" href={`mailto:${profile.email}`}>
          Email Me
        </a>
        <a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="button button-secondary" href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
