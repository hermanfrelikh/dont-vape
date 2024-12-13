import { configureStore } from '@reduxjs/toolkit'
import navigation from "./slices/navigationSlice"
import name from "./slices/nameSlice"

export const store = configureStore({
    reducer: {
        navigation,
        name,
    }
})