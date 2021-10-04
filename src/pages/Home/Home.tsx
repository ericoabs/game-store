import { data } from '../../api/mock';
import { Game } from '../../components/Game';
import * as Styled from './styles';

export const Home = () => {
  return (
    <>
      <span>
        <label id="filter">Filtrar</label>
        <select name="filter" id="filter">
          <option value="" disabled defaultValue="Alphabetically">
            Selecione uma opção...
          </option>
          <option value="Alphabetically" label="Alfabeticamente">
            Alfabeticamente
          </option>
          <option value="SmallerPrice" label="Menor Preço">
            Menor Preço
          </option>
          <option value="BiggerPrice" label="Maior Preço">
            Maior Preço
          </option>
          <option value="Score" label="Nota">
            Nota
          </option>
        </select>
      </span>
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
    </>
  );
};
