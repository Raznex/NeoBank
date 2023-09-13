import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CustomizeCard from './CustomizeCard';


const mockStore = configureStore([]);
const initialState = {
  prescoringSlice: {
    status: 'someStatus',
    selectedOffer: 'someOffer',
  },
};

const store = mockStore(initialState);

describe('CustomizeCard Component', () => {
  it('проверяет наличие и корректность инпутов firstName и lastName а так же кнопку', () => {
    const { getByLabelText, getByText } = render(
      <Provider store={ store }>
        <CustomizeCard />
      </Provider>,
    );
    const lastNameInput = getByLabelText(/Your last name/i);
    const firstNameInput = getByLabelText(/Your first name/i);
    const continueButton = getByText('Continue');
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(lastNameInput).toBeInTheDocument();
    // @ts-ignore
    expect(lastNameInput.value).toBe('Doe');
    // @ts-ignore
    expect(firstNameInput.value).toBe('John');
    expect(firstNameInput).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
  });
  it('проверяет корректность инпута "Your date of birth"', () => {
    const { getByLabelText } = render(
      <Provider store={ store }>
        <CustomizeCard />
      </Provider>,
    );
    const dateInput = getByLabelText('Your date of birth *');
    expect(dateInput).toBeInTheDocument();
    fireEvent.change(dateInput, { target: { value: '1999-01-01' } });
    // @ts-ignore
    expect(dateInput.value).toBe('1999-01-01');
    fireEvent.change(dateInput, { target: { value: '2010-01-01' } });
  });
});
