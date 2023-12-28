import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navi, Header, Main, StyledLink } from './Layout.styled';
// import logo from '../../images/film.png';

function Layout() {
  return (
    <div>
      <Header>
        {/* <img src={logo} alt="movie logo" width={60} /> */}
        <Navi>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Navi>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </div>
  );
}

export default Layout;
