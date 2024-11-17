import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
  padding: 1rem;

  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--gray-400);
  background-color: var(--gray-500);

  input[type='checkbox'] {
    position: relative;
    width: 1.25rem;
    min-width: 1.25rem;
    max-width: 1.25rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: transparent;
    border: 2px solid var(--blue);
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
  }

  input[type='checkbox']:checked {
    border: 2px solid var(--purple-dark);
    background-color: var(--purple-dark);
  }

  input[type='checkbox']:checked:hover {
    border: 2px solid var(--purple);
    background-color: var(--purple);
  }

  input[type='checkbox']:checked::after {
    content: '✔';
    color: var(--gray-100);
    font-size: 0.75rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input[type='checkbox']:not(:checked):hover {
    background-color: var(--blue-dark);
  }

  span {
    font-size: 0.9rem;
    line-height: 1.25rem;
    color: var(--gray-100);
  }

  input[type='checkbox']:checked + span {
    text-decoration: line-through;
    color: var(--gray-300);
  }

  button {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    aspect-ratio: 1/1;
    padding: 0 0.25rem;

    border: none;
    border-radius: 0.25rem;

    color: var(--gray-300);
    background-color: transparent;
    transition: 0.2s background-color;
  }

  button:hover {
    color: var(--danger);
    background-color: var(--gray-400);
  }
`;
