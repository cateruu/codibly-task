import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { closeModal } from '../../store/features/modal/modalSlice';

import { IoMdClose } from 'react-icons/io';

import { motion } from 'framer-motion';

const Modal = () => {
  const data = useAppSelector((state) => state.modal.data);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        className='fixed top-0 left-0 z-10 h-screen w-screen bg-gray-900 opacity-80'
        onClick={() => dispatch(closeModal())}
        data-testid='close-modal-bg'
      ></div>
      <motion.div
        key={data?.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='fixed top-1/2 left-1/2 z-20 flex min-w-[300px] -translate-x-1/2 -translate-y-1/2 flex-col rounded-md bg-white px-12  py-8 text-gray-800 shadow-md'
        data-testid='modal'
      >
        <button
          className='absolute top-3 right-3 text-2xl text-gray-600'
          onClick={() => dispatch(closeModal())}
          data-testid='close-modal'
        >
          <IoMdClose />
        </button>
        <h3 className='mb-4 text-2xl font-semibold'>Product info</h3>
        <p>
          <span className='font-medium'>ID:</span>
          <span> {data?.id}</span>
        </p>
        <p>
          <span className='font-medium'>Name:</span>
          <span> {data?.name}</span>
        </p>
        <p>
          <span className='font-medium'>Year:</span>
          <span> {data?.year}</span>
        </p>
        <p>
          <span className='font-medium'>Color:</span>
          <span style={{ color: data?.color }}> {data?.color}</span>
        </p>
        <p>
          <span className='font-medium'>Pantone value:</span>
          <span> {data?.pantone_value}</span>
        </p>
      </motion.div>
    </>
  );
};

export default Modal;
