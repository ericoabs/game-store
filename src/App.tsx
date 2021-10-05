import { Home } from './pages/Home/Home';
import { BrowserRouter, Route } from 'react-router-dom';

import AppProvider from './hooks';

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Route path="/" exact component={Home} />
      </AppProvider>
    </BrowserRouter>
  );
}
