import { useLocation } from 'react-router-dom';
import { getPosterUrl } from '../../api/api-service';
import { List, Item, Image, Title, ItemLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title, original_name, poster_path }) => {
        return (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`} state={{ from: location }}>
              <Image src={getPosterUrl(poster_path)} alt={original_name} />{' '}
              <Title>{title ?? original_name}</Title>
            </ItemLink>
          </Item>
        );
      })}
    </List>
  );
};
