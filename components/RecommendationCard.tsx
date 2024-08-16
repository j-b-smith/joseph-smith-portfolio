import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

interface RecommendationCardProps {
  reviewerName: string;
  jobTitle: string;
  date: string;
  relationship: string;
  reviewContent: string;
  imagePath: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  reviewerName,
  jobTitle,
  date,
  relationship,
  reviewContent,
  imagePath,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full min-h-[350px]">
      <div
        className="w-full h-20 flex items-center px-4 sm:px-6 py-2"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
        }}
      >
        <Image
          src={imagePath}
          alt={`${reviewerName} profile picture`}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4 sm:ml-6">
          <h3 className="text-base sm:text-lg font-bold text-white">
            {reviewerName}
          </h3>
          <p className="text-xs sm:text-sm text-white">{jobTitle}</p>
          <p className="text-xs sm:text-sm text-white">
            {date} - {relationship}
          </p>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs sm:text-sm text-gray-700 mb-4 flex-grow break-words">
          {reviewContent}
        </p>
        <Link
          href="https://www.linkedin.com/in/joseph-b-smith-eng/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            GoogleAnalytics.trackLinkClick(
              `"Recommendation from ${reviewerName}" clicked`
            )
          }
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-center mt-auto text-sm sm:text-base"
        >
          View on LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
