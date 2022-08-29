import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <SLayout>
      <Sidebar sidebar={setSidebarOpen} />
      <SMain sidebarOpen={sidebarOpen}>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
