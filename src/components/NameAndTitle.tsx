import { Text, Flex } from '@chakra-ui/react';

export const NameAndTitle: React.FC = () => (
  <Flex flexDir="column">
    <Text zIndex="40" fontSize={{ base: 28, md: 40 }} fontWeight={200}>
      Stephen Leisy
    </Text>
    <Text fontWeight={200} fontSize={{ base: 'sm', md: 'md' }} zIndex="40">
      Full-Stack Software Developer | UX Designer
    </Text>
  </Flex>
);
