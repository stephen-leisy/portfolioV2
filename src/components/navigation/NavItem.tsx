import { useRouter, usePathname } from 'next/navigation';
import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { IPositionState } from '@/types/IPositionState';

export const NavItem: React.FC<{
  displayTitle: string;
  link: string;
  setPosition: React.Dispatch<React.SetStateAction<IPositionState>>;
}> = ({ displayTitle, link, setPosition }) => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <Box
      ref={ref}
      position="relative"
      mb={2}
      onMouseEnter={() => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            width,
            opacity: 1,
            top: ref.current.offsetTop + ref.current.offsetHeight - 2,
          });
        }
      }}
      onMouseLeave={() => {
        setPosition((previous) => ({
          ...previous,
          opacity: 0,
        }));
      }}
      _before={{
        content: '""',
        position: 'absolute',
        width: '100%',
        height: '20px',
        top: '-10px',
        left: 0,
      }}
      w="fit-content"
      zIndex="40"
      cursor={pathname !== link ? 'pointer' : 'default'}
      onClick={() => router.push(link)}
      fontWeight={600}
      borderBottomWidth={pathname === link ? 1 : 0}
      borderBottomColor="gray.700"
      _hover={{
        color: (pathname !== link && 'pink.300') || 'inherit',
        borderBottomColor: (pathname !== link && 'pink.300') || '',
      }}
      _dark={{
        borderBottomColor: 'gray.100',
      }}
      fontSize={{ base: 'sm', md: 'md' }}
    >
      {displayTitle}
    </Box>
  );
};
