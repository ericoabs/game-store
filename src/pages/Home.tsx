import { data } from '../api/mock';
import { Game } from '../components/Game';

console.log(data);

export const Home = () => {
  return (
    <div>
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
    </div>
  );
};
