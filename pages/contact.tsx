import React from 'react';
import Head from 'next/head';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactFormCard from '../components/ContactFormCard';

const Contact = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Contact Joseph Smith | Experienced QA Engineer | Cypress, Selenium Automation</title>
        <meta
          name="description"
          content="Get in touch with Joseph Smith, a QA Engineer with expertise in Cypress, Selenium, Playwright, and SaaS automation testing. Reach out for collaboration or job opportunities."
        />
        <meta
          name="keywords"
          content="
            Contact QA Engineer, Hire QA Specialist, Remote Test Automation Engineer, 
            Cypress QA Engineer, Selenium Test Automation, Playwright Expert, 
            Test Automation Engineer, Software Tester, Test Automation Specialist, 
            Remote Work QA Engineer, Agile Testing Engineer, CI/CD Pipeline Expert, 
            Functional Testing, API Testing, Cross-Browser Testing, End-to-End Testing, 
            Test Automation Consulting, SaaS QA Specialist, FinTech QA Specialist"
        />
      </Head>

      <div
        className="container mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
        style={{ minHeight: "calc(100vh - 3rem)" }}
        data-cy="contact-page"
      >
        <ContactInfoCard />
        <ContactFormCard />
      </div>
    </>
  );
};

export default Contact;
