export type Status = 'Alive' | 'Dead' | 'unknown';
export type Gender = 'Male' | 'Female' | 'Genderless' | 'unknown';

export interface CharacterCredentials {
  id: number;
  name: string;
  image: string;
  status: Status;
}

export interface Chatacter extends CharacterCredentials {
  species: string;
  gender: Gender;
  type: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  episode: string[];
}
