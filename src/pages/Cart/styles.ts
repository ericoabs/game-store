import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  padding: 1rem;
  font-weight: 400;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.34);
    border-radius: 0.6rem;
  }

  button {
    & + button {
      margin: 1rem;
    }
  }
  .remover {
    background: red;
  }

  p {
    padding: 0.8rem;
  }

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

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

export const Total = styled.p`
  align-items: center;
  font-size: 2rem;
  font-family: 700;
  box-shadow: 2px 4px 15px rgba(131, 90, 253, 0.9);
`;

export const Ammount = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  gap: 0.4rem;
  button {
    width: 2.8rem;
    margin: 0 1rem;
    padding: 0;
  }
`;
