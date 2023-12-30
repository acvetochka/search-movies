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

async function fetchMovieSearch(query) {
  const response = await axios.get(
    `/search/movie?query=${query}&language=en-US`,
    options
  );
  return response.data.results;
}

async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?language=en-US`, options);
  return response.data;
}

async function fetchAddition(id, param) {
  const response = await axios.get(
    `movie/${id}/${param}?language=en-US`,
    options
  );
  return response.data;
}

async function fetchGenre() {
  const response = await axios.get(`genre/movie/list`, options);
  return response.data;
}

async function fetchByGenres(genre) {
  const response = await axios.get(
    `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre}`,
    options
  );
  return response.data;
  // .request(options)
  // .then(function (response) {
  //   console.log(response.data);
  // })
  // .catch(function (error) {
  //   console.error(error);
  // });
}

// /discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Action
export {
  fetchTrendingMovies,
  fetchMovieSearch,
  fetchMovieDetails,
  fetchAddition,
  fetchGenre,
  fetchByGenres,
};
