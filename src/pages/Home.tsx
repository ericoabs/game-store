import { data } from '../api/mock';
import { Game } from '../components/Game';
import * as Styled from './styles';

console.log(data);

export const Home = () => {
  return (
    <Styled.Container>
      {data.map((game) => {
        return (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            price={game.price}
            score={game.score}
            image={game.image}
          />
        );
      })}
    </Styled.Container>
  );
};
