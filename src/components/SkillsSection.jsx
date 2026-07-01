import { skillGroups } from "../data/portfolio";
import "../styles/Skills.css";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
} from "react-icons/fa";

const icons = {
  "Programming Languages": <FaCode />,
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Databases: <FaDatabase />,
  "Cloud & DevOps": <FaCloud />,
  "Tools & Platforms": <FaTools />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <p className="eyebrow">TECH STACK</p>

        <h2>Technologies I Work With</h2>

        <p className="section-description">
          Full Stack Development, Cloud Computing, DevOps and Modern Software
          Engineering.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <div className="skill-title">
              <span className="skill-title-icon">
                {icons[group.title]}
              </span>

              <h3>{group.title}</h3>
            </div>

            <div className="skill-list">
              {group.items.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
