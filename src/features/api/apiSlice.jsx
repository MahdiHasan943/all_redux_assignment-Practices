import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/v1"
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query:()=>"/products",
        })
    })
})

export const {useGetProductQuery} = productsApi;