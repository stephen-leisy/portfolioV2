'use client';

import { Flex } from '@chakra-ui/react';
import { navigationConfig } from '../../configs/navigationConfig';
import { ColorModeButton } from '@/components/ui/color-mode';
import { useState } from 'react';
import { NavItem } from './NavItem';
import { IPositionState } from '@/types/IPositionState';
import { CursorHoverPill } from './CursorHoverPill';

export const Navigation: React.FC = () => {
  const [position, setPosition] = useState<IPositionState>({
    top: 0,
    width: 0,
    opacity: 1,
  });

  return (
    <Flex flexDirection="column" position="relative">
      {navigationConfig.map(({ displayTitle, link }) => (
        <NavItem
          displayTitle={displayTitle}
          link={link}
          key={displayTitle}
          setPosition={setPosition}
        />
      ))}
      <CursorHoverPill position={position} />
      <ColorModeButton
        variant="ghost"
        w="fit-content"
        size="2xs"
        zIndex={50}
        _hover={{
          bg: 'gray.50',
          color: 'pink.300',
          _dark: {
            bg: 'gray.800',
          },
        }}
      />
    </Flex>
  );
};
