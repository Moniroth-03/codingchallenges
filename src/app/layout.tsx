"use client";

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>My Todo App</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other head elements here */}
      </head>
      <body>
        <div>
          <header>
            <h1>My Todo App</h1>
          </header>
          <main>{children}</main>
          <footer>Footer content</footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
