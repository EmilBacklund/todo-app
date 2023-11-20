'use client';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import newBoardSlice from './slices/newBoardSlice';
import themeSlice from './slices/themeSlice';
import menuOpenerSlice from './slices/menuOpenerSlice';

const rootReducer = combineReducers({
  newBoardIsOpen: newBoardSlice,
  theme: themeSlice,
  sideMenuOpener: menuOpenerSlice,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
