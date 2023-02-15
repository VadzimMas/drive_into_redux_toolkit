import { configureStore, createAction } from "@reduxjs/toolkit";
import movieSlice from "./movieSlice";
import songSlice from "./songSlice";

const reset = createAction('app/reset')

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer,
    }
});

export { store, reset };
export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;
