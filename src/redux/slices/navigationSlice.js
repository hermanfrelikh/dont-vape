import { createSlice } from "@reduxjs/toolkit";

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    current: "statistics"
  },
  reducers: {
    setStateNavigation(state, action) {
      state.current = action.payload;
    },
  },
});

export const { setStateNavigation } = navigationSlice.actions;
export default navigationSlice.reducer;
