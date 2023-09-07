import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as API from '../../api/api-service';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Main } from '../Home/Home.styled';

export default function Movies() {
  const [moviesByName, setMoviesByName] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchForm = searchValue => {
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    const value = searchParams.get('query');
    if (!value) {
      return;
    }

    if (!isLoading) {
      setIsLoading(true);

      API.fetchMoviesByName(value)
        .then(({ data }) => {
          setMoviesByName(data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          toast.error(error.message);
        });
    }
  }, [searchParams, isLoading]);

  return (
    <Main>
      <SearchForm onSubmit={handleSearchForm} />
      {isLoading && <Loader />}

      <MoviesList movies={moviesByName} />
    </Main>
  );
}
