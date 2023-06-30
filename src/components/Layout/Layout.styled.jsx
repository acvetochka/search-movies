import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  padding: 10px 15px;
  width: 100%;
  /* height: 40px; */
  background-color: #fff;
  box-shadow: -4px -5px 19px #222222;
`;
const Navi = styled.nav`
  display: flex;
  gap: 30px;
`;

const Main = styled.main`
  padding: 50px 20px 20px 20px;
`;

const StyledLink = styled(NavLink)`
  color: black;
  background-color: white;
  text-decoration: none;
  padding: 5px;
  border-radius: 2px;

  &.active {
    color: white;
    background-color: #c25151;
  }
`;

export { Navi, Header, Main, StyledLink };
