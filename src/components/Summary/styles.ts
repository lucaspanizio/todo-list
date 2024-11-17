import styled from 'styled-components';

export const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 1.25rem;
  width: 100%;
`;

interface IBadgeWrapperProps {
  variant: 'created' | 'completed';
}

export const BadgeWrapper = styled.div<IBadgeWrapperProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  span {
    color: ${({ variant }) =>
      variant === 'created' ? 'var(--blue)' : 'var(--purple)'};
  }
`;
