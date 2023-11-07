import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from 'redux/movieSlice';

export default function Favorites() {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <ul>
        {favoriteMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
