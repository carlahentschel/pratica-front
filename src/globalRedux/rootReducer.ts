import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './modules/counter';
import { apartmentReducer } from './modules/apartmentSlice';

export const rootReducer = combineReducers({
  counter: counterReducer,
  apartment: apartmentReducer
});

export type RootState = ReturnType<typeof rootReducer>;
