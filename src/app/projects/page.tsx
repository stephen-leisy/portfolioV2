import { Flex, Text, Box } from '@chakra-ui/react';
import { projectConfig } from '@/components/portfolioProjectConfig';
import { ProjectCard } from '@/components/ProjectCard';

const page: React.FC = () => (
  <Flex
    maxW={{ xl: '860px', '2xl': '1100px' }}
    w="60vw"
    flexDirection="column"
    gap={{ base: 12, md: 16 }}
    pt={{ base: 72, lg: '20vh' }}
  >
    <Text
      fontWeight={700}
      fontSize={{ base: 'lg', lg: 'xl' }}
      my={2}
      w="full"
      textAlign={{ base: 'right', lg: 'left' }}
    >
      Projects
    </Text>
    {projectConfig.map((props) => (
      <ProjectCard {...props} />
    ))}
    <Box h={2}></Box>
  </Flex>
);

export default page;
