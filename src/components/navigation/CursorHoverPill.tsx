import { motion, isValidMotionProp } from 'framer-motion';
import { chakra } from '@chakra-ui/react';

const ChakraBox = chakra(motion.div, {
  //@ts-ignore
  shouldForwardProp: isValidMotionProp,
});

export const CursorHoverPill: React.FC<{ position: any }> = ({ position }) => (
  <ChakraBox
    animate={position}
    position="absolute"
    zIndex={0}
    height="2px"
    bottom={0}
    borderBottomWidth={1}
    borderBottomColor="pink.300"
  />
);
