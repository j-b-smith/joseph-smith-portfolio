import RecommendationCard from '@/components/RecommendationCard';
import React from 'react';
import { recommendations } from '../public/recommendations/recommendationsData';

const RecommendationsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {recommendations.map((rec, index) => (
        <RecommendationCard
          key={index}
          reviewerName={rec.reviewerName}
          jobTitle={rec.jobTitle}
          date={rec.date}
          relationship={rec.relationship}
          reviewContent={rec.reviewContent}
          imagePath={rec.imagePath}
        />
      ))}
    </div>
  );
};

export default RecommendationsPage;
