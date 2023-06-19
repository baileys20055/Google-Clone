'use client';
import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

type Props = {};

export default function HomeSearch({}: Props) {
  const [input, setInput] = useState('');
  const router = useRouter();
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }

  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch('https://random-word-api.herokuapp.com/word')
      .then((res) => res.json())
      .then((data) => data[0]);

    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 flex w-full max-w-[90%]  items-center rounded-full border border-gray-200 px-5 py-3 transition-shadow focus-within:shadow-md hover:bg-gray-200  hover:bg-transparent  hover:shadow-md dark:hover:bg-[#303134] sm:max-w-xl"
      >
        <AiOutlineSearch className="mr-3 text-xl text-gray-500" />
        <input
          type="text"
          className="flex-grow resize-none items-center overflow-hidden bg-transparent focus:outline-none dark:hover:bg-[#303134]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {/* <textarea
          className="flex-grow resize-none items-center overflow-hidden bg-transparent focus:outline-none dark:hover:bg-[#303134]"
          name="search"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          typeof='search'
          id=""
          maxLength={2048}
          rows={1}
          role="combobox"
        ></textarea> */}
        <BsFillMicFill className="text-lg " />
      </form>
      <div className="mt-8 flex flex-col justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
          onClick={randomSearch}
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
