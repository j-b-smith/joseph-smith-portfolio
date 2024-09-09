import { Job, Step } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { owner, repo } = req.query;

  if (!owner || !repo) {
    return res.status(400).json({ error: 'Owner and repository are required' });
  }

  try {
    // Fetch the latest workflow run for the master branch
    const runResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs?branch=master&per_page=1`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    });
    const runData = await runResponse.json();
    const latestRun = runData.workflow_runs[0];

    if (!latestRun) {
      return res.status(404).json({ error: 'No workflow runs found on the master branch' });
    }

    // Fetch all jobs for the latest run
    const jobsResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/runs/${latestRun.id}/jobs`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
      },
    });
    const jobsData = await jobsResponse.json();

    // Extract all steps and their status (passing or failing)
    const testResults = jobsData.jobs.map((job: Job) => ({
      job: job.name,
      steps: job.steps.map((step: Step) => ({
        name: step.name,
        conclusion: step.conclusion,
      })),
    }));

    res.status(200).json(testResults);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve test results' });
  }
}
