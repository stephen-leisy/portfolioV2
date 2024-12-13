import { linksConfig } from '@/configs/linksConfig';
import { Flex, Link } from '@chakra-ui/react';

const page: React.FC = () => (
  <Flex flexDirection="column" alignItems="flex-end" gap={2}>
    {linksConfig.map(({ link, displayTitle }) => (
      <Link
        color="gray.800"
        _dark={{ color: 'gray.100' }}
        href={link}
        target="blank"
        w="fit-content"
        textDecoration="none"
        fontWeight={500}
        key={displayTitle}
        _hover={{
          color: 'pink.300',
        }}
      >
        {displayTitle}
      </Link>
    ))}
  </Flex>
);

export default page;
