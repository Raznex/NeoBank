import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './common/assets/normalize/_reset.scss';
import './common/assets/fonts/_fonts.scss';
import './Modules/Module-3/components/Page/_Page.scss';
import App from './Modules/Module-3/components/App/App';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
