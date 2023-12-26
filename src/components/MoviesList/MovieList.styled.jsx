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
  width: 150px;
`;
const MovieLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  width: 150px;

  &:hover,
  &:focus {
    /* font-size: 20px; */
    color: var(--accent);
    letter-spacing: 0.5px;
  }
`;

const MovieTitle = styled.p`
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Poster = styled.img``;
export { List, MovieItem, MovieLink, MovieTitle };
