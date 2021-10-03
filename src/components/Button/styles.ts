import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  color: #fff;
  font-weight: 500;
  background: #835afd;
  border-radius: 0.8rem;
  cursor: pointer;
  border: 0;
  transition: all 0.4s;
  &:hover {
    filter: brightness(0.8);
  }
`;
