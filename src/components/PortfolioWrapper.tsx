'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Navigation } from './navigation/Navigation';
import { NameAndTitle } from './NameAndTitle';
import Div100vh from 'react-div-100vh';
import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export const PortfolioWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleScroll = () => {
    if (scrollBoxRef.current) {
      if (scrollBoxRef.current.scrollTop === 0) setIsScrolling(false);
      else setIsScrolling(true);
    }
  };
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
            ref={scrollBoxRef}
            onScroll={handleScroll}
            gap={{ base: 32, lg: 40 }}
          >
            <Flex
              h="full"
              w="fit-content"
              position="absolute"
              flexDir="column"
              gap={6}
            >
              <NameAndTitle />
              <Navigation />
            </Flex>
            <Flex
              h="full"
              w="full"
              justifyContent="flex-end"
              alignItems={{
                base: 'flex-start',
                lg: pathname !== '/projects' ? 'flex-end' : 'flex-start',
              }}
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
