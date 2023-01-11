import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

import { IoMdClose } from 'react-icons/io';

const UserInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [userInput, setUserInput] = useState(searchParams.get('id') || '');

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

  const clearInput = () => {
    setUserInput('');

    if (searchParams.get('page')) {
      setSearchParams({ page: searchParams.get('page') as string });
      return;
    }

    setSearchParams();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='relative flex w-full justify-center pt-10 lg:w-3/5 lg:pt-20'
    >
      <input
        type='text'
        placeholder='Search'
        value={userInput}
        onChange={(e) => handleInputChange(e.target.value)}
        className=' grow  rounded-tl-md rounded-bl-md border-2 border-gray-600 px-3 py-2 text-gray-800 shadow-md outline-none duration-100 focus:border-2 focus:border-blue-500 lg:w-3/5'
      />
      {userInput && (
        <div
          aria-label='clear input'
          className='absolute right-14 cursor-pointer self-center text-xl text-gray-700'
          onClick={(e) => {
            e.preventDefault();
            clearInput();
          }}
        >
          <IoMdClose />
        </div>
      )}
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
