import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
    },
    signInSucess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signInFailure: (state, action) => {
      state.loading = false;
    },
  },
});

export const { signInStart, signInSucess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
