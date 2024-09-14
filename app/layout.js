import localFont from "next/font/local";
import "./globals.css";
import { Footer } from './components/Footer';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Haroun Kassouri",
  description: "Personal Resume",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="z-[-5] bg-slate-950 fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#020617 ,transparent)]"></div>
        <div className="flex flex-col min-h-screen">
          <div className="flex-1 container mx-auto px-4">
            <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
              {children}
            </div>
          </div>
            <Footer/>
        </div>
      </body>
    </html>
  );
}
