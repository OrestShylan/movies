import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFavoriteMovies,
  removeFromFavorites,
} from 'redux/movieSlice';
import {
  List,
  Item,
  Image,
  Title,
} from '../../components/MoviesList/MoviesList.styled';
import { getPosterUrl } from 'redux/movieSlice';
import { toast } from 'react-toastify';

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const [favorites, setFavorites] = useState(favoriteMovies);

  
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteMovies');
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      setFavorites(parsedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
  }, [favorites]);

  const handleRemoveFromFavorites = id => {
    setFavorites(prevFavorites =>
      prevFavorites.filter(movie => movie.id !== id)
    );
    dispatch(removeFromFavorites(id));
    toast('Removed from favorites', { type: 'warning' });
  };

  return (
    <div>
      <h2>Favorite Movies</h2>

      <List>
        {favorites.map(({ id, title, original_name, poster_path }, index) => (
          <Item key={`${id}_${title}_${index}`}>
            <div>
              <Image src={getPosterUrl(poster_path)} alt={original_name} />
              <Title>{title ?? original_name}</Title>
              <button onClick={() => handleRemoveFromFavorites(id)}>
                Remove from Favorites
              </button>
            </div>
          </Item>
        ))}
      </List>
    </div>
  );
}

// ПРОБЛЕМА, КОЛИ Я НЕ МОЖУ ВИДАЛИТИ КОМПОНЕНТ ЗІ СПИСКУ

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFavoriteMovies, addToFavorites } from 'redux/movieSlice';
// import {
//   List,
//   Item,
//   Image,
//   Title,
//   ItemLink,
// } from '../../components/MoviesList/MoviesList.styled';
// import { getPosterUrl } from 'redux/movieSlice';

// export default function Favorites() {
//   const dispatch = useDispatch();
//   const favoriteMovies = useSelector(selectFavoriteMovies);

//   useEffect(() => {
//     const savedFavorites = localStorage.getItem('favoriteMovies');
//     if (savedFavorites) {
//       const parsedFavorites = JSON.parse(savedFavorites);

//       const isDuplicateId = parsedFavorites.some((movie, index) => {
//         return parsedFavorites.findIndex(m => m.id === movie.id) !== index;
//       });

//       if (isDuplicateId) {
//         console.log('Duplicate id found in savedFavorites:', parsedFavorites);
//       }

//       parsedFavorites.forEach(movie => {
//         if (!favoriteMovies.some(favMovie => favMovie.id === movie.id)) {
//           dispatch(addToFavorites(movie));
//         }
//       });
//     }
//   }, [dispatch, favoriteMovies]);

//    useEffect(() => {
//     localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
//   }, [favoriteMovies]);

//   return (
//     <div>
//       <h2>Favorite Movies</h2>

//       <List>
//         {favoriteMovies.map(({ id, title, original_name, poster_path }) => {
//           console.log('Rendering movie:', id, title); // Add this line for debugging
//           return (
//             <Item key={`${id}_${title}`}>
//               <ItemLink to={`/movies/${id}`}>
//                 <Image src={getPosterUrl(poster_path)} alt={original_name} />
//                 <Title>{title ?? original_name}</Title>
//               </ItemLink>
//             </Item>
//           );
//         })}
//       </List>

//     </div>
//   );
// }

// ПРОБЛЕМА, КОЛИ ПРИ ПЕРЕЗАВАНТАЖЕННІ ЗНИКАЄ СПИСОК

// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   selectFavoriteMovies,
//   addToFavorites,
//   removeFromFavorites,
// } from 'redux/movieSlice';
// import {
//   List,
//   Item,
//   Image,
//   Title,
// } from '../../components/MoviesList/MoviesList.styled';
// import { getPosterUrl } from 'redux/movieSlice';

// export default function Favorites() {
//   const dispatch = useDispatch();
//   const favoriteMovies = useSelector(selectFavoriteMovies);
//   const [favorites, setFavorites] = useState(favoriteMovies);

//   useEffect(() => {
//     const savedFavorites = localStorage.getItem('favoriteMovies');
//     if (savedFavorites) {
//       const parsedFavorites = JSON.parse(savedFavorites);

//       const isDuplicateId = parsedFavorites.some((movie, index) => {
//         return parsedFavorites.findIndex(m => m.id === movie.id) !== index;
//       });

//       if (isDuplicateId) {
//         console.log('Duplicate id found in savedFavorites:', parsedFavorites);
//       }

//       parsedFavorites.forEach(movie => {
//         if (!favorites.some(favMovie => favMovie.id === movie.id)) {
//           dispatch(addToFavorites(movie));
//         }
//       });
//     }
//   }, [dispatch, favoriteMovies, favorites]);

//   useEffect(() => {
//     localStorage.setItem('favoriteMovies', JSON.stringify(favorites));
//   }, [favorites]);

//   const handleRemoveFromFavorites = id => {
//     setFavorites(prevFavorites =>
//       prevFavorites.filter(movie => movie.id !== id)
//     );
//     dispatch(removeFromFavorites(id));
//   };

//   return (
//     <div>
//       <h2>Favorite Movies</h2>

//       <List>
//         {favorites.map(({ id, title, original_name, poster_path }, index) => (
//           <Item key={`${id}_${title}_${index}`}>
//             <div>
//               <Image src={getPosterUrl(poster_path)} alt={original_name} />
//               <Title>{title ?? original_name}</Title>
//               <button onClick={() => handleRemoveFromFavorites(id)}>
//                 Remove from Favorites
//               </button>
//             </div>
//           </Item>
//         ))}
//       </List>
//     </div>
//   );
// }
