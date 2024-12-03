'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Navigation } from './navigation/Navigation';
import { NameAndTitle } from './NameAndTitle';
import { useTheme } from 'next-themes';

export const PortfolioWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  return (
    <Box
      h="100vh"
      w="100vw"
      p={{ base: 4, md: 8 }}
      bg={darkMode ? 'gray.800' : 'gray.50'}
      minH="650px"
    >
      <Flex
        borderWidth={1}
        borderColor={darkMode ? 'gray.50' : 'gray.700'}
        h="full"
        w="full"
        p={{ base: 4, md: 8 }}
        color={darkMode ? 'gray.50' : 'gray.800'}
        overflow="scroll"
      >
        <Flex
          w={{ base: 'full', md: '70%' }}
          h="full"
          alignItems={{ base: 'flex-start', md: 'flex-end' }}
          position="relative"
          zIndex="30"
        >
          {children}
        </Flex>
        <Flex
          h="full"
          position={{ base: 'absolute', md: 'relative' }}
          right={{ base: 8, md: 0 }}
          w={{ base: '100%', md: '30%' }}
          flexDir={{ base: 'column-reverse', md: 'column' }}
          alignItems="flex-end"
          justifyContent="flex-end"
          gap={6}
          overflow="scroll"
        >
          <Navigation />
          <NameAndTitle />
        </Flex>
      </Flex>
    </Box>
  );
};
