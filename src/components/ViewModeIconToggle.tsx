'use client';

import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';
import { Box, IconButton } from '@chakra-ui/react';

export const ViewModeIconToggle: React.FC<{
  darkMode: boolean;
  onClick: (value: string) => void;
}> = ({ darkMode, onClick }) => {
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
