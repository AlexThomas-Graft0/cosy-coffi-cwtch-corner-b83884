import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '600', '800'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-[#F9F7F5] text-[#3E2B1E] antialiased`}>
        {children}
      </body>
    </html>
  );
}