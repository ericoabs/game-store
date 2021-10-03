import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.34);
  border-radius: 0.6rem;

  img {
    width: 15rem;
    height: 15rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 1rem;
    list-style: none;
  }
`;
