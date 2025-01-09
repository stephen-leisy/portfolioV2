'use client';
import { Flex, Text } from '@chakra-ui/react';
import { AnimationWrapper } from './ui/AnimationWrapper';
import { useLoadAnimationTimer } from '@/hooks/useLoadAnimationTimer';

/**
 * Page wrapper for Projects, Contact, and Tunes pages.
 * Handles responsive styling for page box & header title positioning
 */
export const PageWrapper: React.FC<{
  header?: string;
  children: React.ReactNode;
}> = ({ header, children }) => {
  const loadAnimationInProgress = useLoadAnimationTimer();

  return (
    <AnimationWrapper animationSwitch={!loadAnimationInProgress}>
      <Flex
        maxW={{ xl: '860px', '2xl': '1100px' }}
        w="60vw"
        flexDirection="column"
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
    </AnimationWrapper>
  );
};
