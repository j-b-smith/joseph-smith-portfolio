import Link from "next/link";
import GoogleAnalytics from "../../utils/GoogleAnalytics";

interface MainNavigationProps {
  getStyling: (path: string) => string;
}

const MainNavigation = ({ getStyling }: MainNavigationProps) => {
  
  const handleNavClick = (label: string) => {
    GoogleAnalytics.trackLinkClick(label);
  };

  return (
    <nav className="hidden lg:flex md:flex space-x-1.5">
      <Link href="/" passHref>
        <span
          className={getStyling("/")}
          data-cy="navbar-home-link"
          onClick={() => handleNavClick('Home Link - Navbar')}
        >
          Home
        </span>
      </Link>
      <Link href="/about" passHref>
        <span
          className={getStyling("/about")}
          data-cy="navbar-about-link"
          onClick={() => handleNavClick('About Link - Navbar')}
        >
          About
        </span>
      </Link>
      <Link href="/projects" passHref>
        <span
          className={getStyling("/projects")}
          data-cy="navbar-projects-link"
          onClick={() => handleNavClick('Projects Link - Navbar')}
        >
          Projects
        </span>
      </Link>
      <Link href="/resume" passHref>
        <span
          className={getStyling("/resume")}
          data-cy="navbar-resume-link"
          onClick={() => handleNavClick('Resume Link - Navbar')}
        >
          Resume
        </span>
      </Link>
      <Link href="/recommendations" passHref>
        <span
          className={getStyling("/recommendations")}
          data-cy="navbar-recommendations-link"
          onClick={() => handleNavClick('Recommendations Link - Navbar')}
        >
          Recommendations
        </span>
      </Link>
      <Link href="/contact" passHref>
        <span
          className={getStyling("/contact")}
          data-cy="navbar-contact-link"
          onClick={() => handleNavClick('Contact Link - Navbar')}
        >
          Contact
        </span>
      </Link>
    </nav>
  );
};

export default MainNavigation;
