// Single source of truth for all portfolio content.
// Edit values here; components render whatever is configured.

export const profile = {
  name: "Shailendra Kumar Bharti",
  shortName: "S. K. Bharti",
  title: "Java Backend / Full Stack Developer",
  summary:
    "Associate Software Engineer with 3+ years of experience in Java, Spring Boot and microservices. Experienced in building REST APIs, improving system performance, and implementing secure, cloud-based solutions using AWS and Kafka. Experience across healthcare and investment domain applications.",
  email: "shailendrabharti8668@gmail.com",
  phoneDisplay: "+91-9580733077",
  phoneHref: "tel:+919580733077",
  linkedin: "https://www.linkedin.com/in/shailendra-bharti-0830531b0/",
  linkedinHandle: "in/shailendra-bharti",
  github: "https://github.com/Shailendra-Nutrino-Op",
  githubHandle: "Shailendra-Nutrino-Op",
  // The actual PDF must be placed at public/resume.pdf
  resumeHref: "/resume.pdf",
  resumeFileName: "Shailendra-Kumar-Bharti-Resume.pdf",
} as const;

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export type Metric = {
  value: string;
  label: string;
  context: string;
  source: string;
};

export const metrics: Metric[] = [
  {
    value: "35%",
    label: "Improvement in API response time",
    context: "Authentication-Driven Polling System",
    source: "Personal project · as reported in resume",
  },
  {
    value: "40%",
    label: "Less audit-related support effort",
    context: "Centralized audit dashboard capturing 100% of DML activity",
    source: "MMIS · Infinite Computer Solution",
  },
  {
    value: "30%",
    label: "Faster SQL query execution",
    context: "15+ complex queries optimised via indexing and refactoring",
    source: "MMIS · Infinite Computer Solution",
  },
];

export type Experience = {
  index: string;
  company: string;
  location: string;
  title: string;
  dates: string;
  project: string;
  domain: string;
  highlights: string[];
  responsibilities: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    index: "01",
    company: "Accenture Solutions Pvt Ltd",
    location: "Pune",
    title: "Software Engineer",
    dates: "Apr 2026 – Present",
    project: "ICON — Retirement Plan Administration System",
    domain: "Investment domain",
    highlights: [],
    responsibilities: [
      "Built REST APIs and scalable backend features using Java, Spring Boot and GenAI.",
      "Developed retirement plan administration features involving Spring Boot and Kafka.",
      "Supported code quality through JUnit unit testing, L1 integration testing and Jenkins CI builds.",
      "Collaborated with Product Owners in an Agile Scrum environment.",
    ],
    stack: ["Java", "Spring Boot", "Kafka", "GenAI", "JUnit", "Jenkins"],
  },
  {
    index: "02",
    company: "Infinite Computer Solution",
    location: "Bengaluru",
    title: "Associate Software Engineer",
    dates: "Aug 2023 – Apr 2026",
    project: "MMIS — Medicaid Management Information System",
    domain: "Healthcare services domain",
    highlights: [
      "Built a centralized audit dashboard capturing 100% of DML activities, reducing audit-related support effort by 40%.",
      "Optimized 15+ complex SQL queries through indexing and query refactoring — a 30% reduction in execution time.",
    ],
    responsibilities: [
      "Engineered application modules with event-driven microservices and REST APIs.",
      "Mentored junior developers through code reviews and pair programming.",
      "Collaborated with onsite and offshore teams.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Kafka",
      "REST APIs",
      "ReactJS",
      "SQL",
      "JPA",
      "Hibernate",
      "Oracle",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & frameworks",
    items: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Spring Data JPA",
      "J2EE",
      "ReactJS",
      "GenAI",
      "AIDLC",
    ],
  },
  { title: "Databases & caching", items: ["Oracle", "MySQL", "Redis", "MongoDB"] },
  {
    title: "Cloud, DevOps & CI/CD",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Docker", "Jenkins", "Git", "Maven"],
  },
  {
    title: "APIs & messaging",
    items: ["REST APIs", "Apache Kafka", "RabbitMQ", "WebSocket", "Microservices"],
  },
  {
    title: "Testing, monitoring & tools",
    items: [
      "JUnit",
      "Mockito",
      "Postman",
      "Swagger",
      "Grafana",
      "Prometheus",
      "Jira",
      "SonarQube",
      "Log4j",
    ],
  },
];

export type Project = {
  index: string;
  name: string;
  type: string;
  description: string;
  outcome?: string | undefined;
  problem: string;
  implementation: string;
  authentication?: string | undefined;
  technologies: string[];
  /** Set only to a real repository URL. Leave undefined to hide the link. */
  repoUrl?: string | undefined;
  /** Set only if a real live demo exists. */
  demoUrl?: string | undefined;
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Authentication-Driven Polling System",
    type: "Personal project",
    description:
      "A polling application built with Spring Boot and RESTful APIs, featuring JWT-based authentication.",
    outcome: "35% improvement in API response time, as stated in my resume.",
    problem:
      "A poll is only meaningful when every vote is tied to a verified user. The aim was a polling backend where creating polls and casting votes require authentication, exposed through a clean, predictable REST interface.",
    implementation:
      "A Spring Boot application exposing RESTful endpoints for poll and vote operations, with authentication enforced at the API layer so protected endpoints only respond to verified users.",
    authentication:
      "JWT-based: a user signs in and receives a signed token, which accompanies subsequent API requests so the server can verify identity on each call without holding session state.",
    technologies: ["Spring Boot", "REST APIs", "JWT"],

  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "Gita Autonomous College, Bhubaneswar",
  dates: "2019 – 2023",
  cgpa: "8.4 / 10.0",
  coursework: ["Data Structures", "DBMS", "Software Engineering"],
};

export const certifications = [
  "Company appreciation certificates for technical excellence and teamwork",
  "Spring Boot Essentials 2.0",
  "Microservices Design Patterns",
  "Solved 100+ DSA problems on CodeChef",
];
