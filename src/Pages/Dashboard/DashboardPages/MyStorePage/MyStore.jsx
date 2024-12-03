// MyStorePage/index.jsx
import React, { useState } from 'react';
import { StoreProvider } from './context/StoreContext';
import LeftPanel from './components/Layout/LeftPanel';
import RightPanel from './components/Layout/RightPanel';
import TabSection from './components/TabSection';
import './styles/store.css';

const MyStorePage = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (newValue) => {
    setCurrentTab(newValue);
  };

  const renderContent = () => {
    switch (currentTab) {
      case 0: // Store
        return (
          <div className="store-layout">
            <LeftPanel />
            <RightPanel />
          </div>
        );
      case 1: // Appearance
        return <div>Appearance Content</div>;
      case 2: // Analytics
        return <div>Analytics Content</div>;
      case 3: // Settings
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
    <StoreProvider>
      <div className="mystore-container">
        <TabSection 
          currentTab={currentTab} 
          onTabChange={handleTabChange} 
        />
        {renderContent()}
      </div>
    </StoreProvider>
  );
};

export default MyStorePage;