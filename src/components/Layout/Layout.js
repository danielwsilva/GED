import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SLayout>
      <Sidebar sidebar={setSidebarOpen} />
      <SMain sidebarOpen={sidebarOpen} isMobile={isMobile}>{children}</SMain>
    </SLayout>
  );
};

export default Layout;
