'use client';

import { Flex, Box } from '@chakra-ui/react';
import { Navigation } from './Navigation';
import { NameAndTitle } from './NameAndTitle';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useScrolledToBottom } from '@/hooks/useScrolledToBottom';
import { HiArrowSmDown } from 'react-icons/hi';
import Div100vh from 'react-div-100vh';

export const PortfolioWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const { handleScroll, isAtBottom } = useScrolledToBottom(scrollBoxRef);

  return (
    <Div100vh>
      <Box
        h="full"
        minH="350px"
        w="100vw"
        bg="gray.50"
        _dark={{ bg: 'gray.900' }}
        overflow="none"
        p={{ base: 4, md: 8 }}
      >
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
            h="fit-content"
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
              base: pathname === '/links' ? 'flex-end' : 'flex-start',
              lg:
                pathname === '/' || pathname === '/links'
                  ? 'flex-end'
                  : 'flex-start',
            }}
            zIndex="30"
          >
            {!isAtBottom && (
              <Box
                zIndex="999"
                position="absolute"
                style={{
                  animation:
                    'slide-to-bottom-full 1s ease-in-out infinite alternate',
                }}
              >
                <HiArrowSmDown />
              </Box>
            )}
            {children}
          </Flex>
        </Flex>
      </Box>
    </Div100vh>
  );
};
