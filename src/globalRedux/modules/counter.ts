import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      return state + action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      return state - action.payload;
    },
  },
});

export const counterReducer = slice.reducer;
export const { increment, decrement } = slice.actions;
