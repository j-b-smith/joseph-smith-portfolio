import { GitHubRepo } from '@/types';
import { useState, useEffect } from 'react';



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
