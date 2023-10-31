// import * as API from '../../api/api-service';
// import { useEffect, useState } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { Main, Title } from './Home.styled';
import { useFetchTrendingMoviesQuery } from 'redux/movieSlice';

// export default function Home() {

//   const {
//     data: movies,
//     isLoading,
//     isFetching,
//     isSuccess,
//   } = useFetchTrendingMoviesQuery();

// console.log(movies);

//   return (
//     <Main>
//       <Title>Trending Movies Today</Title>
//       {isLoading || isFetching ? (
//         <Loader />
//       ) : isSuccess || movies ? (
//         <MoviesList movies={movies} />
//       ) : (
//         <p>No trending movies available.</p>
//       )}
//     </Main>
//   );
// }

export default function Home() {
  const { data, isLoading, isFetching, isSuccess } =
    useFetchTrendingMoviesQuery();

  // Отримуємо масив трендових фільмів з властивості 'results'
  const movies = data ? data.results : [];

  return (
    <Main>
      <Title>Trending Movies Today</Title>
      {isLoading || isFetching ? (
        <Loader />
      ) : isSuccess ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No trending movies available.</p>
      )}
    </Main>
  );
}
