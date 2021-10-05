import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import dayjs from 'dayjs';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

const gamesApiHeaders = {
  'x-rapidapi-host': 'api-baseball.p.rapidapi.com',
  'x-rapidapi-key': '7cd72dfab6mshcfdfc6ba86e28dcp1881d5jsnaf4db1c1c1c3',
};

const baseUrl = 'https://api-baseball.p.rapidapi.com/';

const createRequest = (url: string) => ({ url, headers: gamesApiHeaders });

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getMLBGamesDay: builder.query({
      query: () => createRequest(`games?season=2021&league=1&date=2021-10-08`),
    }),
    getGameById: builder.query({
      query: (id) => createRequest(`games?id=${id}`),
    }),
    getMLBGamesTomorrow: builder.query({
      query: () => createRequest(`games?season=2021&league=1&date=2021-10-08`),
    }),
  }),
});

export const {
  useGetMLBGamesDayQuery,
  useGetMLBGamesTomorrowQuery,
  useGetGameByIdQuery,
} = gamesApi;
