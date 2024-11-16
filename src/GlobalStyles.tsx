import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --gray-100: #f2f2f2;
    --gray-200: #d9d9d9;
    --gray-300: #808080;
    --gray-400: #333333;
    --gray-500: #262626;
    --gray-600: #1a1a1a;
    --gray-700: #0d0d0d;

    --purple: #8284fa;
    --purple-dark: #5e60ce;

    --blue: #4ea8d3;
    --blue-dark: #1e6f9f;

    --danger: #e25858;
  }

  :focus {
    outline: transparent;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-600);
    color: var(--gray-100);
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  textarea,
  button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;
