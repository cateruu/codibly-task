import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Modal from './Modal';
import { closeModal, openModal } from '../../store/features/modal/modalSlice';

describe('Modal component', () => {
  it('should open modal with correct data', () => {
    store.dispatch(
      openModal({
        id: 1,
        name: 'cerulean',
        year: 2000,
        color: '#98B2D1',
        pantone_value: '15-4020',
      })
    );
    render(
      <Provider store={store}>
        <Modal />
      </Provider>,
      { wrapper: BrowserRouter }
    );
    const modal = screen.getByTestId('modal');
    const id = screen.getByText(1);
    const name = screen.getByText('cerulean');
    const year = screen.getByText(2000);
    const color = screen.getByText('#98B2D1');
    const pantone_value = screen.getByText('15-4020');

    expect(modal).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(color).toBeInTheDocument();
    expect(pantone_value).toBeInTheDocument();
  });

  it('should close modal', async () => {
    render(
      <Provider store={store}>
        <Modal />
      </Provider>,
      { wrapper: BrowserRouter }
    );

    const modal = screen.getByTestId('modal');
    expect(modal).toBeInTheDocument();

    store.dispatch(closeModal());
    expect(store.getState().modal.isModalOpen).toBe(false);
  });
});
