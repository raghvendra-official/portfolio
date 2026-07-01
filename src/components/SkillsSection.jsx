import { skillGroups } from "../data/portfolio";
import "../styles/Skills.css";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaTools,
  FaAws,
  FaGitAlt,
  FaFigma,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiGithub,
  SiPostman,
  SiCloudinary,
} from "react-icons/si";

import {
  MdOutlineDesignServices,

} from "react-icons/md";



const icons = {
  "Programming Languages": <FaCode />,
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Databases: <FaDatabase />,
  "Cloud & DevOps": <FaCloud />,
  "Tools & Platforms": <FaTools />,
};

const skillIcons = {
  // Programming
  "JavaScript": <SiJavascript />,
  "C++": <SiCplusplus />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss />,
  "SQL": <FaDatabase />,

  // Frontend
  "React.js": <SiReact />,
  "Bootstrap": <SiBootstrap />,
  "Redux": <SiRedux />,
  "Material UI": <FaLaptopCode />,
  "EJS": <FaCode />,
  "Responsive Design": <FaLaptopCode />,

  // Backend
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "REST APIs": <FaServer />,
  "JWT Authentication": <FaShieldAlt />,
  "MVC Architecture": <FaProjectDiagram />,

  // Database
  "MongoDB": <SiMongodb />,
  "MongoDB Atlas": <SiMongodb />,
  "MySQL": <SiMysql />,
  "AWS DynamoDB": <FaDatabase />,

  // Cloud & DevOps
  "AWS EC2": <FaAws />,
  "AWS S3": <FaAws />,
  "AWS IAM": <FaAws />,
  "AWS VPC": <FaAws />,
  "AWS Amplify": <FaAws />,
  "Docker": <SiDocker />,
  "Docker Compose": <SiDocker />,
  "Terraform": <SiTerraform />,
  "Ansible": <SiAnsible />,
  "GitHub Actions": <SiGithub />,
  "CI/CD": <FaCode />,
  "Linux": <SiLinux />,

  // Tools
  "GitHub": <SiGithub />,
  "VS Code": <FaCode />,
  "Postman": <SiPostman />,
  "Cloudinary": <SiCloudinary />,
  "Mapbox": <FaMapMarkedAlt />,
  "Figma": <FaFigma />,
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
                  <span className="skill-pill-icon">
                    {skillIcons[skill]}
                  </span>

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
