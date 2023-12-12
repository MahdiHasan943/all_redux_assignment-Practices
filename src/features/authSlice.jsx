import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    roll: '',
    isLoading: true,
    isEmail: false,
    error:''
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
    }
})

export default authSlice.reducer;