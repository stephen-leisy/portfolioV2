'use client';
import { IProjectConfig } from '@/configs/config-types/projectConfigTypes';
import { Flex, Text, Image, Link, Skeleton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { AnimationWrapper } from './ui/AnimationWrapper';

export const ProjectCard: React.FC<IProjectConfig> = ({
  title,
  img1,
  link,
  linkDisplayTitle,
  isVisible,
  img2,
  iframeSource,
}) => {
  const [imageIsLoaded, setImageIsLoaded] = useState<boolean>(false);
  const [secondImageIsLoaded, setSecondImageIsLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    //@TODO: Fix this weird loading bug in a way that does not require useTimeout
    const timer = setTimeout(() => {
      setImageIsLoaded(true);
      setSecondImageIsLoaded(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
      setImageIsLoaded(false);
    };
  }, []);

  return (
    <AnimationWrapper animationSwitch={isVisible || false}>
      <Flex
        flexDirection="column"
        gap={{ base: 4, lg: 8 }}
        pb={16}
        bg="gray.100"
        p={{ base: 4, lg: 8 }}
        borderRadius="lg"
        _dark={{ bg: 'gray.700' }}
      >
        <Flex
          w="full"
          gap={{ base: 2, lg: 4 }}
          flexDir={{ base: 'column', lg: 'row' }}
          fontSize={{ base: 'sm', lg: 'md' }}
        >
          <Text
            fontWeight={600}
            color="pink.300"
            textAlign={{ base: 'right', lg: 'left' }}
          >
            {title}
          </Text>
          <Text display={{ base: 'none', lg: 'block' }}>|</Text>
          <Text textAlign={{ base: 'right', lg: 'left' }}>
            <Link
              color="gray.500"
              _dark={{ color: 'gray.100' }}
              href={link}
              target="blank"
              w="fit-content"
            >
              {linkDisplayTitle}
            </Link>
          </Text>
        </Flex>
        {img1 && (
          <Skeleton loading={!imageIsLoaded}>
            <Image
              borderRadius="lg"
              w="full"
              src={img1}
              alt={img1}
              loading="lazy"
              onLoad={() => setImageIsLoaded(true)}
            />
          </Skeleton>
        )}
        {img2 && (
          <Skeleton loading={!secondImageIsLoaded}>
            <Image
              borderRadius="lg"
              w="full"
              src={img2}
              alt={img2}
              loading="lazy"
              onLoad={() => setSecondImageIsLoaded(true)}
            />
          </Skeleton>
        )}
        {iframeSource && (
          <Skeleton loading={!imageIsLoaded}>
            <iframe
              width="100%"
              height="166"
              allow="autoplay"
              src={iframeSource}
              onLoad={() => setImageIsLoaded(true)}
            ></iframe>
          </Skeleton>
        )}
      </Flex>
    </AnimationWrapper>
  );
};
