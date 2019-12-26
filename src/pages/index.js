import React from 'react';
import App from '../components/App';
import { PortfolioProvider } from '../context/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => (
  <PortfolioProvider>
    <App />
  </PortfolioProvider>
);
