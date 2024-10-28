import React, { useState, useEffect } from "react";
import { Instagram, Pencil, X } from "lucide-react";
import "./store.css";

const EditProfileModal = ({ isOpen, onClose, initialData, onSave }) => {
  const [formData, setFormData] = useState({
    username: "",
    tagline: "",
    socials: {
      instagram: { enabled: false },
    },
  });

  // Update form data when initial data changes
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

  const handleInstagramToggle = () => {
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

  const handleSubmit = () => {
    onSave(formData);
    onClose();
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

          <div className="social-section">
            <label>Social Link</label>
            <select className="form-select">
              <option>Position on profile - Top</option>
            </select>

            <div className="social-links-list">
              <div className="social-link-item">
                <Instagram size={20} />
                <span>Instagram</span>
                <div className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={formData.socials?.instagram?.enabled}
                    onChange={handleInstagramToggle}
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
          <button className="save-button" onClick={handleSubmit}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
