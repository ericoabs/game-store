import { useCallback, useEffect, useState } from 'react';
import { data } from '../../api/mock';
import { Button } from '../../components/Button';
import { Game } from '../../components/Game';
import { GameProps } from '../../components/Game';
import { useCart } from '../../hooks/cart';
import * as Styled from './styles';

export const Games = () => {
  const [gamesData, setGamesData] = useState<GameProps[]>(data);

  const { products, addToCart } = useCart();

  const handleSelect = useCallback(
    (event) => {
      const selectEvent = event.target.value;
      let formattedData;

      switch (selectEvent) {
        case 'SmallerPrice':
          formattedData = gamesData.sort((a, b) => {
            return a.price < b.price ? -1 : 1;
          });
          setGamesData([...formattedData]);
          break;
      }
    },
    [gamesData],
  );

  const handleFilter = useCallback(() => {
    const formattedData = gamesData.sort((a, b) => {
      return a.price < b.price ? -1 : 1;
    });
    setGamesData(formattedData);
  }, [gamesData]);

  return (
    <>
      <Styled.SelectContainer>
        <label id="filter">Filtrar</label>
        <select name="filter" id="filter" onChange={handleSelect}>
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
        <Button onClick={handleFilter}>Filtro</Button>
      </Styled.SelectContainer>
      <Styled.Container>
        {gamesData.map((game) => {
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
