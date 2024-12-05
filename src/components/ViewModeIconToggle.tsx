'use client';

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Box, IconButton } from '@chakra-ui/react';
import { useEffect } from 'react';

export const ViewModeIconToggle: React.FC<{
  darkMode: boolean;
  onClick: (value: string) => void;
  theme: string | undefined;
}> = ({ darkMode, onClick, theme }) => {
  useEffect(() => {
    if (theme === 'system') {
      const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      onClick(darkMediaQuery.matches ? 'dark' : 'light');

      darkMediaQuery.addEventListener('change', (e) => {
        onClick(e.matches ? 'dark' : 'light');
      });
    }
  }, [theme, onClick]);

  console.log('whats going on?: ', darkMode);

  return (
    <Box cursor="pointer" zIndex={50}>
      {darkMode ? (
        <IconButton
          size="2xs"
          as={HiOutlineSun}
          variant="ghost"
          color="gray.50"
          _hover={{
            color: 'pink.300',
            bg: 'gray.800',
          }}
          onClick={() => onClick('light')}
        />
      ) : (
        <IconButton
          size="2xs"
          as={HiOutlineMoon}
          variant="ghost"
          _hover={{
            color: 'pink.300',
            bg: 'gray.50',
          }}
          onClick={() => onClick('dark')}
        />
      )}
    </Box>
  );
};
