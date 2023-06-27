// import TrendingMovies from 'components/TrendingsMovies/TrendingsMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/api';
import MovieDescription from 'components/MovieDescription/MovieDescription';

function MovieDetails() {
  // const [id, setId] = useState;
  const { movieId } = useParams();
  //   console.log(movieId);
  const [details, setDetails] = useState({});
  //   const [movies, setMovies] = useState([]);
  //   console.log(movieId);
  useEffect(() => {
    async function fetch() {
      const fetchMovie = await fetchMovieDetails(movieId);
      //   console.log(fetchMovie);
      return fetchMovie;
      //   setDetails({ ...fetchMovie });
      //   return await fetchMovieDetails(movieId);
    }
    fetch()
      .then(res => setDetails(res))
      .catch(err => console.log(err));
    // fetch(movieId).then(res => setDetails(...res));
    // console.log(details);
  }, [movieId]);

  //   console.log(details);
  //   return;
  return <MovieDescription details={details} id={movieId} />;
  //   return <>Details: {movieId}</>;
}

export default MovieDetails;
