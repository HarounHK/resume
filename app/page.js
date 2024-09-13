"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; 
import { Homepge } from './components/Homepge';
import { NavBar } from './components/NavBar';

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <NavBar />
      <Homepge />
    </>
  );
}
