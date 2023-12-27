const { default: styled } = require('@emotion/styled');

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export { Wrapper, Text };
