import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';
import { fetchMoviesByName } from '../../api/api-service';

import { Form, Input, Button } from './SearchForm.styled';

// export const SearchForm = ({ onSubmit }) => {
//   const [searchValue, setSearchValue] = useState('');

//   const hendelChange = evt => {
//     setSearchValue(evt.currentTarget.value);
//   };

//   const hendelSubmit = async evt => {
//     evt.preventDefault();

//     if (searchValue.trim() === '') {
//       toast.warn('Sorry, you need to enter a movie title.');
//       return;
//     } else if (searchValue === '') {
//       onSubmit(searchValue);
//       setSearchValue('');
//     } else {
//       try {
//         const response = await fetchMoviesByName(searchValue);
//         const results = response.data.results;
//         if (results.length === 0) {
//           toast.error('No results found.');
//         } else {
//           onSubmit(searchValue);
//           setSearchValue('');
//         }
//       } catch (error) {
//         console.error('Error during search:', error);
//         toast.error(
//           'An error occurred while searching. Please try again later.'
//         );
//       }
//     }
//   };

//   return (
//     <Form onSubmit={hendelSubmit}>
//       <Input
//         type="text"
//         placeholder="Search movie"
//         value={searchValue}
//         onChange={hendelChange}
//       />
//       <Button type="submit">
//         <ImSearch />
//       </Button>
//     </Form>
//   );
// };

export const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const hendelChange = evt => {
    setSearchValue(evt.currentTarget.value);
  };

  const hendelSubmit = async evt => {
    evt.preventDefault();

    if (searchValue.trim() === '') {
      toast.warn('Sorry, you need to enter a movie title.');
      return;
    }

    console.log(searchValue); // Додав console.log для відстеження введеного значення

    try {
      const response = await fetchMoviesByName(searchValue);
      const results = response.data.results;
      if (results.length === 0) {
        toast.error('No results found.');
      } else {
        onSubmit(searchValue);
        setSearchValue('');
      }
    } catch (error) {
      console.error('Error during search:', error);
      toast.error('An error occurred while searching. Please try again later.');
    }
  };

  return (
    <Form onSubmit={hendelSubmit}>
      <Input
        type="text"
        placeholder="Search movie"
        value={searchValue}
        onChange={hendelChange}
      />
      <Button type="submit">
        <ImSearch />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
