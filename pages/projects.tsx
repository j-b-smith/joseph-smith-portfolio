import React from 'react';
import useGitHubRepos from '../hooks/useGitHubRepos';
import CustomProjectCard from '../components/CustomProjectCard';

const Projects = () => {
  const repos = useGitHubRepos('j-b-smith');

  const projectData = [
    {
      repoName: 'automation-testing-cookbook',
      customTitle: 'Automation Testing Cookbook',
      summary: 'This is the parent repository for my automation example repositories. (Cypress, Playwright, Selenium etc.)',
    },
    {
      repoName: 'cypress-typescript-example',
      customTitle: 'Cypress Testing with TypeScript',
      summary: 'A comprehensive example of using Cypress with TypeScript for end-to-end testing of https://magento.softwaretestingboard.com/.',
    },
    {
      repoName: 'playwright-typescript-example',
      customTitle: 'Playwright Testing with TypeScript',
      summary: 'An example of using Playwright with TypeScript for end-to-end testing of https://the-internet.herokuapp.com/',
    },
    {
      repoName: 'Mario-Party-Scorekeeper',
      customTitle: 'Mario Party Scorekeeper',
      summary: 'My first full-stack application using the MERN stack! I\'ve been a huge fan of Mario Party since I was a kid and this was a lot of fun!',
    },
    {
      repoName: 'Depot-Utility',
      customTitle: 'Depot Utility',
      summary: 'This is an automation tool I wrote working in IT to submit warranty requests to Dell Tech Direct. It uses Java, JavaFx, and MySQL database.',
    },
    {
      repoName: 'Inventory-Management-Application',
      customTitle: 'Inventory Management Application',
      summary: 'This was my capstone project for my software engineering course. It Java, JavaFX, and MySQL database.',
    },
    {
      repoName: 'Software-2-Scheduling-App',
      customTitle: 'Scheduling App',
      summary: 'This was my Software Engineering II project. It uses Java, JavaFX, and MySQL database.',
    },
  ];

  return (
    <div className="container mx-auto py-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {repos.map((repo) => {
        const project = projectData.find((p) => p.repoName === repo.name);

        if (!project) return null;

        return (
          <CustomProjectCard
            key={repo.id}
            customTitle={project.customTitle}
            repoName={repo.name}
            summary={project.summary}
            html_url={repo.html_url}
          />
        );
      })}
    </div>
  );
};

export default Projects;
