import { createSlice } from '@reduxjs/toolkit'

export const nameSlice = createSlice({
    name: "name",
    initialState: {
        current: localStorage.getItem("name") ? localStorage.getItem("name") : ""
    },
    reducers:{
        setName(state, action){
            state.current = action.payload
        }
    }
})

export const { setName } = nameSlice.actions
export default nameSlice.reducer