import React from 'react';
import { TextField } from '@mui/material';

const Input = ({ value, onChange, maxLength, disabled, placeholder }) => {
  const helperText = maxLength ? `${value.length}/${maxLength}` : '';

  return (
    <div className="input-container">
      <TextField
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        inputProps={{ maxLength }}
        helperText={helperText}
        fullWidth
        size="small"
        variant="outlined"
      />
    </div>
  );
};

export default Input;