// src/components/AppearanceContent.jsx
import React from "react";
import { siteConfig } from "./StoreConfig";
import "./store.css";

const AppreanceContent = ({ currentTheme, onThemeSelect }) => {
  return (
    <div className="appearance-container">
      <h2 className="theme-title">Themes</h2>

      <div className="themes-grid">
        {siteConfig.themes.map((theme) => (
          <button
            key={theme.id}
            className={`theme-card ${
              currentTheme.id === theme.id ? "active" : ""
            }`}
            onClick={() => onThemeSelect(theme)}
            style={{
              background: theme.previewBg,
              borderStyle: theme.type === "custom" ? "dashed" : "solid",
            }}
          >
            {theme.type === "custom" ? (
              <div className="create-theme">
                <span>CREATE</span>
                <span>YOUR OWN</span>
              </div>
            ) : theme.lineColors ? (
              <div className="theme-preview">
                {theme.lineColors.map((color, index) => (
                  <div
                    key={index}
                    className="preview-line"
                    style={{ background: color }}
                  />
                ))}
              </div>
            ) : (
              <div className="theme-preview">
                {Array(4)
                  .fill(null)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="preview-line"
                      style={{ background: theme.lineColor }}
                    />
                  ))}
              </div>
            )}
            <span className="theme-name">{theme.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AppreanceContent;
