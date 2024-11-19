import { Center } from '@chakra-ui/react';

export const FullPageCenter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Center h="100vh" w="100vw" minH="500px" overflowY="scroll" overflowX="hide">
    {children}
  </Center>
);