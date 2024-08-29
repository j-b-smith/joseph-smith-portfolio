import React from 'react';
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
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center min-h-screen">
      <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64 flex justify-center">
        <img
          src="/profile.jpeg"
          alt="Joseph Smith"
          className="rounded-full w-full h-full object-cover shadow-lg"
        />
      </div>
      <div className="mt-4 sm:mt-6 md:mt-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">Hello, I&#39;m Joseph Smith</h1>
        <p className="text-md sm:text-lg md:text-xl text-gray-600 mb-4 sm:mb-6 md:mb-8">
          A passionate Software Engineer specializing in Quality Automation.
        </p>
        <Link href="/projects">
          <span className="inline-block bg-indigo-500 text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full hover:bg-indigo-700 transition-colors">
            View My Projects
          </span>
        </Link>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 lg:flex lg:gap-8">
        {badges.map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            className="h-8 sm:h-10 md:h-16 object-contain mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
