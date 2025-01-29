export const isMocksEnabled = true;

/* eslint-disable */
export interface BaseResponse {}

export type Response<T> = Promise<BaseResponse & T>;
