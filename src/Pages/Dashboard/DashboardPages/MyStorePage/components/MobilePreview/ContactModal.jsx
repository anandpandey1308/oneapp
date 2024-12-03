import React from 'react';
import { X, Mail, Phone, Copy } from 'lucide-react';
import { Snackbar, Alert } from '@mui/material';

const ContactModal = ({ isOpen, onClose }) => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setOpenSnackbar(true);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="contact-modal-overlay">
        <div className="contact-modal">
          <div className="contact-modal-header">
            <h3>Contact me</h3>
            <button className="close-button" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <p className="contact-description">
            You can contact Anand with their details provided below.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-left">
                <Mail size={20} />
                <div className="contact-info">
                  <span>Email</span>
                  <p>fhfgf@gmail.com</p>
                </div>
              </div>
              <button 
                className="copy-button"
                onClick={() => handleCopy('fhfgf@gmail.com')}
              >
                <Copy size={18} />
              </button>
            </div>

            <div className="contact-item">
              <div className="contact-item-left">
                <Phone size={20} />
                <div className="contact-info">
                  <span>Phone number</span>
                  <p>+91 7406260108</p>
                </div>
              </div>
              <button 
                className="copy-button"
                onClick={() => handleCopy('+91 7406260108')}
              >
                <Copy size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;