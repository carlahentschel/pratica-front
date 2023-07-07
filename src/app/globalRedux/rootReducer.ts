'use client'
import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from './modules/counter';


export const rootReducer = combineReducers({
  counter: counterReducer
});

export type RootState = ReturnType<typeof rootReducer>;