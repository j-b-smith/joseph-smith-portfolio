import { useState, useEffect } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  full_name: string;
}

const useGitHubRepos = (username: string) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const data = await response.json();
      setRepos(data);
    };

    fetchRepos();
  }, [username]);

  return repos;
};

export default useGitHubRepos;
