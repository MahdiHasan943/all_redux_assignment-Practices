import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {createUserWithEmailAndPassword}from "firebase/auth"
import auth from "../firebase/firebase.config";
const initialState = {
    email: '',
    roll: '',
    isLoading: true,
    isError: false,
    error:''
}
const createUser = createAsyncThunk("auth/createUser",async ({email,password}) => {
    
    const data = await createUserWithEmailAndPassword(auth,email,password);
return data
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        builder.addCase(createUser.fulfilled, (state,{payload}) => {
            state.isLoading = false;
            state.email = payload;
            state.isError = false;
            state.error = '';
        })
        builder.addCase(createUser.rejected, (state,action) => {
            state.isLoading = false;
            state.email = '';
            state.isError = true;
            state.error = action.error.message;
        })
    }
})

export default authSlice.reducer;