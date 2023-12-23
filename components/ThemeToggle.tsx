'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { IoMdMoon } from 'react-icons/io';
import { MdLightMode } from 'react-icons/md';
import React from 'react';

type Props = {};

export default function ThemeToggle({}: Props) {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [bTheme, setbTheme] = useState(
    typeof window !== 'undefined' && systemTheme
      ? systemTheme
      : typeof window !== 'undefined' && localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      :  'dark'
  );

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    localStorage.setItem('theme', theme as string);
    setbTheme(theme as string);
  }, [theme]);

  return !mounted ? <div className='h-5 ml-1 text-xl p-2'></div> :
  (
    <>
      <button
        className="z-[100] flex items-center"
        onClick={() => handleClick()}
      >
        {mounted &&
          (theme === 'dark' || bTheme === 'dark' ? (
            <MdLightMode className="text-xl hover:text-yellow-400" />
          ) : (
            <IoMdMoon className="text-xl hover:text-blue-700" />
          ))}
      </button>
    </>
  );
}
