'use client';

import { Flex, Text } from '@chakra-ui/react';
import { navigationConfig } from './navigationConfig';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ViewModeIconToggle } from '../ViewModeIconToggle';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';

  const handleModeClick = (theme: string) => {
    setTheme(theme);
  };

  return (
    <Flex flexDirection="column" alignItems="flex-end" gap={4}>
      <ViewModeIconToggle
        onClick={handleModeClick}
        darkMode={darkMode}
        theme={theme}
      />
      {navigationConfig.map(({ display, link }) => (
        <Text
          key={display}
          zIndex="40"
          cursor="pointer"
          onClick={() => router.push(link)}
          fontWeight={600}
          borderBottomWidth={pathname === link ? 1 : 0}
          borderBottomColor={darkMode ? 'gray.100' : 'gray.700'}
          _hover={{
            color: darkMode ? 'pink.300' : 'gray.500',
            borderBottomColor: darkMode ? 'pink.300' : 'gray.500',
          }}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {display}
        </Text>
      ))}
    </Flex>
  );
};
