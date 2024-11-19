import Image from 'next/image';
import { Box } from '@chakra-ui/react';

const page = () => (
  <Box position="relative" w="full" h="400vh" overflow="scroll">
    <Image
      src="/bathroomselfie.jpg"
      quality={100}
      layout="fill"
      objectFit="cover"
      alt="bathroom selfie of portfolio author"
    />
  </Box>
);

export default page;
