import { createSlice } from "@reduxjs/toolkit";

const dateSlice = createSlice({
  name: "datetime",
  initialState: {
    selectedDates: null,
    selectedTimes: null, // Added time state
  },
  reducers: {
    setDate: (state, action) => {
      state.selectedDates = action.payload;
    },
    setTime: (state, action) => {
      state.selectedTimes = action.payload; // New reducer for time
    },
    resetDateTime: (state) => {
      state.selectedDates = null;
      state.selectedTimes = null; // Optional reset functionality
    },
  },
});

export const { setDate, setTime, resetDateTime } = dateSlice.actions;

export default dateSlice.reducer;
