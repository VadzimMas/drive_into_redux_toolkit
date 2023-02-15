import { createSlice } from "@reduxjs/toolkit";
import { reset } from "./index";

const movieSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            state.splice(state.indexOf(action.payload), 1)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
});

export default movieSlice