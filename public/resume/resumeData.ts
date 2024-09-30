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
  
  export const resumeData: ResumeData = {
    name: "Joseph Smith",
    contact: {
      email: "jsmith74265@gmail.com",
      phone: "(812) 314-1581",
      location: "Columbus, IN",
      linkedin: "https://linkedin.com/in/joseph-b-smith-eng",
      github: "https://github.com/j-b-smith",
    },
    education: {
      institution: "Western Governors University",
      degree: "Bachelor of Science in Software Development",
      graduationDate: "December 2020",
    },
    experience: [
      {
        company: "Aya Healthcare",
        role: "QA Engineer II",
        duration: "May 2023 – Present",
        description: [
          "Collaborated with product, engineering, and design teams to refine user stories and ensure well-defined acceptance criteria.",
          "Assisted in building out test coverage alongside new feature development, enhancing overall product quality.",
          "Performed manual regression testing and conducted bug triage to support the release process.",
          "Maintained and updated the test case repository to ensure comprehensive test coverage.",
          "Worked effectively in cross-functional teams across multiple time zones, fostering seamless collaboration.",
        ],
        technologies: ["PHP", "Selenium", "PHPUnit", "Behat", "JIRA", "Docker", "Ansible", "Composer", "DataDog", "Jenkins", "Postman", "PractiTest", "GitHub"],
      },
      {
        company: "Routable",
        role: "QA Engineer",
        duration: "October 2021 – January 2023",
        description: [
          "Played a crucial role in expanding B2B payments to over 220 countries using SWIFT and local payment systems.",
          "Assisted in increasing automation test coverage from 25% to 50% of the backlog over 3 months by designing and developing tests with Cypress and Playwright.",
          "Developed a test automation engine that reduced manual testing time from over 4 hours to less than 1 hour for new features involving international payments.",
        ],
        technologies: ["Cypress", "Playwright", "Python", "PyTest", "BDD", "TypeScript", "JIRA", "GitHub", "Postman", "TestRail"],
      },
      {
        company: "Sharpen",
        role: "QA Engineer",
        duration: "April 2021 – October 2021",
        description: [
          "Built out automated test coverage for new features and backlog assignments using Cypress.",
          "Monitored test runs and created tickets for failing tests, ensuring prompt resolution.",
          "Performed manual regression testing to support the release process and maintain product stability.",
          "Conducted API testing using Postman to verify endpoint functionality and reliability.",
        ],
        technologies: ["Cypress", "Postman", "PyTest", "Docker", "Confluence", "JIRA"],
      },
    ],
    projects: [
      {
        title: "Bruteforce Study App",
        description:
          "This is an ongoing project I’ve been developing to help my girlfriend study for her college courses course. The app features customizable quizzes and flashcards, allowing students to study various subjects with ease. The project showcases my ability to work with complex data models and implement interactive user interfaces using Next.js, React, and TypeScript, while leveraging Playwright for end-to-end testing.",
        repoUrl: "https://github.com/j-b-smith/bruteforce-study-app",
        technologies: ["NextJS", "React", "TypeScript", "Playwright"],
      },
      {
        title: "Joseph Smith Portfolio",
        description:
          "This portfolio website showcases my professional background, projects, and skills as a QA engineer and software developer. Built using Next.js, React, and TypeScript, the site is optimized for performance, SEO, and responsive design. It also features automated testing with Cypress to ensure quality and maintainability.",
        repoUrl: "https://github.com/j-b-smith/joseph-smith-portfolio",
        technologies: ["NextJS", "React", "TypeScript", "Cypress"],
      },
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
      frameworks: ["React", "Next.js", "Node.js", "Django", "Cypress", "Selenium", "Playwright", "PyTest", "PHPUnit", "Behat"],
      tools: ["Postman", "Docker", "Git", "JIRA", "CI/CD", "Github Actions", "Ansible", "Composer"],
    },
  };
  