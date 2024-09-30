import Link from "next/link";
import React from "react";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const ResumeSummaryCard = () => {
  const handleClick = () => {
    GoogleAnalytics.trackLinkClick('Resume Download - Resume Summary Card');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 w-full h-full flex flex-col justify-between my-8" data-cy="resume-summary-card">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" data-cy="resume-summary-heading">Hey, I’m Joseph Smith! 👋</h2>
        <ul className="list-disc list-inside mb-4 sm:mb-6 text-gray-700 space-y-2 sm:space-y-3 lg:text-xl" data-cy="resume-summary-list">
          <li className="py-4">
            I’m a <strong>Software Engineer</strong> passionate about <strong>Quality Automation</strong>. 
            My expertise lies in tools like <strong>Cypress</strong>, <strong>Selenium</strong>, and <strong>PyTest</strong>, 
            where I’ve taken the lead in automating critical tests to ensure top-notch software quality. 🛠️
          </li>
          <li className="py-4">
            My experience spans <strong>healthcare</strong>, <strong>SaaS</strong>, and <strong>FinTech</strong> industries, 
            where I’ve collaborated with cross-functional teams to streamline testing processes, catch bugs early, 
            and accelerate software delivery. 🚀
          </li>
          <li className="py-4">
            I’m a self-motivated learner who has independently mastered <strong>Playwright</strong>, <strong>Next.js</strong>, 
            <strong>React</strong>, <strong>Django</strong>, and <strong>CI/CD integration</strong>. This proactive approach has broadened 
            my skill set and equipped me to tackle complex challenges across the software development lifecycle. 💡
          </li>
          <li className="py-4">
            I’ve created and maintained <strong>CI/CD pipelines</strong> for personal projects, and professionally, 
            I’ve utilized and pushed automation through existing pipelines to ensure that testing is a seamless part of the 
            development process. 🔄
          </li>
          <li className="py-4">
            I’m comfortable adapting to various tech stacks, including <strong>React</strong>, <strong>Next.js</strong>, 
            and <strong>Django</strong>. I’m always eager to dive into new technologies and keep my skills sharp. 🌱
          </li>
          <li className="py-4">
            My mission? To drive innovation in test automation and help teams ship reliable, high-quality software faster. 
            I believe that great automation doesn’t just catch bugs—it empowers developers to focus on what they do best: 
            building amazing features. 💻
          </li>
          <li className="py-4">
            Outside of work, I’m always exploring new ways to grow—whether that’s learning a new tech stack, 
            playing guitar, or enjoying the outdoors. 🎸🌲
          </li>
        </ul>
      </div>
      <Link
        href="/JosephSmithResume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="bg-indigo-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-indigo-700 hover:text-white transition-colors block text-center text-sm sm:text-base"
        data-cy="resume-download-button"
      >
        Download my Resume!
      </Link>
    </div>
  );
};

export default ResumeSummaryCard;
