import React from 'react';
import { Text, Image, Flex } from '@chakra-ui/react';

interface IPageTemplate {
  pageName: string;
  columnOne: string;
  columnTwo: string;
  imgUrl: string;
}

export const PageTemplate: React.FC<IPageTemplate> = ({
  pageName,
  columnOne,
  columnTwo,
  imgUrl,
}) => (
  <Flex flexDirection="column" w="70%" gap={4} pt={{ base: 16, md: 0 }}>
    <Image w="65%" src={imgUrl} alt="images for portfolio site" />
    <Text fontWeight={700} fontSize="xl" mt={2}>
      {pageName}
    </Text>
    <Flex gap={5} flexDirection={{ base: 'column', md: 'row' }}>
      <Text fontSize="xs" w={{ base: '100%', md: '50%' }} fontWeight={500}>
        {columnOne}
      </Text>
      <Text fontSize="xs" w={{ base: '100%', md: '50%' }} fontWeight={500}>
        {columnTwo}
      </Text>
    </Flex>
  </Flex>
);
