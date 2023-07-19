import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../rootReducer";

export interface Booking{
    id: number,
    hour: string,
    machine: string,
    date: Date,
    name: string,
    numApto: string
}

export const getBookingsAsyncThunk = createAsyncThunk("bookings/get", async(token: string) => {
    // const response = await fetch("http://localhost:8080/bookings", {method: "GET", headers:{"Authorization": token}} ) 
    // const body = await response.json()
     const body = [
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 1,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 2,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 3,
      numApto: "101",
      name: "Residente 1",
    },
    {
      date: new Date(2020, 3, 20),
      hour: "06:00 - 12:00",
      machine: "Machine 1",
      id: 4,
      numApto: "101",
      name: "Residente 1",
    },
  ];
    return body
})

const adapter = createEntityAdapter<Booking>({
    selectId: (item)=> item.id
})


const slice = createSlice({
    name: 'booking',
    initialState: adapter.getInitialState(),
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getBookingsAsyncThunk.fulfilled, (state, action) => {
            
            adapter.setAll(state, action.payload)
            
        })
        builder.addCase(getBookingsAsyncThunk.rejected, (state, action) => {
            console.log("Error", action.error);
            
        })
    },
})


export const bookingsSlice = slice.reducer
 export const { selectAll } = adapter.getSelectors((state: RootState) => state.bookings)
