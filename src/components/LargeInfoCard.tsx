import { Flex, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';

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
    minH="600px"
    gap={{ base: 10, md: 8 }}
    maxW={{ base: '90vw', xl: '60vw' }}
    flexDirection={{ base: 'column', md: 'row' }}
  >
    {imagePath && (
      <Image
        src={imagePath}
        quality={100}
        // sizes="40vh"
        width={400}
        height={500}
        style={{
          borderRadius: '.5rem',
          //   width: '100%',
          //   height: 'auto',
        }}
        alt="bathroom selfie of portfolio author"
      />
    )}
    <Flex
      color="gray.800"
      flexDirection="column"
      justifyContent="center"
      gap={2}
      w="fit-content"
    >
      <Text fontSize="5xl" fontWeight="bold" mb={2}>
        {header}
      </Text>
      <Text fontSize="xl">{subHeader}</Text>
      <Text color="gray.500">{text}</Text>
    </Flex>
  </Flex>
);
