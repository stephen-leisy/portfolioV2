// import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
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

  return (
    <Box cursor="pointer" zIndex={50}>
      {darkMode}
      {/* {darkMode ? (
        <SunIcon
          color="gray.50"
          _hover={{
            color: 'pink.300',
          }}
          onClick={() => onClick('light')}
        />
      ) : (
        <MoonIcon
          _hover={{
            color: 'gray.500',
          }}
          onClick={() => onClick('dark')}
        />
      )} */}
    </Box>
  );
};
