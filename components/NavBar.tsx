import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg z-50">
      <div className="container flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <div className={`w-10 h-10 mr-4 ${isHomePage ? 'invisible' : ''}`}>
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
              className={`px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
                router.pathname === '/' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/about" passHref>
            <span
              className={`px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
                router.pathname === '/about' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              About
            </span>
          </Link>
          <Link href="/projects" passHref>
            <span
              className={`px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
                router.pathname === '/projects' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Projects
            </span>
          </Link>
          <Link href="/resume" passHref>
            <span
              className={`px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
                router.pathname === '/resume' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
            >
              Resume
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span
              className={`px-3 py-2 rounded-md text-white transition-colors duration-300 cursor-pointer ${
                router.pathname === '/contact' ? 'bg-indigo-700' : 'hover:bg-indigo-500'
              }`}
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
