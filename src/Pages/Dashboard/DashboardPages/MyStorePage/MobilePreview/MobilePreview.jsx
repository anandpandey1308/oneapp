// src/components/MobilePreview/MobilePreview.jsx
import React from "react";
import { Instagram, Share2, Copy } from "lucide-react";
import "./MobilePreview.css";
const ASTRONAUT_IMAGE =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png";

const MobilePreview = ({ profile, theme }) => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(profile.profileUrl);
  };

  return (
    <div className="preview-section">
      {/* URL and Share Button */}
      <div className="preview-header">
        <div className="profile-url">
          superprofile.bio/anandpandey1308
          <button className="copy-button" onClick={handleCopyUrl}>
            <Copy size={16} />
          </button>
        </div>
        <button className="share-button">Share</button>
      </div>

      {/* Mobile Frame */}
      <div className="mobile-frame">
        <div
          className="mobile-preview"
          style={{
            background: theme?.previewBg || "#E7F7E8",
          }}
        >
          {/* Share Icon */}
          <button className="preview-share-button">
            <Share2 size={16} />
          </button>

          {/* Preview Content */}
          <div className="preview-content">
            <div className="preview-avatar">
              <img
                src={ASTRONAUT_IMAGE}
                alt="Profile"
                className="preview-avatar-image"
              />
            </div>
            <h3 className="preview-name">{profile.username}</h3>
            <p className="preview-tagline">{profile.tagline}</p>

            <button className="preview-contact">Contact me</button>

            {profile.socials?.instagram?.enabled && (
              <div className="preview-social">
                <Instagram size={20} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
