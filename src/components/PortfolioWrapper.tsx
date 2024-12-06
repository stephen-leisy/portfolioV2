'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Navigation } from './navigation/Navigation';
import { NameAndTitle } from './NameAndTitle';
import { useTheme } from 'next-themes';
import Div100vh from 'react-div-100vh';

export const PortfolioWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme } = useTheme();
  const darkMode = theme === 'dark';

  return (
    <Box
      h="100vh"
      w="100vw"
      bg={darkMode ? 'gray.800' : 'gray.50'}
      overflow="none"
    >
      <Div100vh>
        <Box h="full" w="full" p={{ base: 4, md: 8 }} minH="650px">
          <Flex
            borderWidth={1}
            borderColor={darkMode ? 'gray.50' : 'gray.700'}
            h="full"
            w="full"
            p={{ base: 4, md: 8 }}
            color={darkMode ? 'gray.50' : 'gray.800'}
            overflow="scroll"
            justifyContent="space-between"
            gap={{ base: 32, lg: 40 }}
          >
            <Flex
              h="full"
              w="346px"
              minW="346px"
              position={{ base: 'absolute', lg: 'relative' }}
              flexDir="column"
              gap={8}
              overflow="scroll"
            >
              <NameAndTitle />
              <Navigation />
            </Flex>
            <Flex
              h="full"
              alignItems={{ base: 'flex-start', lg: 'flex-end' }}
              zIndex="30"
            >
              {children}
            </Flex>
          </Flex>
        </Box>
      </Div100vh>
    </Box>
  );
};
