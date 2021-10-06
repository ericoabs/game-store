import styled from 'styled-components';

export const Container = styled.nav`
  margin: 0 auto;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #835afd;

  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 2.5rem;
    padding: 0.5rem;

    > span {
      margin-left: 0.5rem;
    }
  }
`;
