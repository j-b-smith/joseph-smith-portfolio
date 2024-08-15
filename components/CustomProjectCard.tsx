import React from "react";
import Link from "next/link";

interface CustomProjectCardProps {
  customTitle: string;
  repoName: string;
  summary: string;
  html_url: string;
}

const CustomProjectCard: React.FC<CustomProjectCardProps> = ({
  customTitle,
  repoName,
  summary,
  html_url,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-full">
      <div
        className="w-full h-16 flex items-center justify-center"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
        }}
      >
        <h2 className="text-lg font-bold text-white text-center px-2">{customTitle}</h2>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-md font-semibold text-gray-900 mb-2">{repoName}</h3>
        <p className="text-sm text-gray-700 mb-4 flex-grow">{summary}</p>
        <Link
          href={`${html_url}/blob/main/README.md`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition-colors duration-300 text-center mt-auto"
        >
          Check out the code!
        </Link>
      </div>
    </div>
  );
};

export default CustomProjectCard;
