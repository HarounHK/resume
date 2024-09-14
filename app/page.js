"use client";

import React from 'react';
import { usePathname } from 'next/navigation'; 
import { Homepge } from './components/Homepge';

export default function Page() {
  const pathname = usePathname();

  return (
    <>
      <Homepge />
    </>
  );
}
