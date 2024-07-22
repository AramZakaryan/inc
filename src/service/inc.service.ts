import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/** ZA: inc Api */
export const incService = createApi({
  reducerPath: 'incApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work/api/' }),
  endpoints: builder => ({
    getPublicPosts: builder.query<any, void>({
      query: name => `v1/public-posts/all`,
    }),
  }),
})

export const { useGetPublicPostsQuery } = incService
