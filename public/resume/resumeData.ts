import { ResumeData } from "@/types";

export const resumeData: ResumeData = {
    name: "Joseph Smith",
    contact: {
        email: "jsmith47265@gmail.com",
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
            role: "QA Automation Engineer II",
            duration: "May 2023 – Present",
            description: [
                "Collaborated with cross-functional teams to refine user stories and ensure well-defined acceptance criteria.",
                "Expanded automation coverage by 25% of the backlog (~450 stories) in 6 months.",
                "Developed automation alongside new feature development with Selenium and PHPUnit using Docker.",
                "Reduced manual regression testing by 20% through automation efforts and conducted bug triage to support the release process.",
                "Maintained and updated the test case repository to ensure comprehensive test coverage.",
            ],
            technologies: ["PHP", "Selenium", "PHPUnit", "PractiTest", "JIRA", "DataDog", "Confluence", "Docker", "Ansible", "Composer", "Linux", "Jenkins", "Microsoft Azure (IaaS)"],
        },
        {
            company: "Routable",
            role: "Sr. QA Engineer",
            duration: "October 2021 – January 2023",
            description: [
                "Collaborated with cross-functional teams to expand B2B payments to over 220 countries using SWIFT and local payment systems.",
                "Expanded backlog automation coverage by 25% within the first quarter (~90 stories).",
                "Developed an automation script that reduced manual testing of international payments by 75%.",
                "Reduced development and review time by spearheading efforts to optimize Cypress, Playwright, and PyTest repositories.",
                "Created robust Notion documentation around international payments utilized by the engineering team.",
            ],
            technologies: ["JavaScript", "TypeScript", "Cypress", "Playwright", "Python", "BDD", "PyTest", "Postman", "TestRail", "JIRA", "Notion", "Django", "React"],
        },
        {
            company: "Sharpen",
            role: "QA Engineer",
            duration: "April 2021 – October 2021",
            description: [
                "Collaborated with cross-functional teams to build automation for new features and backlog assignments using Cypress.",
                "Monitored test runs and created tickets for failing tests, ensuring prompt resolution.",
                "Performed manual regression testing to support the release process and maintain product stability.",
            ],
            technologies: ["JavaScript", "TypeScript", "Cypress", "Postman", "JIRA", "DataDog", "Confluence"],
        },
    ],
    projects: [
        {
            title: "Bruteforce Study App",
            description:
                "An ongoing project designed to help my girlfriend study for her college courses. It features customizable quizzes and flashcards, allowing students to study various subjects. Built using Next.js, React, TypeScript, and Playwright.",
            repoUrl: "https://github.com/j-b-smith/bruteforce-study-app",
            technologies: ["Next.js", "React", "TypeScript", "Playwright", "Chakra UI", "Vercel"],
        },
        {
            title: "Joseph Smith Portfolio",
            description:
                "A portfolio website showcasing my professional background and skills as a QA engineer and software developer. Built with Next.js, React, and TypeScript, it is optimized for performance, SEO, and responsive design, and includes Cypress automation.",
            repoUrl: "https://github.com/j-b-smith/joseph-smith-portfolio",
            technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Chakra UI", "Cypress", "Vercel"],
        },
    ],
    skills: {
        languages: ["JavaScript", "TypeScript", "PHP", "Python", "Node.js", "Java"],
        frameworks: ["Cypress", "PyTest", "PHPUnit", "Selenium", "Behat", "Goutte Driver", "Playwright", "BDD", "React", "Django", "Next.js"],
        tools: ["Postman", "Insomnia", "Docker", "Git", "JIRA", "CI/CD", "GitHub Actions", "Ansible", "Composer", "Linux", "Microsoft Azure (IaaS)", "Notion", "Confluence", "DataDog", "BrowserStack"],
    },
};
