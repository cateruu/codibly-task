import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='w-3/4 m-auto'>{children}</div>;
};

export default Layout;
