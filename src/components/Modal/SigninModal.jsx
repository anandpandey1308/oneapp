/* eslint-disable react/prop-types */
import { Modal, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const EditModal = ({ open, handleClose, label, value, onSave }) => {
  const [tempValue, setTempValue] = useState(value);

  const handleSave = () => {
    onSave(tempValue);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: "8px",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 className="text-xl font-semibold mb-4">Edit {label}</h2>
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          value={tempValue}
          onChange={(e) => setTempValue(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              backgroundColor: '#F97316', // Tailwind's bg-orange-600
              color: 'white', // Text color
              '&:hover': {
                backgroundColor: '#EA580C', // Darker shade for hover
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default EditModal;
