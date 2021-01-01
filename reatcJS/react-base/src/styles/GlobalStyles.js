import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/color';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
  }

  html, body, .root {
    min-height: 100vh;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: #fff;
    padding: 5px 10px;
    border-radius: 500px;
    transition: 0.3s ease all;
    font-weight: 700;
  }

  button:hover {
    background: ${colors.primaryDarkColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .container {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .msg-error {
    background: ${colors.errorColor};
    color: #fff;
  }

  .msg-success {
    background: ${colors.successColor};
    color: #fff;
  }

  .msg-warning {
    background: ${colors.warningColor};
    color: #fff;
  }

  .Toastify__progress-bar {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
`;
