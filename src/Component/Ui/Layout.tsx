import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch } from '../../Hooks/useAppDispatch';
import { useAppSelector } from '../../Hooks/useAppSelector';
import { toggleDarkMode } from '../../Store/UiSlice';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.ui.isDarkMode);
  
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 !text-gray-900'}`}>
      <header className="sticky top-0 z-10 backdrop-blur-md bg-gray-900/80 border-b border-gray-800 shadow-md">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-blue-500">CryptoTracker</h1>
              </div>
            </div>
            
            <button
              onClick={handleToggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-700 focus:outline-none"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </header>
      
      <main className="max-w-[1440px] mx-auto px-4 sm:px-6 py-6">
        {children}
      </main>
      
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-xs">
            CryptoTracker &copy; {new Date().getFullYear()} | Data updates in real-time | Developed by: Vasu Makadia 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;