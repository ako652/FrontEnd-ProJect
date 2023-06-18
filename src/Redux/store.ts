import productReducer from "./slices/Product";
import {configureStore} from "@reduxjs/toolkit"



const store =configureStore({
    reducer: {
        products:productReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store