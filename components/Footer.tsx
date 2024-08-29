import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 py-2">
      <div className="container flex justify-between items-center px-2">
        <p className="text-white text-xs">
          &copy; {new Date().getFullYear()} Joseph Smith. All rights reserved.
        </p>
        <div className="flex space-x-2">
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/contact/linkedin.png"
              alt="LinkedIn"
              width={20}
              height={20}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
          <Link
            href="https://github.com/j-b-smith"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/contact/github.png"
              alt="GitHub"
              width={20}
              height={20}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
