// src/components/ProfileContent/ProfileContent.jsx
import React, { useState } from "react";
import { Instagram, Phone, ChevronDown, Edit } from "lucide-react";
import EditProfileModal from "./EditProfile"; // Adjusted import path
import "./store.css"; // Renamed CSS import

const ProfileContent = ({ onProfileUpdate }) => {
  // Initialize state with all required fields
  const [profileData, setProfileData] = useState({
    username: "Anand1",
    tagline: "Anand is here",
    avatarImage: "/api/placeholder/80/80",
    socials: {
      instagram: { enabled: true, username: "" },
    },
  });

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Handler for profile updates
  const handleProfileUpdate = (updatedData) => {
    setProfileData(updatedData);
    // Pass the data up to parent component
    if (onProfileUpdate) {
      onProfileUpdate(updatedData);
    }
  };

  return (
    <div className="profile-card">
      <div className="follow-section">
        <button className="follow-button">Follow</button>
      </div>

      <div className="profile-info">
        <div className="profile-image">
          <img
            src={profileData.avatarImage}
            alt={profileData.username}
            className="profile-avatar"
          />
        </div>
        <h2 className="profile-name">{profileData.username}</h2>
        <p className="profile-tagline">{profileData.tagline}</p>

        {/* Social Links */}
        {profileData.socials.instagram.enabled && (
          <div className="social-links">
            <Instagram size={20} className="instagram-icon" />
          </div>
        )}

        <button
          className="edit-button"
          onClick={() => setIsEditModalOpen(true)}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Edit
            className="icon-class"
            size={16}
            style={{ marginRight: "8px" }}
          />
          Edit details
        </button>
      </div>

      <div className="action-buttons">
        <button className="contact-button">
          <div className="contact-icon">
            <Phone size={16} />
          </div>
          <span className="contact-text">Contact me</span>
        </button>

        <button className="add-button">+ Add a button</button>
      </div>

      <div className="highlights-section">
        <button className="highlights-header">
          <div className="highlights-title">
            <span className="star-icon">☆</span>
            <span>Highlights</span>
          </div>
          <ChevronDown size={16} className="chevron-icon" />
        </button>
      </div>

      <button className="add-product-button">+ Add Product</button>

      <button className="add-header-button">+ Add Header</button>

      {/* Edit Profile Modal */}
      {isEditModalOpen && (
        <EditProfileModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          initialData={profileData}
          onSave={handleProfileUpdate}
        />
      )}
    </div>
  );
};

export default ProfileContent;
