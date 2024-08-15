import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-indigo-600 text-center py-4">
      <div className="container flex flex-col items-center">
        <p className="text-white text-sm mb-2">&copy; {new Date().getFullYear()} Joseph Smith. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/contact/linkedin.png"
              alt="LinkedIn"
              width={32}
              height={32}
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
              width={32}
              height={32}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
