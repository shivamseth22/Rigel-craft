import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Redux/taskSlice"

const store = configureStore({
    reducer:{
        task:taskReducer,
    }
})

export default store