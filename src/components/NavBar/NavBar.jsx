
import { Navigate, Link, Logo } from './NavBar.styled';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from 'redux/movieSlice';

export const Navigation = () => {
  const favoriteMovies = useSelector(selectFavoriteMovies);
  return (
    <Navigate>
      <Logo>
        <span role="img" aria-label="computer icon">
          🎦
        </span>{' '}
        GoMovies Watch
      </Logo>
      <Link to="/">Home</Link>
      <Link to="movies">Movies</Link>
      <Link to="favorites">Favorites({favoriteMovies.length})</Link>
    </Navigate>
  );
};
