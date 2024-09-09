import React from "react";
import Image from "next/image";
import Link from "next/link";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const ContactInfoCard = () => {
  return (
    <div className="w-full lg:w-1/2 flex-shrink-0 bg-white shadow-lg rounded-lg p-4 sm:p-6" data-cy="contact-info-card">
      <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" data-cy="contact-heading">
        Let&#39;s Get in Touch! 😊
      </h2>
      <p className="text-md sm:text-lg text-gray-700 mb-3 sm:mb-4" data-cy="contact-description">
        I&#39;m always open to discussing new opportunities, projects, or even
        just having a friendly chat. Whether you&#39;re interested in
        collaborating or just want to say hi, I&#39;d love to hear from you! 📬
      </p>
      <div className="space-y-2 mb-4 sm:mb-6">
        <div className="flex items-center">
          <Image
            src="/contact/linkedin.png"
            alt="LinkedIn"
            width={20}
            height={20}
            data-cy="linkedin-icon"
          />
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => GoogleAnalytics.trackLinkClick("LinkedIn")}
            className="ml-2 text-gray-700 hover:text-indigo-800 text-sm sm:text-base"
            data-cy="linkedin-link"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center">
          <Image
            src="/contact/github.png"
            alt="GitHub"
            width={20}
            height={20}
            data-cy="github-icon"
          />
          <Link
            href="https://github.com/j-b-smith"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => GoogleAnalytics.trackLinkClick("GitHub")}
            className="ml-2 text-gray-700 hover:text-indigo-800 text-sm sm:text-base"
            data-cy="github-link"
          >
            GitHub
          </Link>
        </div>
        <div className="flex items-center text-sm sm:text-base" data-cy="email-info">
          <span className="text-gray-700">📧 Email: jsmith74265@gmail.com</span>
        </div>
        <div className="flex items-center text-sm sm:text-base" data-cy="phone-info">
          <span className="text-gray-700">📱 Phone: (812) 314-1581</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-4 sm:mt-6">
        <Image
          src="/contact/puppy.png"
          alt="Puppy"
          width={400}
          height={400}
          className="rounded-full"
          data-cy="puppy-image"
        />
        <p className="text-center text-gray-700 mt-2 text-sm sm:text-base">
          (Here&#39;s a picture of my dog as a puppy 👀)
        </p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
