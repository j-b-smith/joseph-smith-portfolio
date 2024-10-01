import { ResumeData } from "@/types";

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
        technologies: ["PHP", "Selenium", "PHPUnit", "PractiTest", "JIRA", "DataDog", "Docker", "Ansible", "Composer", "GitHub"],
      },
      {
        company: "Routable",
        role: "QA Engineer",
        duration: "October 2021 – January 2023",
        description: [
          "Played a crucial role in expanding B2B payments to over 220 countries using SWIFT and local payment systems.",
          "Increased automation coverage from 25% to 50% of the backlog over 3 months by designing and developing tests with Cypress and Playwright.",
          "Developed a test automation script that reduced manual testing time from over 4 hours to less than 1 hour for international payments.",
        ],
        technologies: ["JavaScript", "TypeScript", "Cypress", "Playwright", "Python", "PyTest", "BDD", "JIRA", "Postman", "TestRail"],
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
        technologies: ["Cypress", "Postman", "JIRA", "DataDog", "Confluence"],
      },
    ],
    projects: [
      {
        title: "Bruteforce Study App",
        description:
          "An ongoing project designed to help my girlfriend study for her college courses. It features customizable quizzes and flashcards, allowing students to study various subjects. Built using Next.js, React, TypeScript, and Playwright.",
        repoUrl: "https://github.com/j-b-smith/bruteforce-study-app",
        technologies: ["Next.js", "React", "TypeScript", "Playwright"],
      },
      {
        title: "Joseph Smith Portfolio",
        description:
          "A portfolio website showcasing my professional background and skills as a QA engineer and software developer. Built with Next.js, React, and TypeScript, it is optimized for performance, SEO, and responsive design, and includes Cypress automation.",
        repoUrl: "https://github.com/j-b-smith/joseph-smith-portfolio",
        technologies: ["Next.js", "React", "TypeScript", "Cypress"],
      },
    ],
    skills: {
      languages: ["JavaScript", "TypeScript", "Python", "Java", "PHP"],
      frameworks: ["React", "Next.js", "Node.js", "Django", "Cypress", "Playwright", "PyTest", "PHPUnit"],
      tools: ["Postman", "Docker", "Git", "JIRA", "CI/CD", "GitHub Actions", "Ansible", "Composer"],
    },
};