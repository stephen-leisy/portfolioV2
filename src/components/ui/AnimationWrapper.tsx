'use client';
import { Box } from '@chakra-ui/react';

export const AnimationWrapper: React.FC<{
  animationSwitch: boolean;
  children: React.ReactNode;
}> = ({ animationSwitch, children }) => {
  return (
    <Box
      opacity={animationSwitch ? 1 : 0}
      translate={animationSwitch ? '0%' : '-5%'}
      filter={animationSwitch ? 'blur(0)' : 'blur(5px)'}
      transition=".5s ease-in-out"
    >
      {children}
    </Box>
  );
};
