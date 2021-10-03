import { Button } from '../Button';
import * as Styled from './styles';

type GameProps = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
};

export const Game = ({ id, name, price, score, image }: GameProps) => {
  return (
    <Styled.Container>
      <ul>
        <li>{name}</li>
        <li>Score: {score}</li>
        <li>R$: {price}</li>
        <li>
          <Button>Comprar</Button>
        </li>
      </ul>
    </Styled.Container>
  );
};
