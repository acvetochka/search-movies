import styled from '@emotion/styled';

const Wrapper = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

const Image = styled.img`
  /* opacity: 0.4; */
`;

const ImageSmall = styled.img`
  /* width: 80%; */
  width: 200px;
`;

const Title = styled.p`
  font-size: 40px;
`;

export { Wrapper, Image, ImageSmall, Title };
