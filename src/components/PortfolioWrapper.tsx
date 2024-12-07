'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Navigation } from './navigation/Navigation';
import { NameAndTitle } from './NameAndTitle';
import Div100vh from 'react-div-100vh';

export const PortfolioWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Box
      h="100vh"
      w="100vw"
      bg="gray.50"
      _dark={{ bg: 'gray.800' }}
      overflow="none"
    >
      <Div100vh>
        <Box h="full" w="full" p={{ base: 4, md: 8 }} minH="650px">
          <Flex
            borderWidth={1}
            borderColor="gray.700"
            h="full"
            w="full"
            p={{ base: 4, md: 8 }}
            color="gray.800"
            _dark={{ color: 'gray.50', borderColor: 'gray.50' }}
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
