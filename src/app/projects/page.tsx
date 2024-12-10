import { Flex, Text, Image, Link, Box } from '@chakra-ui/react';
import { projectConfig } from '@/components/portfolioProjectConfig';

const page: React.FC = () => (
  <Flex
    maxW={{ xl: '860px', '2xl': '1100px' }}
    w="60vw"
    flexDirection="column"
    gap={16}
    pt={{ base: 72, lg: '20vh' }}
  >
    <Text
      fontWeight={700}
      fontSize="xl"
      my={2}
      w="full"
      textAlign={{ base: 'right', lg: 'left' }}
    >
      Projects
    </Text>
    {projectConfig.map(({ title, link, displayLink, img1, img2 }) => (
      <Flex flexDirection="column" gap={12} key={title + img1} pb={16}>
        <Flex w="full" gap={4} flexDir={{ base: 'column', lg: 'row' }}>
          <Text
            fontWeight={600}
            color="pink.300"
            textAlign={{ base: 'right', lg: 'left' }}
          >
            {title}
          </Text>
          <Text display={{ base: 'none', lg: 'block' }}>|</Text>
          <Text textAlign={{ base: 'right', lg: 'left' }}>
            <Link
              color="gray.500"
              _dark={{ color: 'gray.100' }}
              href={link}
              target="blank"
              w="fit-content"
            >
              {displayLink}
            </Link>
          </Text>
        </Flex>
        <Image w="full" src={img1} />
        {img2 && <Image w="full" src={img2} />}
      </Flex>
    ))}
    <Box h={2}></Box>
  </Flex>
);

export default page;
