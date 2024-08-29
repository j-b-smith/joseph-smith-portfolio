import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getStyling = (path: string) =>
    `px-3 py-2 text-sm text-white transition-colors duration-300 ${
      router.pathname === path ? "bg-indigo-700 shadow-md rounded-md" : "hover:bg-indigo-500"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-50 py-2">
      <div className="container flex justify-between items-center py-1 px-2 sm:px-4">
        <div className="flex items-center">
          <div className="w-4 h-4 sm:w-5 sm:h-5 mr-1 rounded-full overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Joseph Smith"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xs sm:text-sm font-medium text-white">Joseph Smith</h1>
        </div>
        <button onClick={toggleMenu} className="text-white text-lg sm:text-xl lg:hidden">
          <FaBars />
        </button>
        <nav className="hidden lg:flex space-x-1.5">
          <Link href="/" passHref>
            <span className={getStyling("/")}>Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className={getStyling("/about")}>About</span>
          </Link>
          <Link href="/projects" passHref>
            <span className={getStyling("/projects")}>Projects</span>
          </Link>
          <Link href="/resume" passHref>
            <span className={getStyling("/resume")}>Resume</span>
          </Link>
          <Link href="/recommendations" passHref>
            <span className={getStyling("/recommendations")}>Recommendations</span>
          </Link>
          <Link href="/contact" passHref>
            <span className={getStyling("/contact")}>Contact</span>
          </Link>
        </nav>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-indigo-600 shadow-lg rounded-md rounded-t-none p-2 absolute w-full left-0 bg-gradient-to-r from-blue-500 to-indigo-600">
          <ul className="space-y-2">
            <li>
              <Link href="/" passHref>
                <span className={getStyling("/")} onClick={closeMenu}>Home</span>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref>
                <span className={getStyling("/about")} onClick={closeMenu}>About</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" passHref>
                <span className={getStyling("/projects")} onClick={closeMenu}>Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/resume" passHref>
                <span className={getStyling("/resume")} onClick={closeMenu}>Resume</span>
              </Link>
            </li>
            <li>
              <Link href="/recommendations" passHref>
                <span className={getStyling("/recommendations")} onClick={closeMenu}>Recommendations</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <span className={getStyling("/contact")} onClick={closeMenu}>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
