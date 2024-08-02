import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

const Wrapper = styled.div``;

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
  opacity: 0.2;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* filter: blur(5px); */
  backdrop-filter: blur(200px);
  backdrop-filter: opacity(20%);
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;

  @media (max-width: 640px){
  flex-direction: column;
  }
`;

const GoBack = styled(Link)`
  display: block;
  padding: 5px;
  text-decoration: none;

  &:hover,
  &:focus {
    color: var(--accent);
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
    color: var(--accent);
  }
  &.active {
    color: var(--accent);
    font-weight: bold;
  }
`;

const LinkWrapper = styled.div`
  margin-top: 18px;
  /* display: flex;
  gap: 5px;
  align-items: center; */
`;

const HomeLink = styled.a`
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  color: var(--primary);
  font-size: 18px;
  font-weight: bold;
  transition: color 500ms ease-in-out;

  &:hover {
    color: var(--accent);
    /* letter-spacing: 0.5px; */
  }
`;

export {
  Wrapper,
  Bg,
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
};
