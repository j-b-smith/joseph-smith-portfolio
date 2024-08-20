import React from 'react';
import ContactInfoCard from '../components/ContactInfoCard';
import ContactFormCard from '../components/ContactFormCard';

const Contact = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row gap-8 py-12 px-6 pb-16" style={{ minHeight: "calc(100vh - 3rem)" }}>
      <ContactInfoCard />
      <ContactFormCard />
    </div>
  );
};

export default Contact;
