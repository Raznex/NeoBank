import { render } from '@testing-library/react';
import React from 'react';

import NewsCard from './NewsCard';


describe('NewsCard Component', () => {
  it('Отрисовка карточки', () => {
    const mockCardData = {
      urlToImage: 'https://test.com/image.jpg',
      url: 'https://test.com',
      title: 'title',
      description: 'description',
      publishedAt: '24-05-2000',
    };

    const { getByText, getByAltText } = render(<NewsCard card={ mockCardData } />);
    const CardTitle = getByText('title');
    const DescriptionText = getByText('description');
    const imageElement = getByAltText('title');
    expect(CardTitle).toBeInTheDocument();
    expect(DescriptionText).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'https://test.com/image.jpg');
  });
});
