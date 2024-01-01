import MoviesList from 'components/MoviesList/MoviesList';
import { fetchByGenres } from 'helpers/api';
import { useEffect, useState } from 'react';

function GenresListItem({ genre }) {
  const [movies, setMovies] = useState([]);
  const { name } = genre;

  useEffect(() => {
    const fetchMovies = async () =>
      await fetchByGenres(name).then(res => {
        //   console.log(res.results);
        setMovies(res.results);
      });
    fetchMovies();
    // console.log(movies);
  }, [name]);

  useEffect(() => {
    setMovies(movies);
    // console.log(movies);
  }, [movies]);

  return <ul>{movies && <MoviesList movies={movies} />}</ul>;
}
export default GenresListItem;
