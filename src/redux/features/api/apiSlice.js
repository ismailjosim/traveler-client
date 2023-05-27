import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    tagTypes: ["TourPackages", "Destinations", "Blogs"],
    endpoints: (builder) => ({
        getTourPackages: builder.query({
            query: () => "/tourPackages",
            providesTags: ["TourPackages"]

        }),
        getDestinations: builder.query({
            query: () => "/destinations",
            providesTags: ["Destinations"]

        }),
        getBlogs: builder.query({
            query: () => "/blogs",
            providesTags: ["Blogs"]

        })

    })
})

export const {
    useGetTourPackagesQuery,
    useGetDestinationsQuery,
    useGetBlogsQuery,

} = apiSlice;

/*
https://travel-server-woad.vercel.app/packages
http://localhost:5000/tourPackages

*/
