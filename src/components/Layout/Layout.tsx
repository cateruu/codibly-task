import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='m-auto w-3/4'>{children}</div>;
};

export default Layout;
