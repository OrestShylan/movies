import {
  CartMovie,
  DescMovie,
  ImgMovie,
  SpanMovie,
  TitleMovie,
} from './MoviesItem.styled';
import { getPosterUrl } from '../../api/api-service';
export const MoviesItem = ({ movieDetails }) => {
  const { poster_path, original_title, overview, genres, vote_average } =
    movieDetails;

  const genresAll = () => {
    if (genres) {
      return genres
        .map(el => {
          return el.name;
        })
        .join(', ');
    } else {
      return 'genres are not defined.';
    }
  };

  return (
    <CartMovie>
      <ImgMovie src={getPosterUrl(poster_path)} alt={original_title} />
      <div>
        <TitleMovie>{original_title}</TitleMovie>
        <DescMovie>
          <SpanMovie>User Score </SpanMovie>
          {Math.round((vote_average * 100) / 10)}%
        </DescMovie>
        <DescMovie>
          <SpanMovie>Overview: </SpanMovie>
          {overview}
        </DescMovie>
        <DescMovie>
          <SpanMovie>Genres: </SpanMovie>
          {genresAll()}
        </DescMovie>
      </div>
    </CartMovie>
  );
};
