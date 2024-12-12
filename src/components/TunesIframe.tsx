'use client';
import { ITunesConfig } from '@/configs/tunesConfig';
import { Box, Flex, Text } from '@chakra-ui/react';

export const TunesIframe: React.FC<ITunesConfig> = ({
  source,
  bandName,
  songName,
  songLink,
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
        {bandName}
      </Text>
      ·
      <a
        href={songLink}
        title="Life Is But A Dream"
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        {songName}
      </a>
    </Flex>

    <iframe width="100%" height="166" allow="autoplay" src={source}></iframe>
  </Box>
);
