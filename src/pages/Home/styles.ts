import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 1rem;
  align-items: center;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 790px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const SelectContainer = styled.span`
  display: flex;
  justify-content: end;
  margin: 1rem;
  font-size: 2rem;

  select {
    font-size: 1.6rem;
    margin: 0 0.5rem;
  }
`;
