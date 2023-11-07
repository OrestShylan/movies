import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteMovies } from 'redux/movieSlice';
import {
  List,
  Item,
  Image,
  Title,
  ItemLink,
} from '../../components/MoviesList/MoviesList.styled';
import { getPosterUrl } from 'redux/movieSlice';

export default function Favorites() {
  const favoriteMovies = useSelector(selectFavoriteMovies);

  return (
    <div>
      <h2>Favorite Movies</h2>
      <List>
        {favoriteMovies.map(({ id, title, original_name, poster_path }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`}>
              <Image src={getPosterUrl(poster_path)} alt={original_name} />
              <Title>{title ?? original_name}</Title>
            </ItemLink>
          </Item>
        ))}
      </List>
    </div>
  );
}
