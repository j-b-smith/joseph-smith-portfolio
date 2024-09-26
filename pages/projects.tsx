import React from 'react';
import Head from 'next/head';
import useGitHubRepos from '../hooks/useGitHubRepos';
import CustomProjectCard from '../components/CustomProjectCard';
import { projectData } from '../public/projects/projectData';

const Projects = () => {
  const repos = useGitHubRepos('j-b-smith');

  const sortedRepos = repos.sort((a, b) => {
    const indexA = projectData.findIndex((project) => project.repoName === a.name);
    const indexB = projectData.findIndex((project) => project.repoName === b.name);
    return indexA - indexB;
  });

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Joseph Smith&#39;s Projects | Cypress & Playwright Automation, SaaS & FinTech</title>
        <meta
          name="description"
          content="Explore Joseph Smith's projects, featuring Cypress, Playwright, and Selenium automation for SaaS, FinTech, and B2B payments."
        />
        <meta
          name="keywords"
          content="
          Cypress Projects, Playwright Projects, Selenium Projects, GitHub Repositories, 
          Test Automation Projects, End-to-End Testing, API Automation, Cross-Browser Testing,
          JavaScript Testing Projects, TypeScript Testing Projects, Node.js Testing Projects, 
          SaaS Testing, FinTech Testing, B2B Payments Testing, Web Application Testing, 
          Continuous Integration Projects, Continuous Deployment, CI/CD Pipeline Automation,
          Functional Testing, Regression Testing, Performance Testing, Load Testing,
          Automation Framework Design, GitHub Projects, Open Source QA Projects, 
          GitHub Actions, Test Automation Engineer, Web Test Automation, Selenium WebDriver, 
          Automated Testing with Playwright, API Testing with Postman, Postman Automation, 
          Automation with PyTest, Unit Testing, Test-Driven Development, Behavior-Driven Development, 
          Cloud-Based Testing, Agile Testing, Test Automation Architecture, 
          Integration Testing, React Automation Testing, Next.js Automation Testing"
        />
      </Head>

      <div className="container mx-auto py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" data-cy="projects-page">
        {sortedRepos.map((repo) => {
          const project = projectData.find((p) => p.repoName === repo.name);

          if (!project) return null;

          return (
            <CustomProjectCard
              key={repo.id}
              customTitle={project.customTitle}
              repoName={repo.name}
              summary={project.summary}
              html_url={repo.html_url}
              technologies={[...project.technologies]}
              data-cy={`project-card-${repo.name}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
