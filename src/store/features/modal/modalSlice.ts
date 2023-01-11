import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType } from '../../../components/ProductsTable/Product/Product';

type ModalState = {
  isModalOpen: boolean;
  data: ProductType | null;
};

const initialState: ModalState = {
  isModalOpen: false,
  data: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, { payload }: PayloadAction<ProductType>) => {
      state.isModalOpen = true;
      state.data = payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.data = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
