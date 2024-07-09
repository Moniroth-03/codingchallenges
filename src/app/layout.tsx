import React from "react";

const Layout: React.FC = ({ children }) => {
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
