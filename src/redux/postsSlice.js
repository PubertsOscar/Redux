// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    //base url thing that does not change
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => "posts",
      //query is a function, that return what you want the segment to be /posts
    }),
    //endpoints is /post, /comments; it takes a builder used to build our API URL
    getPostsById: builder.query({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostsByIdQuery } = postApi;
//line 11 you put use at the start and query at the end
