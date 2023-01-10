import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

const UserInput = () => {
  const [userInput, setUserInput] = useState('');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  function handleInputChange(input: string) {
    if (input.match(new RegExp('^[0-9]+$')) || input === '') {
      setUserInput(input);
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (userInput) {
      setSearchParams({ id: userInput });
      return;
    }

    setSearchParams();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-full justify-center pt-20 lg:w-3/5'
    >
      <input
        type='text'
        placeholder='Search'
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
        className=' grow  rounded-tl-md rounded-bl-md border-2 border-gray-600 px-3 py-2 text-gray-800 shadow-md outline-none duration-100 focus:border-2 focus:border-blue-500 lg:w-3/5'
      />
      <button
        type='submit'
        data-testid='search-button'
        className='rounded-tr-md rounded-br-md border-2 border-l-0 border-gray-600 bg-gray-600 px-3 text-lg text-white shadow-md'
      >
        <BsSearch />
      </button>
    </form>
  );
};

export default UserInput;
