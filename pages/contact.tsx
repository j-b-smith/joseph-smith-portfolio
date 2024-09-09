import React from 'react';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactFormCard from '../components/ContactFormCard';

const Contact = () => {
  return (
    <div
      className="container mx-auto flex flex-col lg:flex-row gap-6 sm:gap-8 py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      style={{ minHeight: "calc(100vh - 3rem)" }}
      data-cy="contact-page"
    >
      <ContactInfoCard />
      <ContactFormCard />
    </div>
  );
};

export default Contact;
