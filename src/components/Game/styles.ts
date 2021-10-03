import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.34);
  border-radius: 0.6rem;

  img {
    width: 100%;
    height: 32rem;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    padding: 1rem;
    list-style: none;

    li {
      padding: 0.5rem;
    }
  }
`;
