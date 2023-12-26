import styled from '@emotion/styled';

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

export { Wrapper, Bg };
