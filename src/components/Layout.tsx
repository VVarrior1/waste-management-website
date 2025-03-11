import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 