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

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.9);
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-700);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-900);
    cursor: grabbing;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--gray-400);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--gray-100);
    background: var(--gray-600);
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
