import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>
        <Header />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 