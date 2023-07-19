import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './modules/counter';
import { apartmentReducer } from './modules/apartmentSlice';
import { bookingsSlice } from './modules/bookingsSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  apartment: apartmentReducer,
  bookings: bookingsSlice
});

export type RootState = ReturnType<typeof rootReducer>;
