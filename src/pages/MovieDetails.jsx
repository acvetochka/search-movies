import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/api';
import MovieDescription from 'components/MovieDescription/MovieDescription';

function MovieDetails() {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    if (!movieId) return;
    fetchMovieDetails(movieId)
      .then(res => setDetails({ ...res }))
      .catch(err => console.log(err));
  }, [movieId]);

  return <MovieDescription details={details} />;
}

export default MovieDetails;
