import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: false,
  reducers: {
    toggleStatus: (state) => !state,
  },
});

export const { toggleStatus } = toggleSlice.actions;

export default toggleSlice.reducer;
