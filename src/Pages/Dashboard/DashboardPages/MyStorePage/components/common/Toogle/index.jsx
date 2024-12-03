import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

const Toggle = ({ checked, onChange, label }) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          size="small"
        />
      }
      label={label}
    />
  );
};

export default Toggle;