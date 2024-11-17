import styled from 'styled-components';

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  padding-left: 25%;
  padding-right: 25%;

  section {
    min-width: 600px;

    @media screen and (max-width: 768px) {
      min-width: auto;
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;
