import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';
import fetchMock from 'jest-fetch-mock';

describe('App component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch products', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        page: 1,
        per_page: 5,
        total: 12,
        total_pages: 3,
        data: [
          {
            id: 1,
            name: 'cerulean',
            year: 2000,
            color: '#98B2D1',
            pantone_value: '15-4020',
          },
          {
            id: 2,
            name: 'fuchsia rose',
            year: 2001,
            color: '#C74375',
            pantone_value: '17-2031',
          },
          {
            id: 3,
            name: 'true red',
            year: 2002,
            color: '#BF1932',
            pantone_value: '19-1664',
          },
          {
            id: 4,
            name: 'aqua sky',
            year: 2003,
            color: '#7BC4C4',
            pantone_value: '14-4811',
          },
          {
            id: 5,
            name: 'tigerlily',
            year: 2004,
            color: '#E2583E',
            pantone_value: '17-1456',
          },
        ],
      })
    );
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const allProducts = await screen.findAllByTestId('product');

    expect(allProducts).toHaveLength(5);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('should show error on API problem', async () => {
    fetchMock.mockReject(() => Promise.reject('Error: 500'));
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const errorElement = await screen.findByText(
      '500: Internal Server Error. Try again later.'
    );
    expect(errorElement).toBeInTheDocument();
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
