import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const getStyling = (path: string) =>
    `block px-4 py-2 text-white rounded-md transition-colors duration-300 ${
      router.pathname === path ? "bg-indigo-700" : "hover:bg-indigo-500"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-50">
      <div className="container flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className="w-8 h-8 mr-2">
            <img
              src="/profile.jpeg"
              alt="Joseph Smith"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-white">Joseph Smith</h1>
        </div>
        <button onClick={toggleMenu} className="text-white text-3xl lg:hidden">
          <FaBars />
        </button>
        <nav className="hidden lg:flex space-x-4">
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
        <div className="lg:hidden bg-indigo-600 shadow-lg rounded-md p-4 space-y-2 absolute w-full left-0 top-[4rem]">
          <Link href="/" passHref>
            <span className={getStyling("/")} onClick={closeMenu}>Home</span>
          </Link>
          <Link href="/about" passHref>
            <span className={getStyling("/about")} onClick={closeMenu}>About</span>
          </Link>
          <Link href="/projects" passHref>
            <span className={getStyling("/projects")} onClick={closeMenu}>Projects</span>
          </Link>
          <Link href="/resume" passHref>
            <span className={getStyling("/resume")} onClick={closeMenu}>Resume</span>
          </Link>
          <Link href="/recommendations" passHref>
            <span className={getStyling("/recommendations")} onClick={closeMenu}>Recommendations</span>
          </Link>
          <Link href="/contact" passHref>
            <span className={getStyling("/contact")} onClick={closeMenu}>Contact</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
