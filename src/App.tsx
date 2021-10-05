import { Home } from './pages/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

import AppProvider from './hooks';
import { Cart } from './pages/Cart';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </AppProvider>
    </BrowserRouter>
  );
}
