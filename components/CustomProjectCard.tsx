import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { CustomProjectCardProps, badgeImages } from "../types";
import { Box, Heading, Text, Flex, Button, Tag, Divider, useColorModeValue } from "@chakra-ui/react";

const CustomProjectCard: React.FC<CustomProjectCardProps> = ({
  customTitle,
  repoName,
  summary,
  html_url,
  technologies,
}) => {
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
      data-cy="project-card"
    >
      {/* Card Header */}
      <Flex
        w="full"
        h="14"
        alignItems="center"
        px={{ base: 3, sm: 4 }}
        py={1}
        bg="purple.600"
        data-cy="project-card-header"
      >
        <Heading as="h2" size="sm" color="white" data-cy="project-title">
          {customTitle}
        </Heading>
      </Flex>

      {/* Card Body */}
      <Flex direction="column" flex="1" p={{ base: 3, sm: 4 }}>
        <Flex justify="space-between" flexWrap="wrap" gap={3} mb={4}>
          {technologies.map((tech) => (
            <Tag
              key={tech}
              size="lg"
              flex="1"
              maxW="fit-content"
              mx="auto"
              padding={2}
              colorScheme="teal"
              borderRadius="xl"
              display="flex"
              alignItems="center"
              justifyContent="center"
              data-cy={`badge-${tech}`}
            >
              <Image
                src={badgeImages[tech]}
                alt={`${tech} badge`}
                width={24}
                height={24}
                className="object-contain"
              />
              <Text ml={2} display={{ base: "none", xl: "inline" }}>
                {tech}
              </Text>
            </Tag>
          ))}
        </Flex>

        {/* Divider */}
        <Divider borderColor="gray.300" my={4} />

        {/* Repository Section */}
        <Box
          mb={3}
          p={2}
          bg={secondaryBgColor}
          borderRadius="md"
          boxShadow="base"
          data-cy="repository-section"
        >
          <Heading as="h3" size="sm" color="gray.600" mb={2} data-cy="repository-heading">
            Repository Information
          </Heading>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color={textColor}
            bg={secondaryBgColor}
            px={2}
            py={1}
            borderRadius="md"
            data-cy="repository-info"
          >
            {repoName}
          </Text>
        </Box>

        {/* Summary Section */}
        <Box mb={4} flex="1" data-cy="summary-section">
          <Heading as="h3" size="sm" color="gray.600" mb={2} data-cy="summary-heading">
            Project Summary
          </Heading>
          <Text
            fontSize="sm"
            color={textColor}
            lineHeight="tall"
            flexGrow={1}
            bg={secondaryBgColor}
            p={3}
            borderRadius="md"
            boxShadow="base"
            data-cy="project-summary"
          >
            {summary}
          </Text>
        </Box>

        {/* Keep Button at the Bottom */}
        <Flex mt="auto" justifyContent="center">
          <Link href={`${html_url}/blob/master/README.md`} passHref>
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                GoogleAnalytics.trackLinkClick(`"Check out the code!" clicked for ${repoName}`)
              }
              colorScheme="purple"
              size="md"
              borderRadius="full"
              data-cy="project-link"
            >
              Check out the code!
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CustomProjectCard;
