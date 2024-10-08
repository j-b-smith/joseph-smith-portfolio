import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import GoogleAnalytics from "../utils/GoogleAnalytics";

const ContactFormCard = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_273hcm9',               
      'template_wcr2hpd',              
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'zzNsGvyMrLMaW8CWh'
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      GoogleAnalytics.event('submit', 'Contact Form', 'Form Submitted Successfully');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message. Please try again later.');
      GoogleAnalytics.event('error', 'Contact Form', 'Form Submission Failed');
    });
  };

  return (
    <div className="w-full lg:w-1/2 flex-shrink-0 bg-white shadow-lg rounded-lg p-4 sm:p-6 flex flex-col" data-cy="contact-form">
      {isSent ? (
        <div className="text-center" data-cy="message-sent">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Message Sent! 🎉</h2>
          <p className="text-md sm:text-lg text-gray-700">Thank you for reaching out! I&#39;ll get back to you as soon as possible.</p>
        </div>
      ) : (
        <>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-gray-600">Send me a Message!</h2>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 flex-grow flex flex-col" data-cy="contact-form-submit">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm sm:text-base font-bold mb-1 sm:mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-1.5 sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your name"
                required
                data-cy="input-name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm sm:text-base font-bold mb-1 sm:mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-1.5 sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your email"
                required
                data-cy="input-email"
              />
            </div>
            <div className="flex-grow">
              <label htmlFor="message" className="block text-gray-700 text-sm sm:text-base font-bold mb-1 sm:mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-1.5 sm:py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your message"
                rows={18}
                required
                data-cy="input-message"
              />
            </div>
            <div className="flex items-end justify-between mt-4">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1.5 sm:py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm sm:text-base"
                data-cy="submit-button"
                onClick={() => GoogleAnalytics.event('click', 'Contact Form', 'Submit Button Clicked')}
              >
                Send Message
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactFormCard;
