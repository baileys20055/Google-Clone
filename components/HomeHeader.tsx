import Link from 'next/link';
import { TbGridDots } from 'react-icons/tb';
import React from 'react';

type Props = {};

export default function HomeHeader({}: Props) {
  return (
    <header className="flex h-15 justify-between">
      <div className="ml-6 flex items-center space-x-4 text-sm">
        <Link
          className="hover:underline"
          href="https://image.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          About
        </Link>
        <Link
          className="hover:underline"
          href="https://image.google.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Store
        </Link>
      </div>
      <div className="space-between flex p-5 text-sm">
        <div className="flex items-center space-x-4 align-middle">
          <Link
            className="hover:underline"
            href="https://mail.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gmail
          </Link>
          <Link
            className="hover:underline"
            href="https://image.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Images
          </Link>
          <TbGridDots className="rounded-full bg-transparent p-2 text-4xl hover:bg-gray-200 dark:hover:bg-gray-800" />
          <button className="rounded-md bg-blue-500 px-6 py-2 font-medium hover:bg-[#1b66c9] text-white transition-shadow hover:shadow-md hover:brightness-105">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
