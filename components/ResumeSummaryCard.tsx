import Link from "next/link";
import React from "react";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const ResumeSummaryCard = () => {

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full h-full flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold mb-4">Hi, I&#39;m Joseph Smith</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>
            <strong>Software Engineer</strong> specializing in{" "}
            <strong>Quality Automation</strong> with a focus on tools like{" "}
            <strong>Cypress, TypeScript, PyTest, Python, Selenium,</strong> and{" "}
            <strong>PHPUnit</strong>. 🛠️
          </li>
          <br></br>
          <li>
            Extensive experience in the{" "}
            <strong>healthcare, SaaS, and FinTech industries</strong>, driving
            improvements in test automation and software quality. 🏥💻💸
          </li>
          <br></br>
          <li>
            Proven ability to <strong>expand test coverage</strong>, reduce
            manual testing time, and collaborate seamlessly with{" "}
            <strong>cross-functional teams</strong>. 🤝
          </li>
          <br></br>
          <li>
            Proficient in{" "}
            <strong>building and maintaining CI/CD pipelines</strong>, ensuring
            smooth and efficient release processes. 🚀
          </li>
          <br></br>
          <li>
            Skilled in adapting to a variety of tech stacks, including{" "}
            <strong>Playwright, React, Next.js,</strong> and{" "}
            <strong>Django</strong>. 🌐
          </li>
        </ul>
      </div>
      <Link
        href="/JosephSmithResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={GoogleAnalytics.trackResumeDownload}
        className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 hover:text-white transition-colors block text-center"
      >
        View My Resume
      </Link>
    </div>
  );
};

export default ResumeSummaryCard;
