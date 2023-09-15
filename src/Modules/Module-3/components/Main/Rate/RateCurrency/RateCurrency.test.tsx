import { render } from '@testing-library/react';
import React from 'react';

import RateCurrency from './RateCurrency';


describe('RateCurrency Component', () => {
  it('Отрисовка значения валюты', () => {
    const mockCurrencyData = {
      currency: 'USD',
      value: '1.23',
    };

    const { getByText } = render(<RateCurrency curr={ mockCurrencyData } />);
    const currencyText = getByText('USD:');
    const valueText = getByText('1.23');
    expect(currencyText).toBeInTheDocument();
    expect(valueText).toBeInTheDocument();
  });
});
