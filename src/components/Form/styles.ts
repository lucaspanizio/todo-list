import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0.5rem;
  width: 100%;
  margin-top: -1.75rem;
  margin-bottom: 1.5rem;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

interface InputProps {
  $hasError: boolean;
}

export const Input = styled.input<InputProps>`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;

  color: var(--gray-300);
  background-color: var(--gray-500);

  &:focus {
    color: var(--gray-100);
  }

  ${({ $hasError }) => css`
    border: 1px solid ${$hasError ? 'var(--danger)' : 'var(--gray-700)'};

    &:focus {
      border: 1px solid ${$hasError ? 'var(--danger)' : 'var(--purple-dark)'};
    }
  `}
`;

export const ErrorLabel = styled.label`
  height: 1rem;
  font-size: 0.9rem;
  color: var(--danger);
  visibility: hidden;
  transition: visibility 0.2s ease-in-out;
`;

export const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: var(--gray-100);
  border: 1px solid var(--gray-700);
  background-color: var(--blue-dark);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  &:not([disabled]):hover {
    background-color: var(--blue);
  }
`;
