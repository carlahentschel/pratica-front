import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBookingsAsyncThunk } from "./bookingsSlice";
import { arch } from "os";


interface Apartment {
  number: string,
  resident: string
  token: string
}

interface Login {
  password: string, 
  number: string
}

const initialState: Apartment = {
  number: '',
  resident: '',
  token: '',
}

export const loginAsyncThunk = createAsyncThunk("apartment/login", async(data: Login, {dispatch}) => {
  //const response = await fetch("http://localhost:8080/apartment/login", {method: "POST", body: JSON.stringify(data)} ) 
   // const body = await response.json()
   const body = "2"
    dispatch(getBookingsAsyncThunk(body))
    return body
})

const slice = createSlice({
  name: 'apartment',
  initialState,
  reducers:{},
  extraReducers(builder) {
        builder.addCase(loginAsyncThunk.fulfilled, (state, action) => {
            return {
              number: action.payload,
              resident: action.payload,
              token: action.payload
            }
            
        })
        builder.addCase(loginAsyncThunk.rejected, (state, action) => {
            console.log("Error", action.error);
            
        })
    },
})

export const apartmentReducer = slice.reducer;
export const apartmentActions = slice.actions
