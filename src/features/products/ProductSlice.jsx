import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error:''
}
export const getProducts = createAsyncThunk("products/getProduct", async () => {
    try {
        const res = await fetch('http://localhost:5000/api/v1/products')
       const data = await res.json();
      return data.data;
    }
    catch (error) {
        console.log(error);
    }
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder)=>{
        builder
            .addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
            
        })
        .addCase(getProducts.fulfilled, (state,action) => {
            state.products = action.payload;
            state.isLoading = false;

        
            
        })
        .addCase(getProducts.rejected, (state,action) => {
            state.products = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

            
        
            
        })

    }
})

export default productsSlice.reducer;
