import React from 'react';
import { Box, Heading, Text, Flex, Tag, Divider } from "@chakra-ui/react";
import { resumeData } from "../../public/resume/resumeData";

const ResumeCard: React.FC = () => {
  return (
    <Box
      bg="white"
      shadow="lg"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      data-cy="resume-card"
      height="full"
    >
      {/* Card Body (Scrollable if necessary) */}
      <Box
        overflowY="auto"
        p={4}
        maxH="85vh"  // Set a max height to the card relative to the viewport height
        data-cy="resume-content"
        mt={4}
      >
        {/* Work Experience Section */}
        <Box mb={6}>
          <Heading as="h3" size="md" mb={4} color="gray.600">Work Experience</Heading>
          {resumeData.experience.map((experience, idx) => (
            <Box key={idx} mb={6}>
              <Heading as="h4" size="sm" color="gray.700">{experience.role}</Heading>
              <Text fontSize="sm" color="gray.500" mb={2}>{experience.company} | {experience.duration}</Text>
              <ul>
                {experience.description.map((bullet, idx) => (
                  <li key={idx}>
                    <Text fontSize="sm" color="gray.700" mb={1}>- {bullet}</Text>
                  </li>
                ))}
              </ul>
              <Flex mt={2} wrap="wrap" gap={2}>
                {experience.technologies.map((tech, idx) => (
                  <Tag key={idx} size="sm" colorScheme="teal">
                    {tech}
                  </Tag>
                ))}
              </Flex>
              <Divider mt={4} />
            </Box>
          ))}
        </Box>

        {/* Education Section */}
        <Box mb={6}>
          <Heading as="h3" size="md" mb={4} color="gray.600">Education</Heading>
          <Box>
            <Heading as="h4" size="sm" color="gray.700">{resumeData.education.degree}</Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>{resumeData.education.institution}</Text>
            <Text fontSize="sm" color="gray.500">{resumeData.education.graduationDate}</Text>
            <Divider mt={4} />
          </Box>
        </Box>

        {/* Projects Section */}
        <Box mb={6}>
        <Box mb={6}>
        <Heading as="h3" size="md" mb={4} color="gray.600">
          Projects
        </Heading>
        {resumeData.projects.map((project, idx) => (
          <Box key={idx} mb={4}>
            <Heading as="h4" size="sm" color="gray.700">
              {project.title}
            </Heading>
            <Text fontSize="sm" color="gray.500" mb={2}>
              {project.description}
            </Text>
            <Flex mt={2} wrap="wrap" gap={2}>
              {project.technologies.map((tech, idx) => (
                <Tag key={idx} size="sm" colorScheme="teal">
                  {tech}
                </Tag>
              ))}
            </Flex>
          </Box>
        ))}
      </Box>
        </Box>

        {/* Skills Section */}
        <Box mt={8}>
          <Heading as="h3" size="md" mb={4} color="gray.600">Skills</Heading>

          {Object.entries(resumeData.skills).map(([category, skills], idx) => (
            <Box key={idx} mb={4}>
              <Heading as="h4" size="sm" mb={2} color="gray.600">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Heading>

              <Flex mt={2} wrap="wrap" gap={2}>
                {skills.map((skill, skillIdx) => (
                  <Tag key={skillIdx} colorScheme="teal" size="lg">
                    {skill}
                  </Tag>
                ))}
              </Flex>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ResumeCard;
