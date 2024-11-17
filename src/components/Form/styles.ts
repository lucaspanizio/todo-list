import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-top: -1.75rem;
  margin-bottom: 4rem;

  & input,
  button {
    padding: 1rem;
    border-radius: 0.5rem;
  }

  input {
    flex: 1;
    color: var(--gray-300);
    border: 1px solid var(--gray-700);
    background-color: var(--gray-500);
  }

  input:focus {
    color: var(--gray-100);
    border: 1px solid var(--purple-dark);
  }

  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 0.5rem;
    border: 1px solid var(--gray-700);
    color: var(--gray-100);
    background-color: var(--blue-dark);
  }

  button:hover {
    background-color: var(--blue);
  }
`;
