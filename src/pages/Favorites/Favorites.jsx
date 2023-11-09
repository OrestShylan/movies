import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFavoriteMovies,
  addToFavorites,
 
} from 'redux/movieSlice';
import {
  List,
  Item,
  Image,
  Title,
  ItemLink,
} from '../../components/MoviesList/MoviesList.styled';
import { getPosterUrl } from 'redux/movieSlice';

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);

  
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteMovies');
    if (savedFavorites) {
      JSON.parse(savedFavorites).forEach(movie => {
        if (!favoriteMovies.some(favMovie => favMovie.id === movie.id)) {
          dispatch(addToFavorites(movie));
        }
      });
    }
  }, [dispatch, favoriteMovies]);
  
  
  
  
  
  
  // Load favorites from local storage
  // useEffect(() => {
  //   const savedFavorites = localStorage.getItem('favoriteMovies');
  //   if (savedFavorites) {
  //     JSON.parse(savedFavorites).forEach(movie => {
  //       dispatch(addToFavorites(movie));
  //     });
  //   }
  // }, [dispatch]);

  // Save favorites to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
  }, [favoriteMovies]);

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

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { selectFavoriteMovies } from 'redux/movieSlice';
// import {
//   List,
//   Item,
//   Image,
//   Title,
//   ItemLink,
// } from '../../components/MoviesList/MoviesList.styled';
// import { getPosterUrl } from 'redux/movieSlice';

// export default function Favorites() {
//   const favoriteMovies = useSelector(selectFavoriteMovies);

//   return (
//     <div>
//       <h2>Favorite Movies</h2>
//       <List>
//         {favoriteMovies.map(({ id, title, original_name, poster_path }) => (
//           <Item key={id}>
//             <ItemLink to={`/movies/${id}`}>
//               <Image src={getPosterUrl(poster_path)} alt={original_name} />
//               <Title>{title ?? original_name}</Title>
//             </ItemLink>
//           </Item>
//         ))}
//       </List>
//     </div>
//   );
// }
