'use client';

import { Flex, Text } from '@chakra-ui/react';
import { navigationConfig } from './navigationConfig';
import { useRouter, usePathname } from 'next/navigation';
import { ColorModeButton } from '@/components/ui/color-mode';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex flexDirection="column" gap={4}>
      {navigationConfig.map(({ display, link }) => (
        <Text
          key={display}
          w="fit-content"
          zIndex="40"
          cursor={pathname !== link ? 'pointer' : 'default'}
          onClick={() => router.push(link)}
          fontWeight={600}
          borderBottomWidth={pathname === link ? 1 : 0}
          borderBottomColor="gray.700"
          _hover={{
            color: (pathname !== link && 'pink.300') || 'inherit',
            borderBottomColor: (pathname !== link && 'pink.300') || '',
          }}
          _dark={{
            borderBottomColor: 'gray.100',
          }}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {display}
        </Text>
      ))}
      <ColorModeButton
        variant="ghost"
        w="fit-content"
        size="2xs"
        _hover={{
          bg: 'gray.50',
          color: 'pink.300',
          _dark: {
            bg: 'gray.800',
          },
        }}
      />
    </Flex>
  );
};
