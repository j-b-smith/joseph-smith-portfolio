import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-2 fixed bottom-0 left-0 w-full">
      <div className="container">
        <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Joseph Smith. All rights reserved.</p>
        <p className="text-sm">
          <Link
            href="https://linkedin.com/in/joseph-b-smith-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            LinkedIn
          </Link>
          {' | '}
          <Link
            href="https://github.com/j-b-smith"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
