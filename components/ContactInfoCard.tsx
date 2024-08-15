import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactInfoCard = () => {
  return (
    <div className="lg:w-1/2 flex-shrink-0 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4">Let&#39;s Get in Touch! 😊</h2>
      <p className="text-lg text-gray-700 mb-4">
        I&#39;m always open to discussing new opportunities, projects, or even
        just having a friendly chat. Whether you&#39;re interested in
        collaborating or just want to say hi, I&#39;d love to hear from you! 📬
      </p>
      <div className="space-y-2 mb-6">
        <div className="flex items-center">
          <Image
            src="/contact/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
          />
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-700 hover:text-indigo-800"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex items-center">
          <Image
            src="/contact/github.png"
            alt="GitHub"
            width={24}
            height={24}
          />
          <Link
            href="https://github.com/j-b-smith"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-700 hover:text-indigo-800"
          >
            GitHub
          </Link>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700">📧 Email: jsmith74265@gmail.com</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-700">📱 Phone: (812) 314-1581</span>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <Image
          src="/contact/puppy.png"
          alt="Puppy"
          width={300}
          height={300}
          className="rounded-full"
        />
        <p className="text-center text-gray-700 mt-2">
          (Here&#39;s a picture of my dog as a puppy 👀)
        </p>
      </div>
    </div>
  );
};

export default ContactInfoCard;
