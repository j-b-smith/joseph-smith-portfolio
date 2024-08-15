import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const badgeImages = {
  Cypress: "/badges/cypress.png",
  TypeScript: "/badges/typescript.png",
  Selenium: "/badges/selenium.png",
  Playwright: "/badges/playwright.png",
  PyTest: "/badges/pytest.svg",
  Python: "/badges/python.png",
  React: "/badges/react.png",
  Django: "/badges/django.png",
  Java: "/badges/java.png",
  JavaFX: "/badges/javafx.png",
  MySQL: "/badges/mysql.png",
  NextJS: "/badges/nextjs.svg",
  ExpressJS: "/badges/expressjs.png",
  NodeJS: "/badges/nodejs.png",
  MongoDB: "/badges/mongodb.png",
} as const; 

type Technology = keyof typeof badgeImages;

interface CustomProjectCardProps {
  customTitle: string;
  repoName: string;
  summary: string;
  html_url: string;
  technologies: Technology[];
}

const CustomProjectCard: React.FC<CustomProjectCardProps> = ({
  customTitle,
  repoName,
  summary,
  html_url,
  technologies,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div
        className="w-full h-16 flex px-4 py-1"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
        }}
      >
        <h2 className="text-lg text-white">{customTitle}</h2>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex flex-row justify-content space-x-3 mb-4">
          {technologies.map((tech) => (
            <Image
              key={tech}
              src={badgeImages[tech]}
              alt={`${tech} badge`}
              width={50} // Set the width
              height={50} // Set the height
              className="object-contain"
            />
          ))}
        </div>
        <h3 className="text-md font-semibold text-gray-900 mb-2">
          <strong>Repository:</strong> {repoName}
        </h3>
        <p className="text-sm text-gray-700 mb-4 flex-grow break-words">
          <strong>Summary:</strong> {summary}
        </p>
        <Link
          href={`${html_url}/blob/main/README.md`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            GoogleAnalytics.trackLinkClick(
              `"Check out the code!" clicked for ${repoName}`
            )
          }
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300 text-center mt-auto"
        >
          Check out the code!
        </Link>
      </div>
    </div>
  );
};

export default CustomProjectCard;
