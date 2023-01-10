import React from 'react';

type Props = {
  productData: Product;
};

const Product = ({ productData }: Props) => {
  return (
    <tr
      aria-label='show product'
      style={{ backgroundColor: productData.color }}
      className='border-separate cursor-pointer text-gray-900 shadow-md shadow-gray-400 duration-100 ease-in-out hover:scale-[1.02]'
      data-testid='product'
    >
      <td className='rounded-tl-md rounded-bl-md text-center font-semibold'>
        {productData.id}
      </td>
      <td className=''>{productData.name}</td>
      <td className='rounded-tr-md rounded-br-md text-center'>
        {productData.year}
      </td>
    </tr>
  );
};

export default Product;
