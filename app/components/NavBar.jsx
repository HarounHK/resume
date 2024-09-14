"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS } from '../constants/text'; 
import { MobileNavBar } from './MobileNavBar'; 

export const NavBar = () => {
  const pathname = usePathname(); 

  return (
    <header className='bg-slate-950 border-b border-teal-400 py-4'>
      <div className="container mx-auto px-4">
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href="/" className='text-white text-2xl font-bold'>
                HK<span className='text-teal-400'>.</span>
              </Link>
            </div>
          </div>

          <div className='hidden md:flex flex-grow justify-center md:justify-end'>
            <nav className="flex gap-8">
              {LINKS.map((link, index) => (
                <Link
                  href={link.path}
                  key={index}
                  className={`${
                    link.path === pathname ? "text-teal-400 border-b-2 border-teal-400" : "text-white"
                  } capitalize font-medium hover:text-teal-400 transition-all`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className='md:hidden flex items-center'>
            <MobileNavBar />
          </div>
        </nav>
      </div>
    </header>
  );
};
