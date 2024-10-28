// src/components/ProfileContent/ProfileContent.jsx
import React, { useState } from "react";
import {
  Instagram,
  Phone,
  ChevronDown,
  Settings,
  MoreVertical,
} from "lucide-react";
import EditProfileModal from "./EditProfile";
import "./profile.css";
const ASTRONAUT_IMAGE =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png";

const ProfileContent = ({ onProfileUpdate }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    username: "Anand1",
    tagline: "Anand is here",
    socials: {
      instagram: { enabled: true },
    },
  });

  const handleProfileUpdate = (updatedData) => {
    setProfileData(updatedData);
    setIsEditModalOpen(false); // This line ensures the modal closes
    if (onProfileUpdate) {
      onProfileUpdate(updatedData);
    }
  };

  return (
    <div className="profile-card">
      {/* Follow Section */}
      <div className="follow-section">
        <button className="follow-button">
          <Settings size={16} />
          Follow
        </button>
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <div className="profile-image">
          <img src={ASTRONAUT_IMAGE} alt="Profile" className="profile-avatar" />
        </div>
        <h2 className="profile-name">{profileData.username}</h2>
        <p className="profile-tagline">{profileData.tagline}</p>

        {profileData.socials.instagram.enabled && (
          <div className="social-links">
            <div className="instagram-icon-wrapper">
              <Instagram size={20} className="instagram-icon" />
            </div>
          </div>
        )}

        <button
          className="edit-button"
          onClick={() => setIsEditModalOpen(true)}
        >
          Edit details
        </button>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <button className="contact-button">
          <div className="contact-left">
            <div className="contact-icon">
              <Phone size={16} color="white" />
            </div>
            <span>Contact me</span>
          </div>
          <MoreVertical size={16} className="more-icon" />
        </button>

        <button className="add-button">+ Add a button</button>
      </div>

      {/* Highlights Section */}
      <div className="highlights-section">
        <button className="highlights-header">
          <div className="highlights-title">
            <span className="star-icon">☆</span>
            <span>Highlights</span>
            <span className="info-icon">ⓘ</span>
          </div>
          <ChevronDown size={16} />
        </button>
      </div>

      {/* Product and Header Buttons */}
      <button className="add-product-button">+ Add Product</button>

      <button className="add-header-button">+ Add Header</button>
      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        initialData={profileData}
        onSave={handleProfileUpdate}
      />
    </div>
  );
};

export default ProfileContent;
