// import * as API from '../../api/api-service';
// import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Main, Title } from './Home.styled';
import { useFetchTrendingMoviesQuery } from 'redux/movieSlice';

export default function Home() {
  const { data, isLoading } = useFetchTrendingMoviesQuery();
  console.log(data);

  // const [trendingMovies, setTrendingMovies] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   API.fetchTrendingMovies()
  //     .then(({ data }) => {
  //       setTrendingMovies(data.results);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);
const { results: movies } = data;
  return (
    <Main>
      <Title>Trending Movies Today</Title>
      {isLoading ? <Loader /> : <MoviesList movies={movies} />}
    </Main>
  );
}
