import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto py-10 px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
