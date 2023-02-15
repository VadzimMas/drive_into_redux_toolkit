import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./index";

const songSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            state.splice(state.indexOf(action.payload), 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
});

export default songSlice