import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface Apartment {
  number: string,
  resident: string
  token: string
}

const initialState: Apartment = {
  number: '',
  resident: '',
  token: '',
}

const slice = createSlice({
  name: 'apartment',
  initialState,
  reducers:{
    login: (_, action: PayloadAction<{password: string, number: string}>)=>{
      return {
        number: action.payload.number,
        resident: action.payload.number,
        token: Date.now().toString(),
      }
    }
  }
})

export const apartmentReducer = slice.reducer;
export const apartmentActions = slice.actions
