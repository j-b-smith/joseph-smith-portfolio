import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Charset and Viewport Meta Tags */}
        <meta charSet="UTF-8" />

        {/* Global SEO Metadata */}
        <meta name="description" content="Joseph Smith is a QA Engineer specializing in Cypress, Selenium, and Playwright automation for SaaS, FinTech, and healthcare testing solutions." />
        <meta name="keywords" content="
    QA Engineer, Cypress Automation, Selenium Automation, Playwright Testing, 
    Remote QA Engineer, Test Automation, Test Automation Engineer, End-to-End Testing, 
    Cross-Browser Testing, API Testing, REST API Automation, GraphQL Testing, 
    JavaScript Testing, TypeScript Testing, Python Testing, PHP Testing, 
    Node.js Automation, React Testing, Next.js Testing, PyTest, PHPUnit, 
    Manual Testing, Functional Testing, Regression Testing, BDD (Behavior-Driven Development), 
    TDD (Test-Driven Development), Integration Testing, Performance Testing, 
    Load Testing, Usability Testing, UI/UX Testing, Security Testing, 
    Cloud-Based Testing, Continuous Integration (CI), Continuous Deployment (CD), 
    CI/CD Pipeline Automation, GitHub Actions, Docker, CircleCI, Ansible, 
    SaaS Testing, FinTech Testing, B2B Payments Testing, Healthcare QA, 
    Agile QA, Agile Testing, Exploratory Testing, Automation Frameworks, 
    Automation Framework Design, Test Strategy Planning, Quality Assurance Engineer, 
    Automated Testing, Test Case Management, Version Control, Git, GitHub, 
    TestRail, PractiTest, Postman API Testing, API Automation with Postman, 
    Automation Testing in SaaS, Automation Testing in FinTech, B2B QA Solutions" />
        
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
                "Insomnia",
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
                "Manual Regression Testing",
                "Cross-Browser Testing",
                "End-to-End Testing",
                "Performance Testing",
                "Load Testing",
                "UI/UX Testing",
                "API Automation",
                "Exploratory Testing",
                "Test Strategy Planning",
                "Bug Triage",
                "Test Case Repository Management",
                "Cross-functional Team Collaboration",
                "Test Automation Architecture",
                "Test Data Management",
                "Security Testing",
                "Cloud-Based Testing",
                "Mobile Testing",
                "Continuous Testing"
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
