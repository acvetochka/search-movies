import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navi, Header, Main, StyledLink } from './Layout.styled';

function Layout() {
  return (
    <div>
      <Header>
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
