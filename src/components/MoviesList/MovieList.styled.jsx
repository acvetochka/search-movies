import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

const MovieItem = styled.li`
  position: relative;
  width: 150px;
  border-radius: 5px;
  box-shadow: 0 2px 7px #332f2f;
`;

const MovieItemWrapper = styled.div`
  overflow: hidden;
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
  /* text-overflow: ellipsis; */
  /* white-space: nowrap; */
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  background-color: var(--accent);
  padding: 5px;
  height: 40%;
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
  /* height: 100%; */
  line-height: 1em;
  max-height: 3em;
  overflow: hidden;
  text-shadow: 0 0 2px black;
`;

const Average = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: black;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid var(--accent);

  & span {
    font-size: 8px;
  }
`;

export {
  List,
  MovieItem,
  MovieItemWrapper,
  MovieLink,
  MovieTitleWrapper,
  MovieTitle,
  Average,
};
