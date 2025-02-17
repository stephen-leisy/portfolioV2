'use client';
import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import { MainImage } from './MainImage';
import { AnimationWrapper } from './ui/AnimationWrapper';
import { useLoadAnimationTimer } from '@/hooks/useLoadAnimationTimer';

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
}) => {
  const loadAnimationInProgress = useLoadAnimationTimer();

  return (
    <AnimationWrapper animationSwitch={!loadAnimationInProgress}>
      <Flex
        maxW={{ xl: '860px', '2xl': '1100px' }}
        flexDirection="column"
        w="60vw"
        pt={{ base: 72, lg: 0 }}
        gap={4}
      >
        <Flex w="full" justifyContent={{ base: 'flex-end', lg: 'flex-start' }}>
          <MainImage imgUrl={imgUrl} />
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
            gap={8}
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
            </Text>
          </Flex>
        </Box>
      </Flex>
    </AnimationWrapper>
  );
};
