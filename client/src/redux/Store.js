import { configureStore } from "@reduxjs/toolkit";
import UserSlice from './DataSlice'
import PostSlice from './PostSlice'



export const Store = configureStore({
    reducer:{
        User : UserSlice ,
        Post:PostSlice,
      
    }
})