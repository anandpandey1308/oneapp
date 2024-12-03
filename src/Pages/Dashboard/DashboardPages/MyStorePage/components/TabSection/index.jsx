import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';

const TabSection = ({ currentTab, onTabChange }) => {
  const tabs = ['Store', 'Appearance', 'Analytics', 'Settings'];

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs 
        value={currentTab} 
        onChange={(e, newValue) => onTabChange(newValue)}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 'normal',
            minWidth: '100px',
          },
          '& .Mui-selected': {
            color: '#000 !important',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#000',
          }
        }}
      >
        {tabs.map((tab, index) => (
          <Tab 
            key={tab} 
            label={tab} 
            value={index}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabSection;