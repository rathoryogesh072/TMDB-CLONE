import { configureStore } from "@reduxjs/toolkit";
import trendingSlice from "./trendingSlice";
import popularSlice from "./popularSlice";

const appStore=configureStore({
    reducer:{
        trending:trendingSlice,
        popular:popularSlice,
    }
})

export default appStore;