"use client";

import React, { useState } from 'react'; 
import Link from 'next/link';
import { LINKS } from '../constants/text';
import { FaTimes, FaBars } from 'react-icons/fa';

export const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden relative z-50"> 
      <button
        className="inline-flex items-center p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      
      <div className={`fixed inset-0 bg-slate-950 transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {LINKS.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className="text-white text-xl font-medium hover:text-teal-400 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};