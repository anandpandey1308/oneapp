// MyStorePage/components/Header/HeaderItem.jsx
import React from 'react';
import { IconButton, Switch, Menu, MenuItem } from '@mui/material';
import { MoreVertical, Pencil } from 'lucide-react';

const HeaderItem = ({ header, onUpdate, onDelete }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isEditing, setIsEditing] = React.useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-item">
      <div className="header-left">
        <span className="character-count">{header.text.length}/35</span>
        <div className="header-text-container">
          {isEditing ? (
            <input
              type="text"
              value={header.text}
              onChange={(e) => {
                const newText = e.target.value;
                if (newText.length <= 35) {
                  onUpdate({ ...header, text: newText });
                }
              }}
              onBlur={() => setIsEditing(false)}
              className="header-input"
              autoFocus
            />
          ) : (
            <div 
              className="header-text"
              onClick={() => setIsEditing(true)}
            >
              {header.text}
              <Pencil size={16} className="edit-icon" />
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        <Switch
          checked={header.enabled}
          onChange={(e) => onUpdate({ ...header, enabled: e.target.checked })}
          className="header-switch"
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#4CAF50',
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#4CAF50',
            },
          }}
        />
        
        <IconButton 
          size="small"
          onClick={handleMenuClick}
          className="menu-button"
        >
          <MoreVertical size={16} />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{
            sx: {
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              mt: 1
            }
          }}
        >
          <MenuItem 
            onClick={() => {
              handleMenuClose();
              onDelete(header.id);
            }}
            sx={{ fontSize: '14px' }}
          >
            Delete
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default HeaderItem;