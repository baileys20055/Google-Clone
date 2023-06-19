import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Home({}: Props) {
  return (
    <>
      <HomeHeader />

      <div className="m-24 flex flex-col items-center">
        <Image
          width={300}
          height={100}
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
          }
          alt="Google"
        />

        <HomeSearch />
      </div>
    </>
  );
}
