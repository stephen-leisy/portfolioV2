'use client';
import { Flex, Text } from '@chakra-ui/react';

/**
 * Page wrapper for Projects, Contact, and Tunes pages.
 * Handles responsive styling for page box & header title positioning
 */
export const PageWrapper: React.FC<{
  header?: string;
  children: React.ReactNode;
}> = ({ header, children }) => (
  <Flex
    maxW={{ xl: '860px', '2xl': '1100px' }}
    w="60vw"
    flexDirection="column"
    gap={{ base: 12, md: 16 }}
    pt={{ base: 72, lg: '20vh' }}
    textAlign={{ base: 'right', lg: 'left' }}
  >
    {header && (
      <Text
        fontWeight={700}
        fontSize={{ base: 'lg', lg: 'xl' }}
        my={2}
        w="full"
      >
        {header}
      </Text>
    )}

    {children}
  </Flex>
);
