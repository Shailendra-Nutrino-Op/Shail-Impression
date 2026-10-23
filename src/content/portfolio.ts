// Single source of truth for all portfolio content.
// Edit values here; components render whatever is configured.
import portraitSrc from "@/assets/shailendra-portrait.jpg";

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
  /** Resume hosted on Google Drive; opens in a new tab. */
  resumeHref:
    "https://drive.google.com/file/d/188R_E8MH3lpxfPSKyLgtHg0zDeyRsAiI/view?usp=sharing",
  portrait: {
    src: portraitSrc,
    alt: "Portrait of Shailendra Kumar Bharti",
  },
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
    context: "JWT-secured Spring Boot polling application",
    source: "Authentication-Driven Polling System",
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
  /** Optional public link for the project. */
  projectUrl?: string | undefined;
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
    projectUrl: "https://www.nhmmis.nh.gov/portals/wps/portal/EnterpriseHome",
    highlights: [
      "Built a centralized audit dashboard capturing 100% of DML activities, reducing audit-related support effort by 40%.",
      "Optimized 15+ complex SQL queries through indexing and query refactoring — a 30% reduction in execution time.",
    ],
    responsibilities: [
      "Engineered application modules with event-driven microservices and REST APIs.",
      "Worked on provider onboarding, secure REST APIs, batch processing and cloud-ready deployments.",
      "Mentored junior developers through code reviews and pair programming.",
      "Collaborated with onsite and offshore teams.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Kafka",
      "RabbitMQ",
      "REST APIs",
      "ReactJS",
      "SQL",
      "Spring Data JPA",
      "Hibernate",
      "Oracle",
      "Redis",
      "Docker",
      "AWS",
      "CI/CD",
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Backend & frameworks",
    items: [
      "Java 8",
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Spring Data JPA",
      "J2EE",
      "GenAI",
      "AIDLC",
    ],
  },
  {
    title: "Frontend",
    items: ["ReactJS", "Angular", "JavaScript", "Ant Design"],
  },
  { title: "Databases & caching", items: ["Oracle", "MySQL", "Redis", "MongoDB"] },
  {
    title: "Cloud, DevOps & CI/CD",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "Docker", "Jenkins", "Git", "Maven"],
  },
  {
    title: "APIs & messaging",
    items: ["REST APIs", "JWT", "Apache Kafka", "RabbitMQ", "WebSocket", "Microservices"],
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
      "A full-stack polling application with a Spring Boot REST backend, a React front end and JWT-based authentication.",
    outcome: "35% improvement in API response time.",
    problem:
      "A poll is only meaningful when every vote is tied to a verified user. The aim was a polling application where creating polls and casting votes require authentication, exposed through a clean, predictable REST interface.",
    implementation:
      "A Spring Boot backend exposes RESTful endpoints for poll and vote operations, secured with Spring Security and backed by MySQL. A React front end built with Ant Design consumes the API.",
    authentication:
      "JWT-based: a user signs in and receives a signed token, which accompanies subsequent API requests so the server can verify identity on each call without holding session state.",
    technologies: ["Spring Boot", "Spring Security", "JWT", "REST APIs", "React", "Ant Design", "MySQL"],
    repoUrl: "https://github.com/Shailendra-Nutrino-Op/authentication-driven-polling-system",
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering",
  institution: "Gita Autonomous College, Bhubaneswar",
  dates: "2019 – 2023",
  cgpa: "8.4 / 10.0",
  coursework: ["Data Structures", "DBMS", "Software Engineering"],
};

export type Certification = {
  name: string;
  issuer?: string | undefined;
  /** Set only to a real, verifiable certificate URL. */
  url?: string | undefined;
};

export const certifications: Certification[] = [
  {
    name: "Java Explorer Certification",
    issuer: "Oracle / Java · LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/e7c4e3ef846217164750226a5fbddd68796bea1b94ba14fbc3a43e50da9c3be8",
  },
  {
    name: "Spring Boot & Microservices Fundamentals",
    issuer: "LinkedIn Learning",
    url: "https://www.linkedin.com/learning/certificates/737932f32888a94c40ac196fbfb57d8585bf62a60e3d367d9d8fa03d6661aeb7",
  },
  { name: "Spring Boot Essentials 2.0" },
  { name: "Microservices Design Patterns" },
  { name: "Company appreciation certificates for technical excellence and teamwork" },
  { name: "Solved 100+ DSA problems on CodeChef" },
];
