import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from 'helpers/api';
import TrendingMovies from 'components/TrendingsMovies/TrendingsMovies';
// const { useEffect, useState } = require('react');

function Movie() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      return await fetchTrendingMovies();
    };
    fetch().then(res => setMovies(movies => res));
  });
  return <TrendingMovies movies={movies} />;
}

export default Movie;
