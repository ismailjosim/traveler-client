import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${ import.meta.env.VITE_SERVER_API_LINK }`
    }),
    tagTypes: ["TourPackages", "Blogs", "Destinations"],
    endpoints: (builder) => ({
        getTourPackages: builder.query({
            query: () => "/tourPackages",
            providesTags: ["TourPackages"]
        }),
        getDestinations: builder.query({
            query: () => "/destinations",
            providesTags: ["Destinations"],
        }),
        getDestination: builder.query({
            query: (id) => `/destinations/${ id }`,
            providesTags: ["singleDestination"],
        }),
        getBlogs: builder.query({
            query: () => "/blogs",
            providesTags: ["Blogs"]
        })
    })
});

export const {
    useGetTourPackagesQuery,
    useGetDestinationsQuery,
    useGetDestinationQuery,
    useGetBlogsQuery,

} = apiSlice;

