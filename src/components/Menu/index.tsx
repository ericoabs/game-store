import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import { BsCartFill } from 'react-icons/bs';
import logo from '../../assets/logo.svg';
import { useMemo } from 'react';

export function Menu() {
  const { products } = useCart();

  const amount = useMemo(() => {
    return products.reduce((sum, item) => {
      return (sum += item.amount);
    }, 0);
  }, [products]);

  return (
    <Styled.Container>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/cart">
        <BsCartFill size={30} />
        <span>{products.length > 0 ? `${amount}` : ''}</span>
      </Link>
    </Styled.Container>
  );
}
