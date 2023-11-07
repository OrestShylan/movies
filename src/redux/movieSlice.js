import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const API_KEY = '48978cb53ccabb273ee7577d68beda02';

export const myMoviesSlice = createSlice({
  name: 'movies',
  initialState: {
    filter: '',
    favorites: [],
  },
  reducers: {
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    addToFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action) => {
    
      state = state.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { updateFilter, addToFavorites, removeFromFavorites } =
  myMoviesSlice.actions;
export default myMoviesSlice.reducer;

export const selectFavoriteMovies = state => state.movies.favorites;

export const moviesAPI = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  tagTypes: ['Movie'],
  endpoints: builder => ({
    fetchTrendingMovies: builder.query({
      query: () => `trending/all/day?api_key=${API_KEY}`,
      providesTags: ['Movie'],
    }),
    fetchMoviesByName: builder.query({
      query: searchValue =>
        `search/movie?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`,
    }),
    fetchMoviesById: builder.query({
      query: movieId => `movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      providesTags: ['Movie'],
    }),
    fetchCast: builder.query({
      query: movieId =>
        `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    }),
    fetchReviews: builder.query({
      query: movieId =>
        `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
    }),
  }),
});

export const {
  useFetchTrendingMoviesQuery,
  useFetchMoviesByNameQuery,
  useFetchMoviesByIdQuery,
  useFetchCastQuery,
  useFetchReviewsQuery,
} = moviesAPI;

export const getPosterUrl = url =>
  url
    ? `https://image.tmdb.org/t/p/w500${url}`
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
