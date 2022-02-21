import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduxSlice";

export default configureStore({
    reducer: {
        main: userSlice,
        devTools: process.env.NODE_ENV !== 'production',
    },
});