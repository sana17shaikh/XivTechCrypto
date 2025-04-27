import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './Store';
import CryptoTable from './Component/Ui/CryptoTable';
import SearchBar from './Component/Ui/SearchBar';
import Layout from './Component/Ui/Layout';
import MockWebSocket from './Services/mockWebSocket';
import { useAppSelector } from './Hooks/useAppSelector';
import { useAppDispatch } from './Hooks/useAppDispatch';

const CryptoTrackerApp: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchTerm, showFavoritesOnly } = useAppSelector(state => state.ui.filter);
  const lastUpdated = useAppSelector(state => state.crypto.lastUpdated);
  
  // Setup mock WebSocket when component mounts
  useEffect(() => {
    const mockWebSocket = new MockWebSocket(dispatch);
    mockWebSocket.connect();
    
    // Cleanup on component unmount
    return () => {
      mockWebSocket.disconnect();
    };
  }, [dispatch]);
  
  return (
    <Layout>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cryptocurrency Prices</h2>
        <p className="text-gray-400">
          Last updated: {new Date(lastUpdated).toLocaleTimeString()}
        </p>
      </div>
      
      <SearchBar 
        searchTerm={searchTerm}
        showFavoritesOnly={showFavoritesOnly}
      />
      
      <CryptoTable />
    </Layout>
  );
};

// Wrap the app with Redux Provider
function App() {
  return (
    <Provider store={store}>
      <CryptoTrackerApp />
    </Provider>
  );
}

export default App;