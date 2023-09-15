import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Promotion from './Promotion';


const mockStore = configureStore([]);
const initialState = {
  prescoringSlice: {
    status: 'someStatus',
    selectedOffer: 'someOffer',
  },
};

const store = mockStore(initialState);
describe('Promotion Component', () => {
  it('кнопка имеет класс "promotion__button_hidden" при условии offers === null', () => {
    const { getByText } = render(
      <Provider store={ store }>
        <Promotion handleButtonClick={ () => {} } />
      </Provider>,
    );
    const button = getByText(/Apply for card/i);
    expect(button).toHaveClass('promotion__button_hidden');
  });
});
