import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --gray-700: #29292e;
    --gray-800: #1f2729;
    --gray-900: #121214;

    --cyan-500: #61dafb;
    --yellow-500: #eba417;
    --green-500: #04d361;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem;
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: var(--gray-900);
    color: var(--white);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }



`;
