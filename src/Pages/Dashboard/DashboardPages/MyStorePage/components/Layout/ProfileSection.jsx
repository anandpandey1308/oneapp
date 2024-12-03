// MyStorePage/components/Layout/ProfileSection.jsx
import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@mui/material';
import EditHeaderModal from '../EditHeader/EditHeaderModal';
import { useStore } from '../../context/StoreContext';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const ProfileSection = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { state } = useStore();

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="profile-section">
        <div className="profile-main">
          <div className="profile-info-container">
            <div className="profile-image">
              <img 
                src={state.profile.image || "default_astronaut_image_url"} 
                alt="Profile" 
              />
            </div>
            <div className="profile-info">
              <h2 className="profile-name">{state.profile.name || 'Anand1'}</h2>
              <p className="profile-tagline">{state.profile.bio || 'Anand is here'}</p>
              <div className="profile-meta">
                <Instagram size={20} className="instagram-icon" />
                <span className="button-count">1 button</span>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            onClick={handleEditClick}
            sx={{
              backgroundColor: '#f5f5f5',
              color: '#666',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#e0e0e0',
                boxShadow: 'none'
              },
              textTransform: 'none',
              fontWeight: 'normal'
            }}
          >
            <ModeEditOutlineOutlinedIcon/>
            Edit header
          </Button>
        </div>
      </div>

      {isEditModalOpen && (
        <EditHeaderModal 
          onClose={handleCloseModal}
          initialData={{
            name: state.profile.name || 'Anand1',
            bio: state.profile.bio || 'Anand is here',
            image: state.profile.image
          }}
        />
      )}
    </>
  );
};

export default ProfileSection;