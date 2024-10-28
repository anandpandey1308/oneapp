// src/components/MobilePreview.jsx
import React from "react";
import { Share2, Instagram, Copy } from "lucide-react";
import "./store.css";

const MobilePreview = ({ theme, profile }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(profile.profileUrl);
  };

  return (
    <div className="preview-section">
      <div className="preview-header">
        <div className="profile-url">
          {profile.profileUrl}
          <button className="copy-button" onClick={handleCopyUrl}>
            <Copy size={16} />
          </button>
        </div>
        <button className="share-button">Share</button>
      </div>

      <div
        className="mobile-preview"
        style={{
          background: theme.previewBg,
          color: theme.id === "dark" ? "#FFFFFF" : "#111827",
        }}
      >
        <button className="preview-share-button">
          <Share2 size={16} />
        </button>

        <div className="preview-content">
          <div className="preview-avatar">
            <img src={profile.avatarImage} alt={profile.username} />
          </div>
          <h3 className="preview-name">{profile.username}</h3>
          <p className="preview-tagline">{profile.tagline}</p>

          <button
            className="preview-contact"
            style={{
              background: theme.id === "dark" ? "#374151" : "#FFFFFF",
              color: theme.id === "dark" ? "#FFFFFF" : "#111827",
            }}
          >
            Contact me
          </button>

          <div className="preview-social">
            <Instagram size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
