import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import { PortfolioWrapper } from '@/components/PortfolioWrapper';

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
      <body style={{ width: '100%', height: '100%' }}>
        <Providers>
          <PortfolioWrapper>{children}</PortfolioWrapper>
        </Providers>
      </body>
    </html>
  );
}
