'use client';
import { IProjectConfig } from '@/configs/portfolioProjectConfig';
import { Box, Flex, Text } from '@chakra-ui/react';

export const TunesIframe: React.FC<IProjectConfig> = ({
  iframeSource,
  title,
  linkDisplayTitle,
  link,
}) => (
  <Box>
    <Flex
      fontSize="sm"
      color="gray.800"
      _dark={{ color: 'gray.50' }}
      mb={4}
      gap={4}
    >
      <Text color="pink.400" _dark={{ color: 'pink.300' }}>
        {title}
      </Text>
      <Text display={{ base: 'none', lg: 'block' }}>|</Text>
      <a
        href={link}
        title="Life Is But A Dream"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        {linkDisplayTitle}
      </a>
    </Flex>

    <iframe
      width="100%"
      height="166"
      allow="autoplay"
      src={iframeSource}
    ></iframe>
  </Box>
);
