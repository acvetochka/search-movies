import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout';

const Home = lazy(() => import('../../pages/Home'));
const Movie = lazy(() => import('../../pages/Movie'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Review = lazy(() => import('../Review/Review'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
