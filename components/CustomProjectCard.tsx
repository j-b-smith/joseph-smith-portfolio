import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { CustomProjectCardProps, badgeImages } from '../types';


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
        className="w-full h-14 sm:h-16 flex px-3 sm:px-4 py-1"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
        }}
      >
        <h2 className="text-sm sm:text-lg text-white">{customTitle}</h2>
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <div className="flex flex-row flex-wrap justify-content space-x-2 sm:space-x-3 mb-3 sm:mb-4">
          {technologies.map((tech) => (
            <Image
              key={tech}
              src={badgeImages[tech]}
              alt={`${tech} badge`}
              width={40}
              height={40}
              className="object-contain"
            />
          ))}
        </div>
        <h3 className="text-sm sm:text-md font-semibold text-gray-900 mb-2">
          <strong>Repository:</strong> {repoName}
        </h3>
        <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 flex-grow break-words">
          <strong>Summary:</strong> {summary}
        </p>
        <Link
          href={`${html_url}/blob/master/README.md`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            GoogleAnalytics.trackLinkClick(
              `"Check out the code!" clicked for ${repoName}`
            )
          }
          className="bg-indigo-500 text-white py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300 text-center mt-auto text-xs sm:text-sm"
        >
          Check out the code!
        </Link>
      </div>
    </div>
  );
};

export default CustomProjectCard;
