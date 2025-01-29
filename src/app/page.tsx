'use client';

import { fetchFilteredCards } from '@api/cards';
import { useQuery } from '@tanstack/react-query';

const HomePage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['aboba'],
    queryFn: () => fetchFilteredCards(),
  });

  return (
    <>
      {isLoading && 'Content is loading...'}
      {data && JSON.stringify(data, null, 2)}
      {error && JSON.stringify(error, null, 2)}
    </>
  );
};

export default HomePage;
