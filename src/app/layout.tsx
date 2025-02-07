import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';
import { PortfolioWrapper } from '@/components/PortfolioWrapper';
import Script from 'next/script';

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
      <Script
        src="/new-relic/newRelicMonitoring.js"
        strategy="afterInteractive"
      />
      <body style={{ width: '100%', height: '100%' }}>
        <Providers>
          <PortfolioWrapper>{children}</PortfolioWrapper>
        </Providers>
      </body>
    </html>
  );
}
