'use client';

import { Flex, Text } from '@chakra-ui/react';
import { navigationConfig } from './navigationConfig';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ViewModeIconToggle } from '../ViewModeIconToggle';
import { useEffect } from 'react';

export const Navigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { theme, setTheme } = useTheme();
  const darkMode = theme === 'dark';

  const handleModeClick = (theme: string) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme === 'system') {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setTheme(darkMediaQuery.matches ? 'dark' : 'light');

      darkMediaQuery.addEventListener('change', (e) => {
        setTheme(e.matches ? 'dark' : 'light');
      });
    }
  }, [theme, setTheme]);

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
          borderBottomColor={darkMode ? 'gray.100' : 'gray.700'}
          _hover={{
            color: (pathname !== link && 'pink.300') || 'inherit',
            borderBottomColor: (pathname !== link && 'pink.300') || '',
          }}
          fontSize={{ base: 'sm', md: 'md' }}
        >
          {display}
        </Text>
      ))}
      <ViewModeIconToggle onClick={handleModeClick} darkMode={darkMode} />
    </Flex>
  );
};
