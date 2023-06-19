import React from 'react';
import ThemeToggle from './ThemeToggle';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <div>
        <li className="flex list-none items-center p-2">
          <ThemeToggle />
        </li>
      </div>
    </div>
  );
}
