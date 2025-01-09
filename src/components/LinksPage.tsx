'use client';
import { AnimationWrapper } from '@/components/ui/AnimationWrapper';
import { linksConfig } from '@/configs/linksConfig';
import { useLoadAnimationTimer } from '@/hooks/useLoadAnimationTimer';
import { Flex, Link } from '@chakra-ui/react';

export const LinksPage: React.FC = () => {
  const loadAnimationInProgress = useLoadAnimationTimer();

  return (
    <AnimationWrapper animationSwitch={!loadAnimationInProgress}>
      <Flex flexDirection="column" alignItems="flex-end" gap={2}>
        {linksConfig.map(({ link, displayTitle }) => (
          <Link
            color="gray.800"
            _dark={{ color: 'gray.100' }}
            href={link}
            target="blank"
            w="fit-content"
            textDecoration="none"
            fontWeight={500}
            key={displayTitle}
            _hover={{
              color: 'pink.300',
            }}
          >
            {displayTitle}
          </Link>
        ))}
      </Flex>
    </AnimationWrapper>
  );
};
