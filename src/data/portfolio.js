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
      "Reduced manual intervention through automation and production workflow optimization."
    ],

    technologies: [
      "AGV",
      "Automation",
      "OPC",
      "Linux",
      "AWS",
      "JavaScript"
    ]
  }
];

export const projects = [
  {
    name: "WanderLust",
    category: "Full Stack Travel Accommodation Platform",
    github: "https://github.com/raghvendra-official/WanderLust",
    summary:
      "A travel accommodation platform built with MVC architecture, authenticated listing workflows, reviews, image storage, and location services.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Cloudinary",
      "Mapbox",
    ],
    points: [
      "Developed full-stack listing and review workflows using Node.js, Express.js, MongoDB, and EJS.",
      "Implemented authentication, authorization, and CRUD operations for travel listings.",
      "Integrated Cloudinary, Mapbox, and RESTful APIs for images, maps, and data management.",
    ],
  },
  {
    name: "CyberSentinels",
    category: "Cybersecurity Analysis Platform",
    github: "https://github.com/raghvendra-official/CyberSentinels",
    summary:
      "A cybersecurity platform with phishing detection, vulnerability assessment, intrusion monitoring, and a responsive analysis dashboard.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js"],
    points: [
      "Developed phishing detection, vulnerability assessment, and intrusion monitoring modules.",
      "Built an interactive dashboard with authentication and responsive UI components.",
      "Added real-time security analysis features for clearer monitoring workflows.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      "JavaScript",
      "C++",
      "HTML5",
      "CSS3",
      "SQL"
    ]
  },

  {
    title: "Frontend",
    items: [
      "React.js",
      "Bootstrap",
      "Redux",
      "Material UI",
      "EJS",
      "Responsive Design"
    ]
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "MVC Architecture"
    ]
  },

  {
    title: "Databases",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
      "AWS DynamoDB"
    ]
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
    ]
  },

  {
    title: "Tools & Platforms",
    items: [
      "GitHub",
      "VS Code",
      "Postman",
      "Cloudinary",
      "Mapbox",
      "Figma"
    ]
  }
];

export const education = [
  {
    school: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
    degree: "Bachelor of Technology in Electronics and Communication (GPA: 7.46)",
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
  },
];
