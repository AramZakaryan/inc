import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetAllPostsResponse, GetPostsArgs } from '@/service/inc.types'

/** ZA: inc Api */
export const incService = createApi({
  reducerPath: 'incApi',
  keepUnusedDataFor: 30,
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://inctagram.work/api/',
    prepareHeaders: headers => {
      headers.set(
        'authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgyMSwiaWF0IjoxNzIyMTg2MDM2LCJleHAiOjE3MjIxODk2MzZ9.pdx1BHK-hq0cBH5aWhrUbOXNz1jfXXOs2cWSZ57yoOI'
      )
    },
  }),
  endpoints: builder => ({
    getPublicPosts: builder.query<GetAllPostsResponse, GetPostsArgs>({
      query: ({ pageSize, sortBy, sortDirection }) => {
        return {
          url: `v1/public-posts/all`,
          params: {
            pageSize,
            sortBy,
            sortDirection,
          },
        }
      },
    }),
    getUsers: builder.query<any, void>({
      query: () => {
        return {
          url: `v1/users`,
        }
      },
    }),
  }),
})

export const { useGetPublicPostsQuery, useGetUsersQuery } = incService
