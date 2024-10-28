// src/components/MobilePreview.jsx
import React from "react";
import { Instagram, Share2 } from "lucide-react";
import "./store.css";

const MobilePreview = ({ theme, profile }) => {
  return (
    <div className="preview-section">
      <div className="preview-header">
        <div className="profile-url">
          {profile.profileUrl}
          <button className="copy-url-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="2"
                width="10"
                height="10"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
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
            <img
              src={profile.avatarImage}
              alt={profile.username}
              className="preview-avatar-image"
            />
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

          {/* Conditional rendering of Instagram icon */}
          {profile.socials?.instagram?.enabled && (
            <div className="preview-social">
              <Instagram
                size={20}
                color={theme.id === "dark" ? "#FFFFFF" : "#111827"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
