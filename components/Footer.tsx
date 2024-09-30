import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 py-2"
      data-cy="footer"
    >
      <div className="container flex justify-between items-center px-2" data-cy="footer-container">
        <p className="text-white text-xs" data-cy="footer-text">
          &copy; {new Date().getFullYear()} Joseph Smith. All rights reserved.
        </p>
        <div className="flex space-x-2" data-cy="footer-links">
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="footer-linkedin"
            onClick={() => GoogleAnalytics.trackLinkClick('LinkedIn - Footer')}
          >
            <Image
              src="/contact/linkedin.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="hover:opacity-80 transition-opacity duration-300"
              data-cy="footer-linkedin-icon"
            />
          </Link>
          <Link
            href="https://github.com/j-b-smith"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="footer-github"
            onClick={() => GoogleAnalytics.trackLinkClick('GitHub - Footer')}
          >
            <Image
              src="/contact/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="hover:opacity-80 transition-opacity duration-300"
              data-cy="footer-github-icon"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
