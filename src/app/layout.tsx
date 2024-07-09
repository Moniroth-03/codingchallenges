

import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <main>{children}</main>
      <footer>Footer content</footer>
    </div>
  );
};

export default Layout;
