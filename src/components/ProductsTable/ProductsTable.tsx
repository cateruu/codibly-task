import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

type Props = {
  data: ApiResponse;
};

const ProductsTable = ({ data }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (direction: string) => {
    switch (direction) {
      case 'next':
        setSearchParams({ page: `${++data.page}` });
        break;
      case 'prev':
        setSearchParams({ page: `${--data.page}` });
        break;
    }
  };

  return (
    <table
      className='w-full border-separate border-spacing-y-3 lg:w-3/5'
      cellPadding={20}
      cellSpacing={0}
    >
      <thead>
        <tr className='text-gray-800'>
          <th>ID</th>
          <th className='py-4 text-left'>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((product) => (
          <tr
            aria-label='show product'
            key={product.id}
            style={{ backgroundColor: product.color }}
            className='border-separate cursor-pointer text-gray-900 shadow-md shadow-gray-400 duration-100 ease-in-out hover:scale-[1.02]'
            data-testid='product'
          >
            <td className='rounded-tl-md rounded-bl-md text-center font-semibold'>
              {product.id}
            </td>
            <td className=''>{product.name}</td>
            <td className='rounded-tr-md rounded-br-md text-center'>
              {product.year}
            </td>
          </tr>
        ))}
        {!data.data.length && (
          <tr>
            <td
              colSpan={3}
              className='rounded-md border-2 text-center font-semibold text-gray-500 shadow-md'
            >
              No products found
            </td>
          </tr>
        )}
        <tr>
          <td colSpan={3} className=''>
            <div className='flex items-center justify-center'>
              <button
                className='rounded-md border-2 border-gray-600 px-3 py-1 duration-100 ease-in-out  disabled:opacity-40'
                onClick={() => changePage('prev')}
                disabled={data.page <= 1}
                data-testid='prev-page'
              >
                <GrFormPrevious />
              </button>
              <p className='mx-4'>
                {data.page} - {data.total_pages}
              </p>
              <button
                className='rounded-md border-2 border-gray-600 px-3 py-1 duration-100 ease-in-out  disabled:opacity-40'
                onClick={() => changePage('next')}
                disabled={data.page >= data.total_pages}
                data-testid='next-page'
              >
                <GrFormNext />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
