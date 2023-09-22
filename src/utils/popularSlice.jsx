import { createSlice } from "@reduxjs/toolkit";

const popularSlice=createSlice({
    name:'popular',
    initialState:{
        moviePopular:null,
        tvPopular:null
    },
    reducers:{
        addMoviePopular:(state,action)=>{
            state.moviePopular=action.payload;
        },
        addtvPopular:(state,action)=>{
            state.tvPopular=action.payload;
        }
    }
})

export const {addMoviePopular,addtvPopular}=popularSlice.actions
export default popularSlice.reducer