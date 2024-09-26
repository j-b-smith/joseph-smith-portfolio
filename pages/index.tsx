import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  const badges = [
    { src: '/badges/cypress.png', alt: 'Cypress' },
    { src: '/badges/typescript.png', alt: 'TypeScript' },
    { src: '/badges/selenium.png', alt: 'Selenium' },
    { src: '/badges/playwright.png', alt: 'Playwright' },
    { src: '/badges/pytest.svg', alt: 'PyTest' },
    { src: '/badges/python.png', alt: 'Python' },
    { src: '/badges/react.png', alt: 'React' },
    { src: '/badges/django.png', alt: 'Django' },
    { src: '/badges/nextjs.svg', alt: 'NextJS' },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Joseph Smith | QA Engineer | Cypress, Selenium & Playwright Automation Expert</title>
        <meta
          name="description"
          content="Joseph Smith is a QA Engineer specializing in Cypress, Selenium, and Playwright automation. Skilled in SaaS, FinTech, and healthcare testing solutions."
        />
        <meta
          name="keywords"
          content="QA Engineer, Cypress Automation, Selenium Automation, Playwright Testing, Remote QA Engineer, Test Automation Engineer, SaaS Testing, FinTech Testing, Healthcare QA"
        />
      </Head>

      <div
        className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-screen"
        data-cy="home-container"
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 flex justify-center" data-cy="profile-image-container">
          <img
            src="/profile.jpeg"
            alt="Joseph Smith"
            className="rounded-full w-full h-full object-cover shadow-lg"
            data-cy="profile-image"
          />
        </div>
        <div className="mt-4 sm:mt-6 md:mt-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4" data-cy="main-heading">
            Hello, I&#39;m Joseph Smith
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8" data-cy="sub-heading">
            A passionate Software Engineer specializing in Quality Automation.
          </p>
          <Link href="/projects">
            <span
              className="inline-block bg-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-indigo-700 transition-colors"
              data-cy="view-projects-button"
            >
              View My Projects
            </span>
          </Link>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:flex lg:gap-8" data-cy="badges-container">
          {badges.map((badge, index) => (
            <img
              key={index}
              src={badge.src}
              alt={badge.alt}
              className="h-8 sm:h-10 md:h-16 object-contain mx-auto"
              data-cy={`badge-${badge.alt.toLowerCase()}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
