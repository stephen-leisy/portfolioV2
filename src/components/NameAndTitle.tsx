import { Text, Flex } from '@chakra-ui/react';

export const NameAndTitle: React.FC = () => (
  <Flex flexDir="column" alignItems="flex-end">
    <Text fontSize={40} fontWeight={200}>
      Stephen Leisy
    </Text>
    <Text fontWeight={200}>Full-Stack Software Developer | UX Designer</Text>
  </Flex>
);
