import { type RickAndMortyResponse } from '@api/base';
import { type CharacterCredentials } from '@services/models/character';

export const fetchFilteredCards = async (
  page: number = 0,
  filter: string = '',
): Promise<RickAndMortyResponse<CharacterCredentials[]>> => {
  const queryString = new URLSearchParams({
    page: page.toString(),
    ...(filter && { name: filter }),
  });

  return fetch('https://rickandmortyapi.com/api/character' + (queryString && `/?${queryString}`))
    .then((data) => data.json())
    .then((data) => data as RickAndMortyResponse<CharacterCredentials[]>);
};
