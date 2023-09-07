import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchCast, getPosterUrl } from '../../api/api-service';
import { CastDesc, CastImg, CastItem, CastList, CastName } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(({ data }) => {
        setCast(data.cast);
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, [movieId]);

  return (
    <CastList>
      {cast.map(actor => {
        const { id, name, character, profile_path } = actor;

        return (
          <CastItem key={id}>
            <CastImg src={getPosterUrl(profile_path)} alt={name} />{' '}
            <CastName>{name}</CastName>
            <CastDesc>Character: {character}</CastDesc>
          </CastItem>
        );
      })}
    </CastList>
  );
}
