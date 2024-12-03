'use client';

import { Flex, Text } from '@chakra-ui/react';
import { navigationConfig } from './navigationConfig';
import { useRouter, usePathname } from 'next/navigation';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Flex flexDirection="column" alignItems="flex-end" gap={4}>
      {navigationConfig.map(({ display, link }) => (
        <Text
          key={display}
          zIndex="40"
          cursor="pointer"
          onClick={() => router.push(link)}
          fontWeight={600}
          borderBottomWidth={pathname === link ? 1 : 0}
          borderBottomColor="gray.700"
          _hover={{ color: 'gray.500' }}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {display}
        </Text>
      ))}
    </Flex>
  );
};
