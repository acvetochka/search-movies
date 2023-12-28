import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  position: fixed;
  z-index: 100;
  padding: 10px 15px;
  width: 100%;
  /* height: 40px; */
  background-color: #fff;
  box-shadow: -4px -5px 19px #222222;
  display: flex;
  justify-content: center;
`;
const Navi = styled.nav`
  display: flex;
  gap: 30px;
`;

const Main = styled.main`
  padding: 50px 20px 20px 20px;
  position: relative;
  /* background-image: url('https://image.tmdb.org/t/p/w300/rmfIhftLXpHEZzkLSpWQMZhirMJ.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  filter: blur(5px);
  backdrop-filter: blur(200px);
  backdrop-filter: opacity(20%); */
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
