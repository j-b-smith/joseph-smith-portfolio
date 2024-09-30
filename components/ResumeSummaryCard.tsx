import React from "react";
import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Flex,
  Divider,
  Tag,
} from "@chakra-ui/react";
import GoogleAnalytics from "@/utils/GoogleAnalytics";

const ResumeSummaryCard: React.FC = () => {
  const handleClick = () => {
    GoogleAnalytics.trackLinkClick("Resume Download Clicked");
  };

  // Color mode values
  const bgColor = useColorModeValue("white", "gray.800");
  const secondaryBgColor = useColorModeValue("gray.50", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box
      bg={bgColor}
      shadow="lg"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      border="1px solid"
      borderColor="gray.200"
      height="full"
      data-cy="resume-summary-card"
    >
      {/* Card Header */}
      <Flex
        w="full"
        alignItems="center"
        justifyContent="center"
        py={4}
        px={4}
        backgroundImage="linear-gradient(to right, #3B82F6, #4F46E5)"
        borderBottom="1px solid"
        borderColor="gray.200"
        data-cy="resume-summary-header"
      >
        <Heading
          as="h2"
          size="md"
          color="white"
          textAlign="center"
          data-cy="resume-summary-heading"
        >
          Hey, I’m Joseph Smith! 👋
        </Heading>
      </Flex>

      {/* Card Body */}
      <Flex direction="column" flex="1" p={{ base: 3, sm: 4 }} justifyContent="flex-start">
        {/* About Me Section */}
        <Box mb={4} flex="1" data-cy="about-me-section">
          <Heading
            as="h3"
            size="sm"
            color="gray.600"
            mb={2}
            data-cy="about-me-heading"
          >
            About Me
          </Heading>
          <List spacing={4} color={textColor} data-cy="resume-summary-list">
            <ListItem>
              I’m a <strong>Software Engineer</strong> passionate about{" "}
              <strong>Quality Automation</strong>. My expertise lies in tools
              like <strong>Cypress</strong>, <strong>Selenium</strong>, and{" "}
              <strong>PyTest</strong>, where I’ve led in automating critical
              tests to ensure top-notch software quality. 🛠️
            </ListItem>
            <ListItem>
              My experience spans <strong>healthcare</strong>,{" "}
              <strong>SaaS</strong>, and <strong>FinTech</strong> industries,
              collaborating with teams to streamline testing processes, catch
              bugs early, and accelerate software delivery. 🚀
            </ListItem>
            <ListItem>
              I’m a self-motivated learner who has independently taught myself{" "}
              <strong>Playwright</strong>, <strong>Next.js</strong>,{" "}
              <strong>React</strong>, <strong>Django</strong>, and{" "}
              <strong>CI/CD integration.</strong>. 💡
            </ListItem>
            <ListItem>
              I’ve created and maintained <strong>CI/CD pipelines</strong> for
              personal projects, and pushed automation through existing
              pipelines professionally. 🔄
            </ListItem>
            <ListItem>
              I’m comfortable with <strong>React</strong>,{" "}
              <strong>Next.js</strong>, and <strong>Django</strong>, always
              eager to learn new technologies. 🌱
            </ListItem>
            <ListItem>
              My mission? To drive innovation in test automation and help teams
              ship reliable, high-quality software faster. 💻
            </ListItem>
            <ListItem>
              Outside of work, I’m always growing—whether learning a new tech
              stack, playing guitar, or enjoying the outdoors. 🎸🌲
            </ListItem>
          </List>
        </Box>

        {/* Divider */}
        <Divider borderColor="gray.300" my={4} />

        {/* Button Section */}
        <Flex mt="auto" justifyContent="center">
          <Link href="/JosephSmithResume.pdf" passHref>
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              color="white"
              backgroundColor="#4F46E5"
              size="md"
              borderRadius="full"
              data-cy="resume-download-button"
            >
              Download my Resume!
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ResumeSummaryCard;
