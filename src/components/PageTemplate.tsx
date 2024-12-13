import React from 'react';
import { Text, Image, Flex, Box, Link } from '@chakra-ui/react';

interface IPageTemplate {
  pageName: string;
  columnOne: string;
  columnTwo: string;
  imgUrl: string;
  imageWidth?: string;
  addLinkLine?: boolean;
}

export const PageTemplate: React.FC<IPageTemplate> = ({
  pageName,
  columnOne,
  columnTwo,
  imgUrl,
  imageWidth = '65%',
  addLinkLine = false,
}) => (
  <Flex
    maxW={{ xl: '860px', '2xl': '1100px' }}
    flexDirection="column"
    w="60vw"
    pt={{ base: 72, lg: 0 }}
    gap={4}
  >
    <Flex w="full" justifyContent={{ base: 'flex-end', lg: 'flex-start' }}>
      <Image
        w={{ base: '80%', lg: imageWidth }}
        src={imgUrl}
        alt="images for portfolio site"
        loading="lazy"
      />
    </Flex>
    <Box>
      <Text
        fontWeight={700}
        fontSize="xl"
        my={2}
        w="full"
        textAlign={{ base: 'right', lg: 'left' }}
      >
        {pageName}
      </Text>
      <Flex
        gap={5}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'flex-end', lg: 'flex-start' }}
      >
        <Text
          fontSize="xs"
          w={{ base: '60%', lg: '50%' }}
          textAlign={{ base: 'right', lg: 'left' }}
          fontWeight={500}
        >
          {columnOne}
        </Text>
        <Text
          fontSize="xs"
          w={{ base: '60%', lg: '50%' }}
          textAlign={{ base: 'right', lg: 'left' }}
          fontWeight={500}
        >
          {columnTwo}
          {addLinkLine && (
            <Link
              display="block"
              w="fit-content"
              mt={2}
              href="https://github.com/stephen-leisy/portfolioV2"
              target="blank"
              _hover={{ color: 'pink.300' }}
            >
              The code for this site lives here.
            </Link>
          )}
        </Text>
      </Flex>
    </Box>
  </Flex>
);
