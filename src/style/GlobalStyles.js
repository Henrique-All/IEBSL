import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.primaryDarkColor};
}

html, body, #root {
  height: 100%;
}

button{
  cursor: pointer;
  background: ${colors.primaryHeader};
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: 1s;
  &:hover {
    background: ${colors.primaryDarkColor};
  }
}

a {
  text-decoration: none;
  color: ${colors.primaryColor};
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  color: width;
  background: ${colors.sucessColor};
}
body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
}
`;

export const Container = styled.section`
  margin: auto;
  max-width: 1600px;
  background: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
