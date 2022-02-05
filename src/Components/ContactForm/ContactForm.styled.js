import styled from "@emotion/styled";

export const Form = styled.form`
  font-size: inherit;
  color: inherit;
  outline: none;
  background-color: transparent;
  max-width: 90wv;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 15px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Label = styled.label`
  border: none;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  padding: 5px 10px;
  margin-right: 10px;
`;

export const Input = styled.input`
  background-color: transparent;
  padding: 5px 10px;
  border: 1px white;
  border-radius: 15px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  margin-left: 5px;
  border: none;
  &:focus {
    outline: none;
    background-color: transparent;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: 1px white;
  margin-right: 5px;
  border-radius: 25px;
  box-shadow: inset -2px 1px whitesmoke, -0.3em 0 0.4em white;
  background-color: transparent;
  font-size: inherit;
  color: inherit;
  font-weight: 100;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    opacity: 1;
  }
`;
