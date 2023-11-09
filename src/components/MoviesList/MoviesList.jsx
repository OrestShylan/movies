import React from 'react';
import { useLocation } from 'react-router-dom';
import { getPosterUrl } from '../../api/api-service';
import { List, Item, Image, Title, ItemLink } from './MoviesList.styled';


export const MoviesList = ({ movies }) => {
  const location = useLocation();
  console.log(movies);
  if (!movies || !Array.isArray(movies)) {
    return <p>No movies available.</p>;
  }
 return (
   <List>
     {movies.map(({ id, title, original_name, poster_path }) => {
       return (
         <Item key={id}>
           <ItemLink to={`/movies/${id}`} state={{ from: location }}>
             <Image src={getPosterUrl(poster_path)} alt={original_name} />{' '}
             <Title key={id}>{title ?? original_name}</Title>
           </ItemLink>
         </Item>
       );
     })}
   </List>
 );
};

// ========================================================================================================
// export const MoviesList = ({ movies }) => {
//   const location = useLocation();

//   if (!Array.isArray(movies) || movies.length === 0) {
//     return <p>No movies found.</p>;
//   }

//   return (
//     <List>
//       {movies.map(({ id, title, original_name, poster_path }) => {
//         return (
//           <Item key={id}>
//             <ItemLink to={`/movies/${id}`} state={{ from: location }}>
//               <Image src={getPosterUrl(poster_path)} alt={original_name} />{' '}
//               <Title>{title ?? original_name}</Title>
//             </ItemLink>
//           </Item>
//         );
//       })}
//     </List>
//   );
// };

// ==========================================================================================================

// export const MoviesList = ({ movies }) => {
//   const location = useLocation();
//   if (!movies) {
//     return null;
//   }

//   return (
//     <List>
//       {movies.results.map(({ id, title, original_name, poster_path }) => {
//         return (
//           <Item key={id}>
//             <ItemLink to={`/movies/${id}`} state={{ from: location }}>
//               <Image src={getPosterUrl(poster_path)} alt={original_name} />{' '}
//               <Title>{title ?? original_name}</Title>
//             </ItemLink>
//           </Item>
//         );
//       })}
//     </List>
//   );
// };
