import React from 'react';
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
    <div className="container mx-auto py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
          />
        );
      })}
    </div>
  );
};

export default Projects;
