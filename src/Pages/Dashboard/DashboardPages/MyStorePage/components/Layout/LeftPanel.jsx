// MyStorePage/components/Layout/LeftPanel.jsx
import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@mui/material';
import ProfileSection from './ProfileSection';
import HighlightsSection from './HighlightsSection';
import HeaderList from '../Header/Headerlist';
import { useStore } from '../../context/StoreContext';
import { generateId } from '../../utils/helpers';

const LeftPanel = () => {
  const { dispatch } = useStore();

  const handleAddHeader = () => {
    const newHeader = {
      id: generateId(),
      text: 'Header 1',
      enabled: true
    };
    dispatch({ type: 'ADD_HEADER', payload: newHeader });
  };

  return (
    <div className="left-panel">
      <ProfileSection />
      <HighlightsSection />
      
      <Button 
        variant="contained" 
        fullWidth 
        className="add-content-btn"
        sx={{ 
          backgroundColor: '#000', 
          '&:hover': { backgroundColor: '#333' },
          marginBottom: '12px',
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px',
          fontSize: '15px'
        }}
      >
        + Add Content
      </Button>
      <Button 
        variant="outlined" 
        fullWidth
        onClick={handleAddHeader}
        sx={{ 
          color: '#666',
          borderColor: '#e0e0e0',
          backgroundColor: '#fff',
          textTransform: 'none',
          borderRadius: '12px',
          padding: '12px',
          fontSize: '15px',
          '&:hover': { 
            backgroundColor: '#f8f8f8', 
            borderColor: '#e0e0e0' 
          }
        }}
      >
        Add a Header
      </Button>

      <HeaderList />
    </div>
  );
};

export default LeftPanel;