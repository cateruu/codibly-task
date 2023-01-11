import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Error = {
  isErrorOpen: boolean;
  message: string | null;
};

const initialState: Error = {
  isErrorOpen: false,
  message: null,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    openErrorModal: (state, { payload }: PayloadAction<string>) => {
      state.isErrorOpen = true;
      state.message = payload;
    },
    closeErrorModal: (state) => {
      state.isErrorOpen = false;
      state.message = null;
    },
  },
});

export const { openErrorModal, closeErrorModal } = errorSlice.actions;
export default errorSlice.reducer;
