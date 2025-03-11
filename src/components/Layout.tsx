import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <main className="flex-grow relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02] pointer-events-none" />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 