import Link from "next/link";
import GoogleAnalytics from "../../utils/GoogleAnalytics";

interface MobileNavigationProps {
  getStyling: (path: string) => string;
  closeMenu: () => void;
}

const MobileNavigation = ({ getStyling, closeMenu }: MobileNavigationProps) => {
  
  const handleNavClick = (label: string) => {
    GoogleAnalytics.trackLinkClick(label);
  };

  return (
    <div className="lg:hidden md:hidden bg-indigo-600 shadow-lg rounded-md rounded-t-none p-2 absolute w-full left-0 bg-gradient-to-r from-blue-500 to-indigo-600" data-cy="navbar-mobile-menu">
      <ul className="space-y-2">
        <li>
          <Link href="/" passHref>
            <span
              className={getStyling("/")}
              onClick={() => {
                closeMenu();
                handleNavClick('Home Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-home-link"
            >
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <span
              className={getStyling("/about")}
              onClick={() => {
                closeMenu();
                handleNavClick('About Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-about-link"
            >
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/projects" passHref>
            <span
              className={getStyling("/projects")}
              onClick={() => {
                closeMenu();
                handleNavClick('Projects Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-projects-link"
            >
              Projects
            </span>
          </Link>
        </li>
        <li>
          <Link href="/resume" passHref>
            <span
              className={getStyling("/resume")}
              onClick={() => {
                closeMenu();
                handleNavClick('Resume Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-resume-link"
            >
              Resume
            </span>
          </Link>
        </li>
        <li>
          <Link href="/recommendations" passHref>
            <span
              className={getStyling("/recommendations")}
              onClick={() => {
                closeMenu();
                handleNavClick('Recommendations Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-recommendations-link"
            >
              Recommendations
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <span
              className={getStyling("/contact")}
              onClick={() => {
                closeMenu();
                handleNavClick('Contact Link - Mobile Navbar');
              }}
              data-cy="navbar-mobile-contact-link"
            >
              Contact
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavigation;
