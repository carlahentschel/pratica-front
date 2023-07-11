import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"

export interface Booking{
    id: number,
    hour: string,
    machine: string,
    date: Date,
    name: string,
    numApto: string
}

const adapter = createEntityAdapter<Booking>({
    selectId: (item)=> item.id
})


const slice = createSlice({
    name: 'booking',
    initialState: adapter.getInitialState(),
    reducers:{},
    extraReducers(builder) {

    },
})


export const bookingsSlice = slice.reducer
// export const { } = bookingsSlice.actions
