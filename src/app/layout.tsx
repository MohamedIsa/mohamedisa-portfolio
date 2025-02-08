import './globals.css';

export const metadata = {
  title: "Mohamed Portfolio",
  description: "Showcasing my work and skills",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
            <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className="bg-gray-50 text-gray-800 font-serif">
        {children}
      </body>
    </html>
  );
}

export default RootLayout;