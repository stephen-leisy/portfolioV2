import { Flex, Text, Image } from '@chakra-ui/react';

interface ILargeInfoCard {
  imagePath?: string;
  header?: string;
  subHeader?: string;
  text?: string;
}

export const LargeInfoCard: React.FC<ILargeInfoCard> = ({
  imagePath,
  header,
  subHeader,
  text,
}) => (
  <Flex
    p={{ base: 6, md: 8 }}
    borderWidth={1}
    borderRadius="lg"
    borderColor="gray.300"
    gap={{ base: 10, md: 8 }}
    maxW={{ base: '80vw', xl: '60vw' }}
    flexDirection={{ base: 'column', md: 'row' }}
  >
    {imagePath && (
      <Image
        src="https://media.licdn.com/dms/image/v2/D5603AQHpGAkvPM6RuQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730322372345?e=1737590400&v=beta&t=KAGPVIMHE-83If5hErx8LzWBmOq7B0gQviDv7HhqJnE"
        boxSize="350px"
        borderRadius="lg"
      />
    )}
    <Flex color="gray.800" flexDirection="column" gap={2} w="fit-content">
      <Text fontSize="5xl" fontWeight="bold" mb={2}>
        {header}
      </Text>
      <Text fontSize="xl">{subHeader}</Text>
      <Text color="gray.500">{text}</Text>
    </Flex>
  </Flex>
);
