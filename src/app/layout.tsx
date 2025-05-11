import './globals.css';
import { Inter } from 'next/font/google';

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Mohamed Isa | Portfolio",
  description: "Software developer showcasing projects and skills",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-white text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;