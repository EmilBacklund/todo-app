'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    lightTheme: (state) => {
      state.theme = 'light';
    },
    darkTheme: (state) => {
      state.theme = 'dark';
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

export const { lightTheme, darkTheme } = themeSlice.actions;

export default themeSlice.reducer;
