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
      <body>
        <Providers>
          <Box h="100vh" w="100vw" p={8} bg="gray.50">
            <Flex
              borderWidth={1}
              borderColor="gray.700"
              h="full"
              w="full"
              p={8}
              color="gray.800"
            >
              <Flex w="70%" alignItems="flex-end">
                {children}
              </Flex>
              <VStack
                h="full"
                w="30%"
                alignItems="flex-end"
                justifyContent="flex-end"
                gap={6}
              >
                <Navigation />
                <NameAndTitle />
              </VStack>
            </Flex>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
