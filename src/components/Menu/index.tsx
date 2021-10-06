import * as Styled from './styles';
import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/cart';
import { BsCartFill } from 'react-icons/bs';

export function Menu() {
  const { products } = useCart();

  let amount = 0;

  products.map((product) => {
    amount += product.amount;
  });

  console.log(amount);
  return (
    <Styled.Container>
      <Link to="/cart">
        <BsCartFill size={30} />
        <span>{products.length > 0 ? `${amount}` : ''}</span>
      </Link>
    </Styled.Container>
  );
}
