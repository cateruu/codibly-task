import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorInfo from './components/ErrorInfo/ErrorInfo';
import Layout from './components/Layout/Layout';
import Modal from './components/Modal/Modal';
import { ProductType } from './components/ProductsTable/Product/Product';
import ProductsTable from './components/ProductsTable/ProductsTable';
import UserInput from './components/UserInput/UserInput';
import { useAppDispatch, useAppSelector } from './hooks/reduxHooks';
import { openErrorModal } from './store/features/error/errorSlice';
import { getHttpErrorMessage } from './utils/getHttpErrorMessage';

function App() {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [singleProduct, setSingleProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const isModalOpen = useAppSelector((state) => state.modal.isModalOpen);
  const isErrorOpen = useAppSelector((state) => state.error.isErrorOpen);
  const dispatch = useAppDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true);
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

        if (searchParams.get('id')) {
          const singleProduct: ApiResponseSingleProduct = await response.json();

          setData(null);
          setSingleProduct(singleProduct.data);
          setIsLoading(false);
          return;
        }

        const data: ApiResponse = await response.json();
        setSingleProduct(null);
        setData(data);
      } catch (error) {
        dispatch(openErrorModal(getHttpErrorMessage(`${error}`)));
      }
      setIsLoading(false);
    };

    getProducts();
  }, [searchParams]);

  return (
    <Layout>
      {isModalOpen && <Modal />}
      <AnimatePresence>{isErrorOpen && <ErrorInfo />}</AnimatePresence>
      <main className='flex min-h-screen w-full flex-col items-center font-display'>
        <UserInput />
        <h2 className='mt-10 w-full  text-4xl font-semibold text-gray-800 lg:w-3/5'>
          Products
        </h2>
        {data && <ProductsTable data={data} />}
        {singleProduct && <ProductsTable singleProduct={singleProduct} />}
        {isLoading && (
          <div className='h-10 w-10 animate-bounce rounded-full bg-gray-300'></div>
        )}
      </main>
    </Layout>
  );
}

export default App;
