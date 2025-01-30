export const isMocksEnabled = true;

/* eslint-disable */
export interface BaseResponse {}

export type Response<T> = Promise<BaseResponse & T>;

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface RickAndMortyResponse<T> extends Response<T> {
  info: Info;
  results: T[];
}
