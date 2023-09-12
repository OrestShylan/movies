import { Outlet, useParams, useLocation } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';

// import * as API from '../../api/api-service';

import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { AddInform } from 'components/AddInform/AddInform';
import { Container, LinkBtn } from './MovieDetails.styled';
import { useFetchMoviesByIdQuery } from 'redux/movieSlice';

export default function MovieDetails() {
  const { movieId } = useParams();
  const {
    data: movieDetails,
    isLoading,
    isFetching,
    isSuccess,
  } = useFetchMoviesByIdQuery(movieId);
  // console.log(data);
  const location = useLocation();
  // const [movieDetails, setMovieDetails] = useState({});
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   API.fetchMoviesById(movieId)
  //     .then(({ data }) => {
  //       setMovieDetails(data);
  //     })
  //     .catch(error => {
  //       toast.error(error.message);
  //       setError(error);
  //     });
  // }, [movieId]);

  const handlerGoBack = location?.state?.from ?? '/';

  return (
    <Container>
      <LinkBtn to={handlerGoBack}>Go Back</LinkBtn>
      {isLoading || isFetching ? (
        <Loader />
      ) : isSuccess || movieDetails ? (
        <MoviesItem movieDetails={movieDetails} />
      ) : (
        <p>No trending movies available.</p>
      )}
      {/* {isError && <Navigate to="/" replace />} */}

      <AddInform />
      <Outlet />
    </Container>
  );
}
