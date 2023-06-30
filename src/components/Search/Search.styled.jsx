import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  gap: 10px;
  padding-top: 20px;
`;

const Input = styled.input`
  /* margin-right: 10px; */
  width: 250px;
`;

const Button = styled.button`
  padding: 5px;
  border: 1px solid #978a8a;
  border-radius: 2px;

  &:hover,
  &:focus {
    background-color: #c25151;

    color: #fff;
    cursor: pointer;
  }
`;

export { Form, Input, Button };
