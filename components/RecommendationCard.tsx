import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { RecommendationCardProps } from "@/types";

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  reviewerName,
  jobTitle,
  date,
  relationship,
  reviewContent,
  imagePath,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full min-h-[350px]" data-cy="recommendation-card">
      <div
        className="w-full h-20 flex items-center px-3 sm:px-5 py-2"
        style={{
          background: "linear-gradient(to right, #667eea, #764ba2)",
        }}
        data-cy="recommendation-header"
      >
        <Image
          src={imagePath}
          alt={`${reviewerName} profile picture`}
          width={45}
          height={45}
          className="rounded-full border-2 border-white"
          data-cy="recommendation-image"
        />
        <div className="ml-3 sm:ml-5">
          <h3 className="text-sm sm:text-base font-bold text-white" data-cy="reviewer-name">{reviewerName}</h3>
          <p className="text-xs sm:text-sm text-white" data-cy="reviewer-job">{jobTitle}</p>
          <p className="text-xs sm:text-sm text-white" data-cy="reviewer-relationship">
            {date} &bull; {relationship}
          </p>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-grow">
        <blockquote className="text-xs sm:text-sm text-gray-700 italic mb-3 sm:mb-4 flex-grow break-words border-l-4 pl-4 border-indigo-500" data-cy="review-content">
          {reviewContent}
        </blockquote>
        <Link
          href="https://www.linkedin.com/in/joseph-b-smith-eng/details/recommendations/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            GoogleAnalytics.trackLinkClick(
              `"Recommendation from ${reviewerName}" clicked`
            )
          }
          className="bg-indigo-500 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-300 text-center mt-auto text-xs sm:text-sm"
          data-cy="linkedin-recommendation-link"
        >
          View on LinkedIn
        </Link>
      </div>
    </div>
  );
};

export default RecommendationCard;
