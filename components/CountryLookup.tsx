'use client';
import { useEffect, useState } from 'react';

export default function CountryLookup() {
  const [country, setCountry] = useState('United States');

  //https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}

  //http://ip-api.com/json/

  useEffect(() => {
    fetch(
      `http://ip-api.com/json/`
    )
      .then(async (res) => await res.json())
      .then((data) => setCountry(data.country));
  }, []);

  return <div>{country}</div>;
}
