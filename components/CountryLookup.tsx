'use client';
import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('');

  //https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}

  //http://ip-api.com/json/

  // https://api.geoapify.com/v1/ipinfo?&apiKey=

  useEffect(() => {
    fetch(`https://api.geoapify.com/v1/ipinfo?&apiKey=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then(async (res) => await res.json())
      .then((data) => setCountry(data.country.name));
  }, []);

  return <div>{country}</div>;
}
