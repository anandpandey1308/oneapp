// src/components/ProfileContent.jsx
import React from "react";
import { Instagram, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "./StoreConfig";
import "./store.css";
import EditProfileModal from "./EditProfile";

const ProfileContent = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState();

  const handleProfileUpdate = (newData) => {
    setProfileData(newData);
    // Add any API calls or state updates here
  };
  return (
    <div className="profile-card">
      <div className="follow-section">
        <button className="follow-button">Follow</button>
      </div>

      <div className="profile-info">
        <div className="profile-image">
          <img
            src={siteConfig.profile.avatarImage}
            alt={siteConfig.profile.username}
          />
        </div>
        <h2 className="profile-name">{siteConfig.profile.username}</h2>
        <p className="profile-tagline">{siteConfig.profile.tagline}</p>

        <div className="social-links">
          <Instagram size={20} />
        </div>

        <button
          className="edit-button"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit details
        </button>
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          profile={profileData}
          onSave={handleProfileUpdate}
        />
      </div>

      <div className="action-buttons">
        <button className="contact-button">
          <span className="phone-icon">
            <Phone size={16} />
          </span>
          Contact me
        </button>
        <button className="add-button">+ Add a button</button>
      </div>

      <div className="highlights-section">
        <button className="highlights-header">
          <span className="highlights-text">
            <span className="star-icon">☆</span>
            Highlights
          </span>
          <ChevronDown size={16} />
        </button>
      </div>

      <button className="add-product">+ Add Product</button>

      <button className="add-header">+ Add Header</button>
    </div>
  );
};

export default ProfileContent;
