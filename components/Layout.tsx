import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./NavBar";
import Footer from "./Footer";
import ButtonGroup from './ButtonGroup';  // Import the new ButtonGroup component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ChakraProvider>
      <div className="flex flex-col min-h-screen">
        {/* Responsive NavBar */}
        <NavBar />

        {/* Main Content Area */}
        <main className="flex-grow container mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* ButtonGroup Component */}
        <ButtonGroup />

        {/* Responsive Footer */}
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Layout;
