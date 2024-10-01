import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset and Viewport Meta Tags */}
        <meta charSet="UTF-8" />

        {/* Global SEO Metadata */}
        <meta name="description" content="Joseph Smith is an experienced QA Engineer and Software Developer with expertise in Cypress, Selenium, Playwright, and automation frameworks for SaaS, FinTech, healthcare, and B2B payment platforms. Skilled in test automation, cross-browser testing, API automation, CI/CD pipelines, and cloud-based testing." />
        <meta name="keywords" content="
          QA Engineer, Software Developer, Test Automation Engineer, Software Development Engineer in Test, SDET, End-to-End Testing, 
          Cypress Automation, Selenium Automation, Playwright Testing, Web Application Testing, Mobile Testing, Remote QA Engineer, 
          Test Automation, Test Automation Framework, BDD (Behavior-Driven Development), TDD (Test-Driven Development), Regression Testing, 
          Functional Testing, Unit Testing, Integration Testing, Performance Testing, Load Testing, Stress Testing, Usability Testing, 
          UI Testing, UX Testing, Security Testing, Cross-Browser Testing, API Testing, REST API Automation, GraphQL API Automation, 
          JavaScript Testing, TypeScript Testing, Python Testing, Java Testing, PHP Testing, Node.js Automation, React Testing, 
          Next.js Testing, PyTest, PHPUnit, Behat, Mocha, Jasmine, Manual Testing, Exploratory Testing, Bug Triage, 
          Test Case Management, Test Case Development, Test Plan Creation, Test Strategy Planning, Quality Assurance Engineer, 
          Continuous Integration (CI), Continuous Deployment (CD), CI/CD Pipeline Automation, GitHub Actions, Docker, CircleCI, Ansible, Composer, 
          Postman API Testing, API Automation, Web Testing, Agile Testing, Scrum, Kanban, TestRail, PractiTest, JIRA, Confluence, 
          SaaS Testing, FinTech Testing, B2B Payments Testing, Healthcare QA, Automation Framework Design, Test Strategy, 
          Automation Testing in SaaS, Automation Testing in FinTech, Automation Testing in Healthcare, Test Automation Architecture, 
          Cloud-Based Testing, AWS Testing, Google Cloud Platform (GCP) Testing, Azure Testing, Mobile App Testing, Appium, 
          Continuous Testing, Mobile Device Testing, BrowserStack, Sauce Labs, Cross-functional Team Collaboration, Agile QA, 
          Manual QA, End-to-End Test Automation, Git, GitLab, Bitbucket, Version Control, Automation in Cloud-Native Applications, 
          Performance Optimization, Test Data Management, QA Automation in FinTech, International Payments Testing, 
          End-to-End FinTech Testing, SaaS Quality Assurance, Cloud Native Testing, Mobile Test Automation, Payments Testing, 
          Regression Test Suite Development, Docker Automation, Cloud Infrastructure Automation, Agile Testing in SaaS, 
          CircleCI Pipelines, GitHub CI/CD Pipelines, API Testing with Postman, Web Automation Testing, Automation in FinTech, 
          Automation Testing in B2B, QA Automation for Healthcare, Payment Gateway Testing, DevOps Collaboration in QA, 
          Software Quality Assurance, Automation Testing for APIs, Agile QA Processes, End-to-End Software Testing, 
          Mobile Application QA, Cross-Browser Compatibility Testing, End-to-End Regression Testing, SaaS Product Testing" />

        {/* Structured Data (Global for the entire site) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Joseph Smith",
              "jobTitle": "QA Engineer",
              "url": "https://joseph-smith.vercel.app",
              "sameAs": [
                "https://linkedin.com/in/joseph-b-smith-eng",
                "https://github.com/j-b-smith"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Aya Healthcare"
              },
              "alumniOf": "Western Governors University",
              "skills": [
                "Cypress",
                "Selenium",
                "Playwright",
                "Test Automation",
                "CI/CD",
                "SaaS Testing",
                "FinTech Testing",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Python",
                "PHP",
                "Node.js",
                "Django",
                "BDD (Behavior Driven Development)",
                "TDD (Test Driven Development)",
                "Postman",
                "REST API Testing",
                "GraphQL Testing",
                "PyTest",
                "PHPUnit",
                "PractiTest",
                "TestRail",
                "JIRA",
                "Confluence",
                "DataDog",
                "CircleCI",
                "Docker",
                "Ansible",
                "Composer",
                "Git",
                "Version Control",
                "Agile Testing",
                "Scrum",
                "Regression Testing",
                "Cross-Browser Testing",
                "End-to-End Testing",
                "Performance Testing",
                "Load Testing",
                "UI/UX Testing",
                "API Automation",
                "Exploratory Testing",
                "Test Strategy Planning",
                "Bug Triage",
                "Test Case Management",
                "Cross-functional Team Collaboration",
                "Test Automation Architecture",
                "Mobile Testing",
                "Continuous Testing",
                "Cloud-Based Testing",
                "International Payments Testing",
                "B2B Payments Testing",
                "Cloud-Native Applications Testing",
                "Appium",
                "Mobile Device Testing",
                "AWS Testing",
                "Google Cloud Testing",
                "Azure Testing",
                "Payments QA Automation",
                "Payment Gateway Testing",
                "DevOps Collaboration",
                "End-to-End QA in SaaS",
                "Test Data Management",
                "Automation in Healthcare QA"
              ]
            })
          }}
          defer></script>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Y3MR191DV1" defer></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Y3MR191DV1', {
                page_path: window.location.pathname,
              });
            `,
          }}
        defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
