import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1rem;
  padding: 4rem 0;

  color: var(--gray-300);
  background-color: var(--gray-500);
  border-radius: 0.375rem;

  line-height: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1rem;
    font-weight: bold;
    color: var(--gray-300);
  }
`;
