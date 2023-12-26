import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, MovieItem, MovieLink, MovieTitle } from './MovieList.styled';

function MoviesList({ movies }) {
  // console.log(movies);
  const location = useLocation();
  // const bestMovie = movies[0];
  // const restMovies = [...movies.slice(1)];
  // console.log(bestMovie);
  // console.log(restMovies);

  return (
    <>
      <List>
        {movies.map(
          ({ id, title, poster_path }) =>
            title && (
              <MovieItem key={id}>
                <MovieLink
                  key={id}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    alt={title}
                    width="150"
                  />
                  <MovieTitle>{title}</MovieTitle>
                </MovieLink>
              </MovieItem>
            )
        )}
      </List>
    </>
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
