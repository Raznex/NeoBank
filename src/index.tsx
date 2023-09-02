import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './common/assets/normalize/_reset.scss';
import './common/assets/fonts/_fonts.scss';
import './Modules/Module-3/components/Page/_Page.scss';
import App from './Modules/Module-3/components/App/App';
import { setupStore } from './Modules/Module-4/utils/store/store';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const store = setupStore;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
