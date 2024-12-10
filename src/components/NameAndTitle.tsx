import { Text, Flex } from '@chakra-ui/react';

export const NameAndTitle: React.FC = () => (
  <Flex
    flexDir="column"
    zIndex={40}
    borderWidth={{ base: 0.5, lg: 0 }}
    borderColor="gray.400"
    p={{ base: 4, lg: 0 }}
    bg={{ base: 'gray.50', lg: 'none' }}
    _dark={{ borderColor: 'gray.100', bg: { base: 'gray.800', lg: 'none' } }}
  >
    <Text zIndex="40" fontSize={{ base: 28, md: 40 }} fontWeight={300}>
      Stephen Leisy
    </Text>
    <Text fontWeight={300} fontSize={{ base: 'sm', md: 'md' }} zIndex="40">
      Full-Stack Software Developer | UX Designer
    </Text>
  </Flex>
);
