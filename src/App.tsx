import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ProductsTable from './components/ProductsTable/ProductsTable';
import UserInput from './components/UserInput/UserInput';

function App() {
  const [products, setProducts] = useState<Product[] | null>(null);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      let fetchUrl = 'https://reqres.in/api/products?per_page=5';

      if (searchParams.get('id')) {
        fetchUrl = `https://reqres.in/api/products?id=${searchParams.get(
          'id'
        )}`;
      } else if (searchParams.get('page')) {
        fetchUrl = `https://reqres.in/api/products?per_page=5&page=${searchParams.get(
          'page'
        )}`;
      }

      try {
        const response = await fetch(fetchUrl);

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data: ApiResponse = await response.json();
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, [searchParams]);

  return (
    <Layout>
      <main className='flex min-h-screen w-full flex-col items-center font-display'>
        <UserInput />
        <h2 className='mt-10 w-full  text-4xl font-semibold text-gray-800 lg:w-3/5'>
          Products
        </h2>
        {products && <ProductsTable products={products} />}
      </main>
    </Layout>
  );
}

export default App;
