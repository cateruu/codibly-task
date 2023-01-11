import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store/store';
import Product from './Product';

describe('Product component', () => {
  const productData = {
    id: 1,
    name: 'cerulean',
    year: 2000,
    color: '#98B2D1',
    pantone_value: '15-4020',
  };

  it('should render product with correct data', () => {
    render(
      <Provider store={store}>
        <Product productData={productData} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const id = screen.getByText(1);
    const name = screen.getByText('cerulean');
    const year = screen.getByText(2000);

    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  it('should open modal on product click', () => {
    render(
      <Provider store={store}>
        <Product productData={productData} />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const productElement = screen.getByTestId('product');
    fireEvent.click(productElement);

    expect(store.getState().modal.isModalOpen).toBe(true);
  });
});
