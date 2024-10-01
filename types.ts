export interface ProjectData {
    repoName: string;
    customTitle: string;
    summary: string;
    technologies: Technology[];
  }

export interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    full_name: string;
  }

export interface RecommendationCardProps {
    reviewerName: string;
    jobTitle: string;
    date: string;
    relationship: string;
    reviewContent: string;
    imagePath: string;
  }
  
export interface ImageModalProps {
    isOpen: boolean;
    imageSrc: string;
    onClose: () => void;
  }

export interface ProjectData {
    repoName: string;
    customTitle: string;
    summary: string;
    technologies: Technology[];
  }
  
  export interface CustomProjectCardProps {
    customTitle: string;
    repoName: string;
    summary: string;
    html_url: string;
    technologies: Technology[];
  }
  
  export type Technology = keyof typeof badgeImages;
  
  export const badgeImages = {
    Cypress: "/badges/cypress.png",
    TypeScript: "/badges/typescript.png",
    Selenium: "/badges/selenium.png",
    Playwright: "/badges/playwright.png",
    PyTest: "/badges/pytest.svg",
    Python: "/badges/python.png",
    React: "/badges/react.png",
    Django: "/badges/django.png",
    Java: "/badges/java.png",
    JavaFX: "/badges/javafx.png",
    MySQL: "/badges/mysql.png",
    NextJS: "/badges/nextjs.svg",
    ExpressJS: "/badges/expressjs.png",
    NodeJS: "/badges/nodejs.png",
    MongoDB: "/badges/mongodb.png",
  } as const;

  export interface ElementSize{
    width: number;
    height: number;
  }

export interface Experience {
  company: string;
  position: string;
  duration: string;
  summary: string[];
  technologies: string[];
}

export interface Education {
  school: string;
  degree: string;
  graduationDate: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
  };
  education: {
    institution: string;
    degree: string;
    graduationDate: string;
  };
  experience: {
    company: string;
    role: string;
    duration: string;
    description: string[];
    technologies: string[];
  }[];
  projects: {
    title: string;
    description: string;
    repoUrl: string;
    technologies: string[];
  }[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
}

  