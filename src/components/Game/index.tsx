import { useCart } from '../../hooks/cart';
import { Button } from '../Button';
import * as Styled from './styles';

export type GameProps = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
};

export const Game = (product: GameProps) => {
  const { addToCart } = useCart();

  return (
    <Styled.Container>
      <img src={product.image} alt={product.name} />
      <ul>
        <li>{product.name}</li>
        <li>Score: {product.score}</li>
        <li>R$: {product.price}</li>
        <li>
          <Button onClick={() => addToCart(product)}>Comprar</Button>
        </li>
      </ul>
    </Styled.Container>
  );
};
