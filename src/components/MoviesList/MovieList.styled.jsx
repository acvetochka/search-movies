import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

const MovieItem = styled.li`
  position: relative;
  width: 150px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 7px #332f2f;
`;
const MovieLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  width: 150px;
  color: var(--primary-bg);
  &:hover,
  &:focus {
    /* font-size: 20px; */
    color: var(--accent);
    color: var(--primary-bg);
    /* letter-spacing: 0.5px; */
  }

  &:hover div,
  &:focus div {
    transform: translateY(0);
    opacity: 1;
  }
`;

const MovieTitleWrapper = styled.div`
  /* word-wrap: break-word; */
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  padding: 5px;
  height: 30%;
  transform: translateY(30%);
  opacity: 0;
  /* background-color: $primary-accent-color; */
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
  text-align: center;
  /* padding: 26px 0; */
  /* text-transform: uppercase; */
`;

const MovieTitle = styled.p`
  display: inline-block;
  /* height: 50px; */
  /* white-space: nowrap; */
  word-wrap: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 3em; /* Встановлюємо максимальну висоту на три рядки */
  line-height: 1em;
  /* Встановлюємо висоту лінії тексту на один рядок */
  overflow: hidden;
`;

// .card-overlay {

// }

// .category-books__link:hover .card-overlay {
//     transform: translateY(0);
//     opacity: 1;
// }

// const Poster = styled.img``;
export { List, MovieItem, MovieLink, MovieTitleWrapper, MovieTitle };
