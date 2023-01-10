import React from 'react';
import { fireEvent, screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import UserInput from './UserInput';
import { BrowserRouter } from 'react-router-dom';

const setup = () => {
  render(<UserInput />, { wrapper: BrowserRouter });

  const input: HTMLInputElement = screen.getByPlaceholderText('Search');
  return { input };
};

describe('UserInput component', () => {
  it('accept numbers', () => {
    const { input } = setup();

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '1' } });
    expect(input.value).toBe('1');
  });

  it('not accept letters', () => {
    const { input } = setup();

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: 'test!@#' } });
    expect(input.value).toBe('');
  });

  it('add search param on form submit', () => {
    const { input } = setup();

    expect(input.value).toBe('');
    fireEvent.change(input, { target: { value: '2' } });
    expect(input.value).toBe('2');

    const submitButton = screen.getByTestId('search-button');
    fireEvent.click(submitButton);

    const params = new URLSearchParams(document.location.search);
    const id = params.get('id');
    expect(id).toBe('2');
  });
});
