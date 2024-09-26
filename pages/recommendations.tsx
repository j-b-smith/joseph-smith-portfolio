import RecommendationCard from '@/components/RecommendationCard';
import React from 'react';
import Head from 'next/head';
import { recommendations } from '../public/recommendations/recommendationsData';

const RecommendationsPage: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Recommendations for Joseph Smith | QA Engineer & Automation Specialist</title>
        <meta
          name="description"
          content="Read professional recommendations and testimonials about Joseph Smith, an experienced QA Engineer specializing in Cypress, Selenium, Playwright, and automation testing for SaaS and FinTech industries."
        />
        <meta
          name="keywords"
          content="
            Joseph Smith Recommendations, QA Engineer Reviews, Automation Engineer Recommendations, 
            Professional Testimonials, QA Automation Specialist, Cypress Recommendations, Selenium Reviews, 
            Playwright Specialist, Software Tester Feedback, Test Automation Expert Reviews, 
            SaaS QA Recommendations, FinTech QA Reviews, Remote QA Engineer Testimonials, 
            Automation Testing Feedback, Professional Reviews for Joseph Smith"
        />
      </Head>

      <div className="container mx-auto py-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2" data-cy="recommendations-page">
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            reviewerName={rec.reviewerName}
            jobTitle={rec.jobTitle}
            date={rec.date}
            relationship={rec.relationship}
            reviewContent={rec.reviewContent}
            imagePath={rec.imagePath}
            data-cy={`recommendation-card-${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default RecommendationsPage;
