import axios from 'axios';

const API_KEY = '48978cb53ccabb273ee7577d68beda02';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export const fetchTrendingMovies = () => {
  const response = axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response;
};

export const fetchMoviesByName = searchValue => {
  const response = axios.get(
    `/search/movie?api_key=${API_KEY}&query=${searchValue}&language=en-US&page=1&include_adult=false`
  );
  return response;
};

export const fetchMoviesById = movieId => {
  const response = axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const fetchCast = movieId => {
  const response = axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const fetchReviews = movieId => {
  const response = axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getPosterUrl = url =>
  url
    ? `https://image.tmdb.org/t/p/w500${url}`
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_wGA4J08YoSd2-aTz9OQrZeSA2fnZxEbOA&usqp=CAU`;
