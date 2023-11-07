import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/movieSlice';

const AddToFavoritesButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.movies.favorites);

  const isFavorite = favoriteMovies.some(favorite => favorite.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(movie));
    } else {
      dispatch(addToFavorites(movie));
    }

    const updatedFavorites = [...favoriteMovies, movie];
    localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
  };

  return (
    <button onClick={handleToggleFavorite}>
      {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
    </button>
  );
};

export default AddToFavoritesButton;
