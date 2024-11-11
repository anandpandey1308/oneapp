/* eslint-disable react/prop-types */
// src/components/MobilePreview/MobilePreview.jsx
import { useState } from "react";
import { Instagram, Share2, Copy } from "lucide-react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import "./MobilePreview.css";
const ASTRONAUT_IMAGE =
  "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Astronaut.png";

const PreviewSection = ({ profile, theme }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleCopyUrl = () => {
    const url = "oneapp.bio/manish";
    navigator.clipboard.writeText(url).then(() => {
      setShowSnackbar(true);
    });
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return (
    <div className="preview-section">
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="Copied to clipboard!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      />

      <div className="preview-header">
        <div className="profile-url">
          oneapp.bio/manish
          <button className="copy-button" onClick={handleCopyUrl}>
            <Copy size={16} />
          </button>
        </div>
        <button className="share-button">Share</button>
      </div>

      <MobilePreview
        profile={profile}
        theme={theme}
        onCopyUrl={handleCopyUrl}
      />
    </div>
  );
};

const MobilePreview = ({ profile, theme, onCopyUrl }) => {
  return (
    <div className="mobile-frame">
      <div
        className="mobile-preview"
        style={{
          background: theme?.previewBg || "#E7F7E8",
        }}
      >
        <button className="preview-share-button" onClick={onCopyUrl}>
          <Share2 size={16} />
        </button>

        <div className="preview-content">
          <div className="preview-avatar">
            <img
              src="ASTRONAUT_IMAGE_URL"
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
  );
};

export default PreviewSection;
