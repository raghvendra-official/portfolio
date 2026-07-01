import wanderlustImg from "../assets/wanderlust.png";
import terraformImg from "../assets/terraform.png";
import ansibleImg from "../assets/ansible.png";
import cyberImg from "../assets/cybersentinels.png";

export const profile = {
  name: "Raghvendra Pandey",
  title: "Aspiring Software Engineer",
  location: "Noida, Uttar Pradesh",
  phone: "+91 6397325745",
  phoneHref: "+916397325745",
  email: "raghvendraofficials@gmail.com",
  linkedin: "https://linkedin.com/in/raghvendraofficial/",
  github: "https://github.com/raghvendra-official",
  resumeUrl: "/Raghvendra_Pandey_Resume.pdf",
  summary:
    "Aspiring Software Engineer with expertise in Full Stack Development, Cloud Technologies, and DevOps tools. Proficient in JavaScript, Node.js, Express.js, MongoDB, AWS, Docker, and Terraform, with experience developing end-to-end web applications and implementing automated systems.",
  highlights: [
    { value: "Full Stack", label: "React, Node.js, Express.js, MongoDB" },
    { value: "Cloud + DevOps", label: "AWS, Docker, Terraform, Ansible" },
    { value: "Automation", label: "AGV deployment and production workflows" },
  ],
};

export const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Certification", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const experience = [
  {
    company: "NMTronics India Pvt. Ltd.",
    designation: "Graduate Engineer Trainee (GET)",
    location: "Noida, India",
    period: "Feb 2025 – Jan 2026",

    summary:
      "Worked on industrial automation projects involving Automated Guided Vehicles (AGVs), production automation, server configuration, system integration, and deployment support for manufacturing environments.",

    achievements: [
      "Deployed and configured Automated Guided Vehicle (AGV) systems for production facilities.",
      "Configured AGV mapping, routing, server setup, and system integration.",
      "Monitored automation workflows and resolved deployment issues.",
      "Worked with SMT manufacturing systems including Pick-and-Place, AOI, SPI and Reflow Oven.",
      "Reduced manual intervention through automation and production workflow optimization.",
    ],

    technologies: ["AGV", "Automation", "OPC", "Linux", "AWS", "JavaScript"],
  },
];

export const projects = [
  {
    name: "WanderLust",
    image:wanderlustImg,
    category: "Full Stack • Cloud • DevOps",
    github: "https://github.com/raghvendra-official/WanderLust",
    live: "https://raghvendrap-portfolio.vercel.app/",

    summary:
    "A production-ready travel accommodation platform built using Node.js, Express.js, MongoDB, and EJS with secure authentication, cloud deployment, Infrastructure as Code, containerization, and automated CI/CD pipelines.",

  stack: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "EJS",
    "Bootstrap",
    "Cloudinary",
    "Mapbox",
    "Docker",
    "AWS EC2",
    "Terraform",
    "Ansible",
    "GitHub Actions"
  ],

  points: [
    "Developed a full-stack travel accommodation platform following the MVC architecture with authentication, authorization, reviews, and image management.",
    "Integrated Cloudinary for image storage and Mapbox APIs for interactive maps and geolocation.",
    "Containerized the application using Docker and deployed it on AWS EC2.",
    "Provisioned AWS infrastructure using reusable Terraform modules following Infrastructure as Code (IaC) principles.",
    "Automated server provisioning, application deployment, and service configuration using Ansible playbooks.",
    "Implemented a GitHub Actions CI/CD pipeline to automate build and deployment workflows."
  ]
  },

  {
    name:"Terraform AWS Infrastructure",
    image:terraformImg,
    category: "Infrastructure as Code",
    github: "https://github.com/raghvendra-official/terraform_aws",
    live: "",

    summary:
      "Reusable Terraform modules for provisioning scalable AWS infrastructure following Infrastructure as Code (IaC) principles.",

    stack: [
      "Terraform",
      "AWS",
      "EC2",
      "VPC",
      "Subnets",
      "Security Groups",
      "Internet Gateway"
    ],

    points: [
      "Created reusable Terraform modules following best practices.",
      "Provisioned EC2, VPC, Subnets and networking resources.",
      "Parameterized infrastructure using variables and outputs.",
      "Published Terraform modules to the Terraform Registry."
    ]
  },

  {
    name:"Ansible Automation",
    image:ansibleImg,
    category: "Configuration Management",
    github: "https://github.com/raghvendra-official/ansible_playbook",
    live: "",

    summary:
      "Automation scripts and Ansible playbooks for server provisioning, package management and configuration automation.",

    stack: [
      "Ansible",
      "Linux",
      "SSH",
      "YAML",
      "Apache",
      "Firewalld"
    ],

    points: [
      "Automated Linux server configuration using Ansible.",
      "Developed reusable playbooks and Ansible roles.",
      "Managed package installation and service configuration.",
      "Implemented Infrastructure Automation following DevOps practices."
    ]
  },

  {
    name: "CyberSentinels",
    image:cyberImg,
    category: "Cybersecurity Platform",
    github: "https://github.com/raghvendra-official/CyberSentinels",
    live: "",

    summary:
      "Cybersecurity platform providing phishing detection, vulnerability assessment and intrusion monitoring with a responsive dashboard.",

    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js"
    ],

    points: [
      "Developed phishing detection and vulnerability assessment modules.",
      "Built an interactive security dashboard.",
      "Implemented authentication and responsive user interface."
    ]
  }
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["JavaScript", "C++", "HTML5", "CSS3", "SQL"],
  },

  {
    title: "Frontend",
    items: [
      "React.js",
      "Bootstrap",
      "Redux",
      "Material UI",
      "EJS",
      "Responsive Design",
    ],
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MVC Architecture",
    ],
  },

  {
    title: "Databases",
    items: ["MongoDB", "MongoDB Atlas", "MySQL", "AWS DynamoDB"],
  },

  {
    title: "Cloud & DevOps",
    items: [
      "AWS EC2",
      "AWS S3",
      "AWS IAM",
      "AWS VPC",
      "AWS Amplify",
      "Docker",
      "Docker Compose",
      "Terraform",
      "Ansible",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },

  {
    title: "Tools & Platforms",
    items: ["GitHub", "VS Code", "Postman", "Cloudinary", "Mapbox", "Figma"],
  },
];

export const education = [
  {
    school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    degree:
      "Bachelor of Technology in Electronics and Communication (GPA: 7.46)",
    period: "Nov 2021 - June 2025",
    location: "Ghaziabad, India",
  },
  {
    school: "Neehar Meera National Senior Secondary School",
    degree: "Intermediate",
    period: "2020",
    location: "Aligarh, India",
  },
];

export const certifications = [
  {
    title: "GitHub Foundations Certification",
    issuer: "GitHub",
    date: "Jul 2024",
    description:
      "Validated foundational GitHub knowledge across repositories, collaboration, branching, markdown, and project workflows.",
    credential: "https://www.credly.com/badges/30a47c58-ea86-4061-8f5a-580ea0bc7422/public_url",
  },
];
