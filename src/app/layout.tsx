import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { NameAndTitle } from '@/components/NameAndTitle';
import { Flex, Box, VStack } from '@chakra-ui/react';
import { Navigation } from '@/components/navigation/Navigation';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Stephen Leisy',
  description: 'Portfolio site for Stephen Leisy, a software engineer.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.className}>
      <body style={{ overflow: 'hidden' }}>
        <Providers>
          <Box
            h="100vh"
            w="100vw"
            p={{ base: 4, md: 8 }}
            bg="gray.50"
            minH="650px"
          >
            <Flex
              borderWidth={1}
              borderColor="gray.700"
              h="full"
              w="full"
              p={{ base: 4, md: 8 }}
              color="gray.800"
            >
              <Flex
                w={{ base: '100%', md: '70%' }}
                h="full"
                alignItems={{ base: 'flex-start', md: 'flex-end' }}
                overflow="scroll"
                position="relative"
              >
                {children}
              </Flex>
              <Flex
                h="full"
                position={{ base: 'absolute', md: 'relative' }}
                right={{ base: 8, md: 0 }}
                w={{ base: '80%', md: '30%' }}
                flexDir={{ base: 'column-reverse', md: 'column' }}
                alignItems="flex-end"
                justifyContent="flex-end"
                gap={6}
              >
                <Navigation />
                <NameAndTitle />
              </Flex>
            </Flex>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
