import React from 'react';

type Props = {
  products: Product[];
};

const ProductsTable = ({ products }: Props) => {
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
        {products.map((product) => (
          <tr
            aria-label='show product'
            key={product.id}
            style={{ backgroundColor: product.color }}
            className='border-separate cursor-pointer text-gray-900 shadow-md shadow-gray-400 duration-100 ease-in-out hover:scale-[1.02]'
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
        <tr>
          <td colSpan={3} className='py-4'>
            aha
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductsTable;
