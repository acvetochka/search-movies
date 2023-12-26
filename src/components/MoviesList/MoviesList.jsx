import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  List,
  MovieItem,
  MovieLink,
  MovieTitle,
  MovieTitleWrapper,
} from './MovieList.styled';
import what from '../../images/what.jpg';

function MoviesList({ movies }) {
  // console.log(movies);
  const location = useLocation();

  const dateToYear = date => {
    return new Date(date).getFullYear();
  };
  // const date = new Date(release_date).getFullYear();
  // const bestMovie = movies[0];
  // const restMovies = [...movies.slice(1)];
  // console.log(bestMovie);
  // console.log(restMovies);

  return (
    <>
      <List>
        {movies.map(
          ({ id, title, poster_path, release_date }) =>
            title && (
              <MovieItem key={id}>
                <MovieLink
                  key={id}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  <img
                    // src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                    src={
                      poster_path
                        ? 'https://image.tmdb.org/t/p/w300' + poster_path
                        : what
                    }
                    alt={title}
                    width={150}
                    height={225}
                  />
                  <MovieTitleWrapper>
                    <MovieTitle>{title}</MovieTitle>
                    {release_date && <p>{dateToYear(release_date)}</p>}
                  </MovieTitleWrapper>
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
