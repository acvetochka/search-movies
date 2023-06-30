import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const GoBack = styled(Link)`
  display: block;
  padding: 5px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #c25151;
    font-weight: bold;
  }

  &::before {
    content: '';
  }
`;
const Description = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Text = styled.p`
  text-align: justify;
`;

const Addition = styled.div`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const AdditionList = styled.ul`
  list-style: none;
`;

const AdditionLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  &:hover,
  &:focus {
    color: #c25151;
  }
  &.active {
    color: #c25151;
    font-weight: bold;
  }
`;

export {
  Container,
  GoBack,
  Description,
  Title,
  Text,
  Addition,
  AdditionList,
  AdditionLink,
};
