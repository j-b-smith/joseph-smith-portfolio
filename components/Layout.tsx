import React from 'react';
import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import { ChatIcon, DownloadIcon } from '@chakra-ui/icons';
import NavBar from "./NavBar";
import Footer from "./Footer";
import Link from 'next/link';

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

        {/* Button Widgets in the Bottom Left - only visible on large screens */}
        <Box
          position="fixed"
          bottom="4rem"
          left="2rem"
          display={{ base: "none", lg: "flex" }}  // Buttons only visible on large screens
          flexDirection="column"
          gap="1rem"
        >
          {/* Send me a message button */}
          <Link href="/contact" passHref>
            <Button
              colorScheme="blue"
              size="lg"
              data-cy="message-button-text"
              variant="solid"
            >
              Let&#39;s Chat!
            </Button>
          </Link>

          {/* Download my resume button with icon, new tab, and download */}
          <Button
            as="a"
            href="/JosephSmithResume.pdf"
            download
            target="_blank"  // Opens in a new tab
            rel="noopener noreferrer"  // Security best practice when using target="_blank"
            colorScheme="green"
            size="lg"
            data-cy="resume-download-button-text"
            variant="solid"
            leftIcon={<DownloadIcon />}  // Adds the download arrow icon to the left of the text
          >
            My Resume
          </Button>
        </Box>

        {/* Responsive Footer */}
        <Footer />
      </div>
    </ChakraProvider>
  );
};

export default Layout;
