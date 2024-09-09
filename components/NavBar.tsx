import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useRouter } from "next/router";
import MainNavigation from "./navigation/MainNavigation";
import MobileNavigation from "./navigation/MobileNavigation";

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
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-50 py-2" data-cy="navbar">
      <div className="container flex justify-between items-center py-1 px-2 sm:px-4">
        <div className="flex items-center">
          <div className="w-4 h-4 sm:w-5 sm:h-5 mr-1 rounded-full overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Joseph Smith"
              className="w-full h-full object-cover"
              data-cy="navbar-profile-image"
            />
          </div>
          <h1 className="text-xs sm:text-sm font-medium text-white" data-cy="navbar-name">Joseph Smith</h1>
        </div>

        {/* Mobile Menu Button for small screens */}
        <button onClick={toggleMenu} className="text-white text-lg sm:text-xl lg:hidden md:hidden" data-cy="navbar-toggle-button">
          <FaBars />
        </button>

        {/* Main Navigation for medium and large screens */}
        <nav className="hidden md:flex space-x-1.5">
          <MainNavigation getStyling={getStyling} />
        </nav>
      </div>

      {/* Mobile Navigation for small screens */}
      {isOpen && (
        <div className="block md:hidden">
          <MobileNavigation getStyling={getStyling} closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
