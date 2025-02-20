import { motion, isValidMotionProp, TargetAndTransition } from 'framer-motion';
import { chakra } from '@chakra-ui/react';
import { IPositionState } from '@/types/IPositionState';

const ChakraBox = chakra(motion.div, {
  // @ts-expect-error
  shouldForwardProp: isValidMotionProp,
});

export const CursorHoverPill: React.FC<{ position: IPositionState }> = ({
  position,
}) => (
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
