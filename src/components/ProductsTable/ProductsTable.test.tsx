import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProductsTable from './ProductsTable';

describe('ProductsTable component', () => {
  const propsData: ApiResponse = {
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
  };

  beforeEach(() => {
    render(<ProductsTable data={propsData} />, { wrapper: BrowserRouter });
  });

  it('render products from data', () => {
    const allProducts = screen.getAllByTestId('product');

    expect(allProducts).toHaveLength(5);
  });

  it('change pages', () => {
    const nextPage = screen.getByTestId('next-page');
    const prevPage = screen.getByTestId('prev-page');

    fireEvent.click(nextPage);

    let params = new URLSearchParams(document.location.search);
    let page = params.get('page');
    expect(page).toBe('2');

    fireEvent.click(prevPage);

    params = new URLSearchParams(document.location.search);
    page = params.get('page');
    expect(page).toBe('1');
  });

  it('not be able to click on disabled pagination button', () => {
    const prevPage = screen.getByTestId('prev-page');

    expect(prevPage).toBeDisabled();
  });

  it('show information that there is no products', () => {
    const propsData: ApiResponse = {
      page: 1,
      per_page: 5,
      total: 12,
      total_pages: 3,
      data: [],
    };

    render(<ProductsTable data={propsData} />, { wrapper: BrowserRouter });

    const information = screen.getByText('No products found');
    expect(information).toBeInTheDocument();
  });
});
