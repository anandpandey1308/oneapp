// EditProfileModal.jsx
import React, { useState } from "react";
import { Instagram, Pencil, X, Facebook, Music2 } from "lucide-react";
import "./store.css";

const EditProfileModal = ({ isOpen, onClose, profile, onSave }) => {
  const [formData, setFormData] = useState({
    username: profile.username || "",
    tagline: profile.tagline || "",
    socialPosition: "top",
    socials: {
      instagram: { enabled: true, username: "" },
      threads: { enabled: false, username: "" },
      tiktok: { enabled: false, username: "" },
      facebook: { enabled: false, username: "" },
      spotify: { enabled: false, username: "" },
    },
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialToggle = (platform) => {
    setFormData((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [platform]: {
          ...prev.socials[platform],
          enabled: !prev.socials[platform].enabled,
        },
      },
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Update profile details</h2>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body">
          {/* Username field */}
          <div className="form-field">
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="Username"
              className="form-input"
            />
            <span className="character-count">
              {formData.username.length}/40
            </span>
          </div>

          {/* Tagline field */}
          <div className="form-field">
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange("tagline", e.target.value)}
              placeholder="Tagline"
              className="form-input"
            />
            <span className="character-count">
              {formData.tagline.length}/116
            </span>
          </div>

          {/* Social Links Section */}
          <div className="social-section">
            <label>Social Links</label>
            <select
              value={formData.socialPosition}
              onChange={(e) => handleChange("socialPosition", e.target.value)}
              className="form-select"
            >
              <option value="top">Position on profile - Top</option>
              <option value="bottom">Position on profile - Bottom</option>
            </select>

            {/* Social Platform List */}
            <div className="social-links-list">
              <div className="social-link-item">
                <Instagram size={20} />
                <span>Instagram</span>
                <button
                  className={`edit-button ${
                    formData.socials.instagram.enabled ? "active" : ""
                  }`}
                  onClick={() => handleSocialToggle("instagram")}
                >
                  <Pencil size={16} />
                </button>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={formData.socials.instagram.enabled}
                    onChange={() => handleSocialToggle("instagram")}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </div>

              <div className="social-link-item">
                <img src="/threads-icon.png" alt="Threads" width="20" />
                <span>Threads</span>
                <button className="edit-button">
                  <Pencil size={16} />
                </button>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={formData.socials.threads.enabled}
                    onChange={() => handleSocialToggle("threads")}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </div>

              {/* Add similar items for TikTok, Facebook, and Spotify */}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Cancel
          </button>
          <button
            className="save-button"
            onClick={() => {
              onSave(formData);
              onClose();
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
