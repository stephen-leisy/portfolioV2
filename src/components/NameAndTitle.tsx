import { Text, Flex } from '@chakra-ui/react';

export const NameAndTitle: React.FC<{ isScrolling: boolean }> = ({
  isScrolling,
}) => (
  <Flex flexDir="column" zIndex={40}>
    <Text zIndex="40" fontSize={{ base: 28, md: 40 }} fontWeight={300}>
      Stephen Leisy
    </Text>
    <Text
      fontWeight={{ base: isScrolling ? 500 : 300, lg: 300 }}
      fontSize={{ base: 'sm', md: 'md' }}
      zIndex="40"
    >
      Full-Stack Software Developer | UX Designer
    </Text>
  </Flex>
);
