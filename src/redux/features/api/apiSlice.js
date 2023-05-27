import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://travel-server-woad.vercel.app',
    }),
    tagTypes: ["TourPackages"],
    endpoints: (builder) => ({
        getTourPackages: builder.query({
            query: () => "/tourPackages",
            providesTags: ["TourPackages"]

        })

    })
})

export const {
    useGetTourPackagesQuery,

} = apiSlice;

/*
https://travel-server-woad.vercel.app/packages



http://localhost:5000/tourPackages

*/
