import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/app.styles.scss';

render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
