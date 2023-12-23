import React from 'react';
import ThemeToggle from './ThemeToggle';
import CountryLookup from './CountryLookup';

export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-[#f2f2f2] text-sm text-gray-500 dark:bg-[#171717]">
      <div className="border-b px-8 py-3 h-12 dark:border-gray-700">
        <CountryLookup />
      </div>
      <div className="flex flex-col items-center justify-between px-8 py-3 sm:flex-row">
        <ul className="flex items-center space-x-6">
          <li className="link">Advertising</li>
          <li className="link">Business</li>
          <li className="link">How Search works</li>
        </ul>
        <div className="mr-14 flex items-center">
          <img
            className="mr-[6px] h-4"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
            alt="Leaf"
          />
          Carbon neutral since 2007
        </div>
        <ul className="flex items-center space-x-6">
          <li className="link">Privacy</li>
          <li className="link">Terms</li>
          <li className="link">Settings</li>
          <li className="flex list-none items-center p-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </footer>
  );
}

{
  /* <li className="flex list-none items-center p-2"><ThemeToggle /></li> */
}
