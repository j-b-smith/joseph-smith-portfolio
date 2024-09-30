import React from "react";
import Image from "next/image";
import { Box, Text, Link as ChakraLink, Grid, Button } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const ContactInfoCard = () => {
  return (
    <Box className="w-full lg:w-1/2 flex-shrink-0 bg-white shadow-lg rounded-lg p-4 sm:p-6" data-cy="contact-info-card">
      {/* Contact Header */}
      <Text fontSize={['3xl', '2xl']} fontWeight="bold" mb={4} data-cy="contact-heading">
        Let&#39;s Connect! 🚀
      </Text>
      <Text fontSize={['lg', 'md']} color="gray.700" mb={6} data-cy="contact-description">
        I&#39;m always stoked to chat about new projects, opportunities, or even just have a fun conversation. Hit me up if you&#39;re ready to collaborate or just want to say hey! 🎉
      </Text>

      {/* Icon Grid for Contact Methods */}
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={4}>
        {/* Email Button */}
        <Button
          as={ChakraLink}
          href="mailto:jsmith74265@gmail.com"
          size="lg"
          colorScheme="blue"
          data-cy="email-link"
          leftIcon={<EmailIcon />}
          onClick={() => GoogleAnalytics.trackLinkClick("Email")}
        >
          Email
        </Button>

        {/* GitHub Button */}
        <Button
          as={ChakraLink}
          href="https://github.com/j-b-smith"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          colorScheme="gray"
          leftIcon={<FaGithub />}
          data-cy="github-link"
          onClick={() => GoogleAnalytics.trackLinkClick("GitHub")}
        >
          GitHub
        </Button>

        {/* LinkedIn Button */}
        <Button
          as={ChakraLink}
          href="https://linkedin.com/in/joseph-b-smith-eng"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          colorScheme="linkedin"
          leftIcon={<FaLinkedin />}
          data-cy="linkedin-link"
          onClick={() => GoogleAnalytics.trackLinkClick("LinkedIn")}
        >
          LinkedIn
        </Button>

        {/* Phone Button */}
        <Button
          as={ChakraLink}
          href="tel:+18123141581"
          size="lg"
          colorScheme="teal"
          leftIcon={<PhoneIcon />}
          data-cy="phone-link"
          onClick={() => GoogleAnalytics.trackLinkClick("Phone")}
        >
          (812) 314-1581
        </Button>
      </Grid>

      {/* Himi's Picture */}
      <Box textAlign="center" display="flex" justifyContent="center" flexDirection="column" alignItems="center" mt={[8, 6]}>
        <Image
          src="/contact/himi.png"
          alt="Puppy"
          width={500}
          height={300}
          className="rounded-xl"
          data-cy="puppy-image"
        />
        <Text mt={4} fontSize="sm" color="gray.500" fontStyle="italic">
          Meet Himi 🐾, the cutest partner in crime and junior dev you&#39;ve ever seen! 
        </Text>
      </Box>
    </Box>
  );
};

export default ContactInfoCard;
