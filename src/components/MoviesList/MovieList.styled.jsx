import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  list-style: none;
  padding: 0;
`;

const MovieLink = styled(Link)`
  font-size: 18px;
  text-decoration: none;

  &:hover,
  &:focus {
    font-size: 20px;
    color: #c25151;
  }
`;

export { List, MovieLink };
