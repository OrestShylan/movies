import { configureStore } from '@reduxjs/toolkit';
import { myMoviesSlice } from './movieSlice';
import { moviesAPI } from './movieSlice';

export const store = configureStore({
  reducer: {
    movies: myMoviesSlice.reducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    moviesAPI.middleware,
  ],
});