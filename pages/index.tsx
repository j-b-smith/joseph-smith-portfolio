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
    <div className="container mx-auto py-10 flex flex-col items-center text-center">
      <div className="w-40 h-40 md:w-64 md:h-64 flex justify-center">
        <img
          src="/profile.jpeg"
          alt="Joseph Smith"
          className="rounded-full w-full h-full object-cover shadow-lg"
        />
      </div>
      <div className="mt-6 md:mt-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello, I&#39;m Joseph Smith</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
          A passionate Software Engineer specializing in Quality Automation.
        </p>
        <Link href="/projects" className="bg-indigo-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-indigo-700 hover:text-white transition-colors">
          View My Projects
        </Link>
      </div>

      <div className="mt-8 md:mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {badges.map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            className="h-12 md:h-16 object-contain mx-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
