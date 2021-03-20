import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Componente1 } from './components/Componente1';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Componente1 />
  </React.StrictMode>,
  document.getElementById('root')
);
