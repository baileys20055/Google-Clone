'use client';
import { ThemeProvider } from 'next-themes';
import React from 'react';

type Props = { children: React.ReactNode };

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:google-dark min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
