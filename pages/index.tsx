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
  ];

  return (
    <div className="container mx-auto py-10 flex flex-col items-center text-center">
      <div className="w-64 h-64 flex justify-center">
        <img
          src="/profile.jpeg"
          alt="Joseph Smith"
          className="rounded-full w-64 h-64 object-cover shadow-lg"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-5xl font-bold mb-4">Hello, I&#39;m Joseph Smith</h1>
        <p className="text-xl text-gray-600 mb-8">
          A passionate Software Engineer specializing in Quality Automation.
        </p>
        <Link href="/projects" className="bg-indigo-500 text-white px-6 py-3 rounded-full hover:bg-indigo-700 hover:text-white transition-colors">
          View My Projects
        </Link>
      </div>

      <div className="mt-10 flex justify-center space-x-8">
        {badges.map((badge, index) => (
          <img
            key={index}
            src={badge.src}
            alt={badge.alt}
            className="h-16 w-18 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
