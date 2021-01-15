import React from 'react';
import NavigationSidebar from 'components/common/NavigationSidebar';

const Layout = ({ children }) => {
  return (
    <>
      <NavigationSidebar />
      {children}
    </>
  );
};

export default Layout;
