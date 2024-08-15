import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";
  const getStyling = (path: string) =>
    `px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
      router.pathname === path
        ? "bg-indigo-700"
        : "hover:bg-indigo-500"
    }`;
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-50">
      <div className="container flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className={`w-10 h-10 mr-4 ${isHomePage ? "invisible" : ""}`}>
            <img
              src="/profile.jpeg"
              alt="Joseph Smith"
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">Joseph Smith</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/" passHref>
            <span
              className={getStyling('/')}
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              className={getStyling('/about')}
            >
              About
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span
              className={getStyling('/projects')}
            >
              Projects
            </span>
          </Link>
          <Link href="/resume" passHref>
            <span
              className={getStyling('/resume')}
            >
              Resume
            </span>
          </Link>
          <Link href="/recommendations" passHref>
            <span className={getStyling('/recommendations')}>Recommendations</span>
          </Link>
          <Link href="/contact" passHref>
            <span
              className={getStyling('/contact')}
            >
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
