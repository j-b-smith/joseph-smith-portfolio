import Link from "next/link";

interface MainNavigationProps {
  getStyling: (path: string) => string;
}

const MainNavigation = ({ getStyling }: MainNavigationProps) => {
  return (
    <nav className="hidden lg:flex md:flex space-x-1.5">
      <Link href="/" passHref>
        <span className={getStyling("/")} data-cy="navbar-home-link">Home</span>
      </Link>
      <Link href="/about" passHref>
        <span className={getStyling("/about")} data-cy="navbar-about-link">About</span>
      </Link>
      <Link href="/projects" passHref>
        <span className={getStyling("/projects")} data-cy="navbar-projects-link">Projects</span>
      </Link>
      <Link href="/resume" passHref>
        <span className={getStyling("/resume")} data-cy="navbar-resume-link">Resume</span>
      </Link>
      <Link href="/recommendations" passHref>
        <span className={getStyling("/recommendations")} data-cy="navbar-recommendations-link">Recommendations</span>
      </Link>
      <Link href="/contact" passHref>
        <span className={getStyling("/contact")} data-cy="navbar-contact-link">Contact</span>
      </Link>
    </nav>
  );
};

export default MainNavigation;
