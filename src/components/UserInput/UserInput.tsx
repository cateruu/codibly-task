import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const UserInput = () => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (input: string) => {
    if (input.match(new RegExp('^[0-9]+$')) || input === '') {
      setUserInput(input);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log('aha');
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center pt-20'>
      <input
        type='text'
        placeholder='Search'
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
        className='w-full rounded-tl-md  rounded-bl-md border-2 border-gray-600 px-3 py-2 text-gray-800 shadow-md outline-none duration-100 focus:border-2 focus:border-blue-500 lg:w-3/5'
      />
      <button
        type='submit'
        className='rounded-tr-md rounded-br-md border-2 border-l-0 border-gray-600 bg-gray-600 px-3 text-lg text-white shadow-md'
      >
        <BsSearch />
      </button>
    </form>
  );
};

export default UserInput;
