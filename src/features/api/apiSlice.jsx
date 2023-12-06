import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:5000/api/v1"
    }),
    tagTypes:['Products'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => ({
               url: "/products"
            }),
            providesTags:["Products"],
        }),
        AddProduct: builder.mutation({
            query: (data) => ({
                url:"/products",
                method: 'POST',
                body: data,
                
            }),
            invalidatesTags:['Products'],


        
           
        })
        ,

        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags:['Products'],
        })
       
    })
})

export const {useGetProductQuery,useAddProductMutation,useDeleteProductMutation} = productsApi;