import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWIwYzYzN2RhYzFmZmFlMThjZDRmYmRjMjc1ZWFhOSIsInN1YiI6IjY0OTVjMzgzZDVmZmNiMDBlMjA1NzIzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x9lPMVl4nfFlN901y3yy6-AcoB6SAlcKg0T-FQPITKg',
  },
};

async function fetchTrendingMovies() {
  const response = await axios.get('/trending/all/day?language=en-US', options);
  return response.data.results;
}

async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  //   console.log(response.data);
  return response.data;
}

export { fetchTrendingMovies, fetchMovieDetails };
