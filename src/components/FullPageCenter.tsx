import { Center } from '@chakra-ui/react';

export const FullPageCenter: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Center h="100vh" w="full" overflow="scroll">
    {children}
  </Center>
);
