import React from 'react';

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>Skillex.</header>
      <main>
        {children}
      </main>
    </>
  );
}

export default Layout;
