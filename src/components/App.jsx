import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
// import { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>

      {/* '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
      '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим
      словом. '/movies/:movieId' – компонент MovieDetails, сторінка з детальною
      інформацією про кінофільм. /movies/:movieId/cast – компонент Cast,
      інформація про акторський склад. Рендериться на сторінці MovieDetails.
      /movies/:movieId/reviews – компонент Reviews, інформація про огляди.
      Рендериться на сторінці MovieDetails. */}
    </div>
  );
};
