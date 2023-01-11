import React from 'react';
import Footer from './Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='m-auto w-3/4'>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
