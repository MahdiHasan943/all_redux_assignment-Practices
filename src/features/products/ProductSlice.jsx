import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { deleteProducts, editProduct, fetchProducts, postProducts } from "./productsApi"
import { data } from "autoprefixer";
const initialState = {
    products: [],
    isLoading: false,
    postSuccess:false,
    isError: false,
    deleteSuccess:false,
    error: '',
    updateSuccess:false
}
export const getProducts = createAsyncThunk("products/getProduct", async () => {
    const products = fetchProducts();
    return products
})
export const updateProducts = createAsyncThunk("products/updateProducts", async ({ id, product }) => {
    try {
        const updatedProduct = await editProduct(id, product);
        return updatedProduct;
    } catch (error) {
        throw error;
    }
});


export const createProduct = createAsyncThunk("products/createProduct", async (data) => {
    const products =await postProducts(data);
    return products
})
export const removePRoduct = createAsyncThunk("products/removeProduct", async (id,thunkAPI) => {
    const products = await deleteProducts(id)
    thunkAPI.dispatch(removeFromList(id))
    return products;
})


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        togglePostSuccess: (state) => {
            state.postSuccess = false;
    
        },
        toggleDeleteSuccess: (state) => {
            state.deleteSuccess = false;
    
        },
        removeFromList: (state,action) => {
            state.products = state.products.filter(product => product._id !== action.payload);

        }
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


        // post 
        .addCase(createProduct.pending, (state, action) => {
            state.postSuccess = false;
            state.isError = false;
            state.isLoading = true;
            
        })
        .addCase(createProduct.fulfilled, (state,action) => {
            state.postSuccess = true;
            state.isLoading = false;

        
            
        })
        .addCase(createProduct.rejected, (state,action) => {
            state.postSuccess = false;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

            
        
            
        })

        //for delete
        .addCase(removePRoduct.pending, (state, action) => {
            state.isLoading = true;
            state.deleteSuccess = false;
            state.isError = false;

            
        })
        .addCase(removePRoduct.fulfilled, (state,action) => {
            state.deleteSuccess = true;
            state.isLoading = false;

        
            
        })
        .addCase(removePRoduct.rejected, (state,action) => {
            state.deleteSuccess = false;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

            
        
            
        })
        //for update


        .addCase(updateProducts.pending, (state, action) => {
            state.isLoading = true;
            state.updateSuccess = false;
            state.isError = false;

            
        })
        .addCase(updateProducts.fulfilled, (state,action) => {
            state.updateSuccess = true;
            state.isLoading = false;

        
            
        })
        .addCase(updateProducts.rejected, (state,action) => {
            state.updateSuccess = false;
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;

            
        
            
        })
    }
})

export const{ togglePostSuccess, toggleDeleteSuccess,removeFromList} =productsSlice.actions;
export default productsSlice.reducer;
