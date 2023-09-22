import { createSlice } from "@reduxjs/toolkit";

const trendingSlice=createSlice({
    name:"trending",
    initialState:{
        dayTrending:null,
        weekTrending:null
    },
    reducers:{
        adddayTrending:(state,action)=>{
            state.dayTrending=action.payload;
        },
        addweekTrending:(state,action)=>{
            state.weekTrending=action.payload;
        }
    }
})

export const {adddayTrending,addweekTrending}=trendingSlice.actions;
export default trendingSlice.reducer