import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin, FaRegCommentDots } from 'react-icons/fa';
import Link from 'next/link';

const ButtonGroup: React.FC = () => {
  return (
    <Box
      position="fixed"
      bottom="4rem"
      left="2rem"
      display={{ base: "none", lg: "flex" }}
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
          leftIcon={<FaRegCommentDots />}
          width="12rem"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        >
          Message
        </Button>
      </Link>

      {/* Download my resume button */}
      <Button
        as="a"
        href="/JosephSmithResume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="green"
        size="lg"
        data-cy="resume-download-button-text"
        variant="solid"
        leftIcon={<DownloadIcon />}
        width="12rem"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        Resume
      </Button>

      {/* GitHub button */}
      <Button
        as="a"
        href="https://github.com/j-b-smith"
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="gray"
        size="lg"
        variant="solid"
        leftIcon={<FaGithub />}
        width="12rem"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        GitHub
      </Button>

      {/* LinkedIn button */}
      <Button
        as="a"
        href="https://www.linkedin.com/in/joseph-b-smith-eng/"
        target="_blank"
        rel="noopener noreferrer"
        colorScheme="linkedin"
        size="lg"
        variant="solid"
        leftIcon={<FaLinkedin />}
        width="12rem"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      >
        LinkedIn
      </Button>
    </Box>
  );
};

export default ButtonGroup;
