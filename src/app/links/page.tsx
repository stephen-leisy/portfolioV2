import { Text, Flex, Link } from '@chakra-ui/react';

const linksConfig = [
  { link: 'https://www.linkedin.com/in/stephen-leisy/', title: 'Linkedin' },
  { link: 'https://github.com/stephen-leisy', title: 'Github' },
  { link: 'mailto:stleisy@gmail.com', title: 'Email (stleisy@gmail.com)' },
];

const page: React.FC = () => (
  <Flex flexDirection="column" gap={2}>
    {linksConfig.map(({ link, title }) => (
      <Text textAlign="right" fontWeight={500}>
        <Link
          color="gray.500"
          _dark={{ color: 'gray.100' }}
          href={link}
          target="blank"
          w="fit-content"
          textDecoration="none"
          _hover={{
            color: 'pink.300',
          }}
        >
          {title}
        </Link>
      </Text>
    ))}
  </Flex>
);

export default page;
