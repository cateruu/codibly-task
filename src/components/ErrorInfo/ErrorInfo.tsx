import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { closeErrorModal } from '../../store/features/error/errorSlice';

import { motion } from 'framer-motion';

const ErrorInfo = () => {
  const message = useAppSelector((state) => state.error.message);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => dispatch(closeErrorModal()), 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      key={message}
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: -100 }}
      className='fixed bottom-20 left-6 z-10 flex  rounded-md border-l-8 border-red-600 bg-white py-2 shadow-md shadow-gray-300'
    >
      <div className='mx-4 self-center text-3xl text-red-600'>
        <AiOutlineCloseCircle />
      </div>
      <div className='flex flex-col'>
        <p className='text-xl font-medium text-gray-700'>Error</p>
        <p className='text-md -mt-1 text-gray-500'>{message}</p>
      </div>

      <button
        className='ml-10 self-center px-2 text-gray-300'
        onClick={() => dispatch(closeErrorModal())}
      >
        CLOSE
      </button>
    </motion.div>
  );
};

export default ErrorInfo;
