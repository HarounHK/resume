"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; 
import { HomePage } from './components/HomePage';
import { NavBar } from './components/NavBar';

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  );
}
