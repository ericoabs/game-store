import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home/Home';
import { GlobalStyles } from './styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
