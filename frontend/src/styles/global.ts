import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
  }

  body {
    background: #FA5858;
    color: #fff;
    -webkit-box-smoothing: antialiased;
  }

  body, h1, input, button {
    font-family: 'Nerko One', cursive;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
