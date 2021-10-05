import * as Styled from './styles';
import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <Styled.Container>
      <Link to="/cart">Ir para o Carrinho</Link>
    </Styled.Container>
  );
}
