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
  opacity: 0.3;
  background-image: url(${props => props.bg});
  /* background-color: var(--accent); */
  /* background-color: #fbda61;
  background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%); */
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* filter: blur(5px); */
  backdrop-filter: blur(200px);
  backdrop-filter: opacity(20%);
`;

export { Wrapper, Bg };
