import MoviesList from 'components/MoviesList/MoviesList';
import { fetchByGenres } from 'helpers/api';
import { useEffect, useState } from 'react';

function GenresListItem({ genre }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchByGenres(genre).then(res => {
      //   console.log(res.results);
      setMovies(res.results);
    });
  }, [genre]);

  useEffect(() => {
    setMovies(movies);
  }, [movies]);

  return <ul>{movies && <MoviesList movies={movies} />}</ul>;
}
export default GenresListItem;
