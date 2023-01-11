import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { openErrorModal } from '../../store/features/error/errorSlice';
import { store } from '../../store/store';
import ErrorInfo from './ErrorInfo';
import { Provider } from 'react-redux';

describe('ErrorInfo component', () => {
  it('should show error with correct message', () => {
    store.dispatch(openErrorModal('test'));
    render(
      <Provider store={store}>
        <ErrorInfo />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const errorElement = screen.getByText('test');
    expect(errorElement).toBeInTheDocument();
  });

  it('should hide error on CLOSE click', () => {
    render(
      <Provider store={store}>
        <ErrorInfo />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const closeButton = screen.getByRole('button', { name: /CLOSE/i });
    fireEvent.click(closeButton);

    expect(store.getState().error.isErrorOpen).toBe(false);
  });

  it('should hide error after 5 seconds', async () => {
    jest.useFakeTimers();
    render(
      <Provider store={store}>
        <ErrorInfo />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    setTimeout(() => {
      expect(store.getState().error.isErrorOpen).toBe(false);
    }, 5000);
    jest.runAllTimers();
  });
});
