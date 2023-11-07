import { Navigate, Link, Logo } from './NavBar.styled';

export const Navigation = () => {
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
      <Link to="favorites">Favorites</Link>
    </Navigate>
  );
};
