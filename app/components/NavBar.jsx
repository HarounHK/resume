"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LINKS } from '../constants/text'; // Ensure LINKS is correctly imported

export const NavBar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <nav className='bg-slate-950 border-b border-teal-400'>
      <div className='flex items-center justify-between h-16'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <Link href="/" className='text-white text-2xl font-bold'>
              HK<span className='text-teal-400'>.</span>
            </Link>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className='hidden md:flex flex-grow justify-end'>
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

        {/* Mobile Menu Button */}
        <div className='md:hidden flex items-center'>
          <button className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-400'>
            {/* Add icon or functionality for mobile menu */}
          </button>
        </div>
      </div>
    </nav>
  );
};
