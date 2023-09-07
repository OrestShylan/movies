import { configureStore } from '@reduxjs/toolkit';
import { myMoviesSlice } from './movieSlice';

export const store = configureStore({
    reducer: {
        movies: myMoviesSlice.reducer,
    }
})