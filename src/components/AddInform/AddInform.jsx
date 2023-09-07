import { useLocation } from 'react-router-dom';

import { AddList, AddTitle } from './AddInform.styled';
import { Link } from '../NavBar/NavBar.styled';

export const AddInform = () => {
  const location = useLocation();

  return (
    <>
      <AddTitle>Additional information</AddTitle>
      <AddList>
        <li>
          <Link to="cast" state={{ from: location?.state?.from }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location?.state?.from }}>
            Reviews
          </Link>
        </li>
      </AddList>
    </>
  );
};
