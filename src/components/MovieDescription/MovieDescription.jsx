import { Outlet, useLocation } from 'react-router-dom';
import { useRef, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  GoBack,
  Description,
  Title,
  Text,
  Addition,
  AdditionList,
  AdditionLink,
  LinkWrapper,
  HomeLink,
  Wrapper,
  Bg,
} from './MovieDescription.styled';
import what from '../../images/what.jpg';
import { BiLinkExternal } from 'react-icons/bi';

function MovieDescription({ details }) {
  console.log(details);
  const {
    title,
    release_date,
    vote_average,
    overview,
    genres,
    poster_path,
    homepage,
  } = details;
  const date = new Date(release_date).getFullYear();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? './movies');

  return (
    <Wrapper>
      <GoBack to={backLinkLocation.current}>Go back</GoBack>
      {details && (
        <>
          <Bg bg={`https://image.tmdb.org/t/p/w300/${details.backdrop_path}`} />
          <Container>
            <img
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w300' + poster_path
                  : what
              }
              width={250}
              height={400}
              alt="poster"
            />
            <Description>
              <Title>
                {title} ({date})
              </Title>
              <p>User score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview</h3>
              <Text>{overview}</Text>
              <h3>Genres</h3>
              {genres
                ? genres.map(genre => genre.name + ' ')
                : 'Not information'}
              <LinkWrapper>
                {homepage && (
                  <HomeLink
                    href={homepage}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    Official page
                    <BiLinkExternal width={16} height={16} />
                  </HomeLink>
                )}
              </LinkWrapper>
            </Description>
          </Container>
          <Addition>
            <h3>Additional information</h3>
            <AdditionList>
              <li>
                <AdditionLink to="cast">Cast</AdditionLink>
              </li>
              <li>
                <AdditionLink to="review">Review</AdditionLink>
              </li>
            </AdditionList>
          </Addition>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Wrapper>
  );
}

MovieDescription.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
  }).isRequired,
};

export default MovieDescription;
