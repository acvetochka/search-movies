import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieLink } from './MovieList.styled';

function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <List>
      {movies.map(
        ({ id, title }) =>
          title && (
            <li key={id}>
              <MovieLink
                key={id}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </MovieLink>
            </li>
          )
      )}
    </List>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
};
export default MoviesList;
