import type { Metadata } from 'next';
import { Rubik, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import APIProvider from '@/modules/APIProvider';

const rubikSans = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin', 'cyrillic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'SpaceApp test task!',
  description: "Description? What do you mean, it's just a test task",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>): React.ReactNode => (
  <html lang='en'>
    <APIProvider>
      <body className={`${rubikSans.variable} ${jetbrainsMono.variable} antialiased`}>
        <main className='container mx-auto'>{children}</main>
      </body>
    </APIProvider>
  </html>
);

export default RootLayout;
