// EditProfileModal.jsx
import React, { useState, useEffect } from "react";
import { Instagram, X } from "lucide-react";
import "./edit.css";

const EditProfileModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    username: "",
    tagline: "",
    socials: {
      instagram: { enabled: false },
    },
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        username: initialData.username || "",
        tagline: initialData.tagline || "",
        socials: {
          instagram: {
            enabled: initialData.socials?.instagram?.enabled || false,
          },
        },
      });
    }
  }, [initialData]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSocialToggle = () => {
    setFormData((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        instagram: {
          ...prev.socials.instagram,
          enabled: !prev.socials.instagram.enabled,
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

          {/* Social Links */}
          <div className="social-section">
            <label>Social Link</label>
            <select className="form-select">
              <option>Position on profile - Top</option>
            </select>

            <div className="social-links-list">
              <div className="social-link-item">
                <div className="social-info">
                  <Instagram size={20} />
                  <span>Instagram</span>
                </div>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={formData.socials.instagram.enabled}
                    onChange={handleSocialToggle}
                  />
                  <span className="toggle-slider"></span>
                </div>
              </div>
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
              onSave(formData); // First save the data
              onClose(); // Then close the modal
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
