import React from "react";
import Link from "next/link";
import Image from "next/image";
import GoogleAnalytics from "@/utils/GoogleAnalytics";
import { RecommendationCardProps } from "@/types";
import { Box, Heading, Text, Flex, Button, useColorModeValue } from "@chakra-ui/react";

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  reviewerName,
  jobTitle,
  date,
  relationship,
  reviewContent,
  imagePath,
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
      data-cy="recommendation-card"
    >
      {/* Card Header */}
      <Flex
        w="full"
        h="20"
        alignItems="center"
        px={{ base: 3, sm: 5 }}
        py={2}
        bg="purple.600"
        data-cy="recommendation-header"
      >
        <Image
          src={imagePath}
          alt={`${reviewerName} profile picture`}
          width={45}
          height={45}
          className="rounded-full border-2 border-white"
          data-cy="recommendation-image"
        />
        <Box ml={3}>
          <Heading as="h3" size="sm" color="white" data-cy="reviewer-name">
            {reviewerName}
          </Heading>
          <Text fontSize="xs" color="white" data-cy="reviewer-job">{jobTitle}</Text>
          <Text fontSize="xs" color="white" data-cy="reviewer-relationship">
            {date} &bull; {relationship}
          </Text>
        </Box>
      </Flex>

      {/* Card Body */}
      <Flex direction="column" p={4} flex="1">
        <Text
          fontSize="sm"
          color={textColor}
          lineHeight="tall"
          flexGrow={1}
          bg={secondaryBgColor}
          p={3}
          mb={4}
          borderRadius="md"
          boxShadow="base"
          data-cy="review-content"
        >
          {reviewContent}
        </Text>

        {/* Button to View on LinkedIn */}
        <Flex mt="auto" justifyContent="center">
          <Link
            href="https://www.linkedin.com/in/joseph-b-smith-eng/details/recommendations/"
            passHref
          >
            <Button
              as="a"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                GoogleAnalytics.trackLinkClick(`"Recommendation from ${reviewerName}" clicked`)
              }
              colorScheme="purple"
              size="md"
              borderRadius="full"
              data-cy="linkedin-recommendation-link"
            >
              View on LinkedIn
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default RecommendationCard;
