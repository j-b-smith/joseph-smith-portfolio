import React from 'react';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactFormCard from '../components/ContactFormCard';

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-10 px-6 pb-16 min-h-full">
      <ContactInfoCard />
      <ContactFormCard />
    </div>
  );
};

export default Contact;
