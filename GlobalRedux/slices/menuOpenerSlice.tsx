'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideMenuOpen: false,
};

export const menuOpenerSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    toggle: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen;
    },
  },
});

export const { toggle } = menuOpenerSlice.actions;

export default menuOpenerSlice.reducer;
