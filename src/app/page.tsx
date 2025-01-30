'use client';
import { fetchFilteredCards } from '@api/cards';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [params, setParams] = useState<{ page: number; filter: string }>({ page: 1, filter: '' });

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['aboba'],
    queryFn: () => fetchFilteredCards(params.page, params.filter),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch, params]);

  return (
    <>
      <pre>
        {isLoading && 'Content is loading...'}
        {data && JSON.stringify(data, null, 2)}
        {error && JSON.stringify(error, null, 2)}
      </pre>

      <button
        onClick={() => {
          setParams({ ...params, page: params.page + 1 });
        }}
        disabled={!data || params.page === data.info.pages}>
        Refetch
      </button>
    </>
  );
};

export default HomePage;
