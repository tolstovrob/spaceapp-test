import { type Response } from '@api/base';
import { CharacterCredentials } from '@services/models/character';

export const fetchFilteredCards = async (
  page: number = 0,
  filter: string = '',
): Response<CharacterCredentials> => {
  const queryString = new URLSearchParams({
    ...(page !== 0 && { page: page.toString() }),
    ...(filter && { name: filter }),
  });

  return fetch('https://rickandmortyapi.com/api/character' + (queryString && `/?${queryString}`))
    .then((data) => data.json())
    .then((data) => data as CharacterCredentials);
};
