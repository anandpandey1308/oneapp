import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import ContactModal from './ContactModal';
import { IMAGES } from '../../utils/helpers';

const MobilePreview = () => {
  const { state } = useStore();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { profile } = state;

  return (
    <div className="mobile-preview">
      <div className="mobile-content">
        <div className="mobile-profile">
          <img 
            src={profile.image || IMAGES.DEFAULT_PROFILE} 
            alt="Profile"
            className="mobile-profile-image"
          />
          <h3 className="mobile-name">{profile.name}</h3>
          <p className="mobile-tagline">{profile.bio}</p>
          <div className="mobile-social">
            <Instagram size={20} />
          </div>
        </div>

        <button 
          className="contact-button"
          onClick={() => setIsContactModalOpen(true)}
        >
          Contact me
        </button>

        {state.headers
          .filter(header => header.enabled)
          .map(header => (
            <div key={header.id} className="mobile-header">
              {header.text}
            </div>
          ))}
      </div>

      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        contact={profile.contact}
      />
    </div>
  );
};

export default MobilePreview;