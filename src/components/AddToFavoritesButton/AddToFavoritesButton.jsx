import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites} from '../../redux/movieSlice';
import { toast } from 'react-toastify';

const AddToFavoritesButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(state => state.movies.favorites);

  const isFavorite = favoriteMovies.some(favorite => favorite.id === movie.id);
  const handleToggleFavorite = () => {
    dispatch(addToFavorites(movie));
      toast('Added to favorites', { type: 'success' });
    

    const updatedFavorites = [...favoriteMovies, movie];
    localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites));
  };

  return (
    <button onClick={handleToggleFavorite} disabled={isFavorite}>
      {isFavorite ? 'Add to Favorites ✨' : 'Add to Favorites '}
    </button>
  );
};

export default AddToFavoritesButton;

