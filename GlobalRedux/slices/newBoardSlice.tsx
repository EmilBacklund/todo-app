'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const newBoardSlice = createSlice({
  name: 'newBoard',
  initialState,
  reducers: {
    toggle: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggle } = newBoardSlice.actions;

export default newBoardSlice.reducer;
