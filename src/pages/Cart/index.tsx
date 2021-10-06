import { useCallback, useEffect, useMemo, useState } from 'react';
import { useCart } from '../../hooks/cart';
import { Button } from '../../components/Button';
import { BsPlus } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';

import * as Styled from './styles';
import { Menu } from '../../components/Menu';

interface GameType {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  amount: number;
}

export function Cart() {
  const [items, setItems] = useState<GameType[]>([]);
  const { products, increment, decrement } = useCart();

  const loadItems = useCallback(() => {
    setItems(products);
  }, [products]);

  const formatPrice = useCallback((price: number, amount: number) => {
    return price * amount;
  }, []);

  const cartTotal = useMemo(() => {
    return items.reduce((sum, item) => {
      return sum + item.price * item.amount;
    }, 0);
  }, [items]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <>
      <Menu />
      <Styled.Container>
        {items.map((game) => {
          return (
            <div key={game.id}>
              <p>{game.name}</p>
              <img src={game.image} alt={game.name} />
              <p>Nota: {game.score}</p>
              <Styled.Ammount>
                Quantidade:
                <Button className="remover" onClick={() => decrement(game.id)}>
                  <HiMinus />
                </Button>
                {game.amount}
                <Button
                  className="adicionar"
                  onClick={() => increment(game.id)}
                >
                  <BsPlus size={20} />
                </Button>
              </Styled.Ammount>
              <p>
                Total:{' '}
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(formatPrice(game.price, game.amount))}{' '}
                (Un.{' '}
                {new Intl.NumberFormat('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(game.price)}
                )
              </p>
            </div>
          );
        })}
        <Styled.Total>
          Total:{' '}
          {new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL',
          }).format(cartTotal)}
        </Styled.Total>
      </Styled.Container>
    </>
  );
}
