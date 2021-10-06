import React, { createContext, useState, useCallback, useContext } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  amount: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'amount'>): void;
  increment(id: number): void;
  decrement(id: number): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const increment = useCallback(
    async (id) => {
      const incrementedProducts = products.map((product) => {
        if (product.id === id) {
          const incrementedProduct = product;

          incrementedProduct.amount += 1;

          return incrementedProduct;
        }

        return product;
      });

      setProducts(incrementedProducts);
    },
    [products],
  );

  const decrement = useCallback(
    async (id) => {
      const decrementedProducts = products
        .filter((product) => !(product.id === id && product.amount === 1))
        .map((product) => {
          const returnProduct = product;

          if (returnProduct.id === id) {
            returnProduct.amount -= 1;
          }

          return returnProduct;
        });

      setProducts(decrementedProducts);
    },
    [products],
  );

  const addToCart = useCallback(
    async (product) => {
      const [existentProduct] = products.filter((p) => p.id === product.id);

      if (existentProduct) {
        increment(existentProduct.id);
        return;
      }

      setProducts([...products, { ...product, amount: 1 }]);
    },
    [increment, products, setProducts],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
