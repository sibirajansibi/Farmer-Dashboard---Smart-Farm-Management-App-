import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CropPlanning from './pages/CropPlanning';
import WorkerPayments from './pages/WorkerPayments';
import Transactions from './pages/Transactions';
import Rentals from './pages/Rentals';
import Analytics from './pages/Analytics';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'crops':
        return <CropPlanning />;
      case 'workers':
        return <WorkerPayments />;
      case 'transactions':
        return <Transactions />;
      case 'rentals':
        return <Rentals />;
      case 'analytics':
        return <Analytics />;
      case 'notifications':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
            <p className="text-gray-600">Notification management coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
