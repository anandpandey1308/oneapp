import React, { useState } from "react";
import Header from "./Header";
import MobilePreview from "./MobilePreview";
import ProfileContent from "./ProfileContent";
import AppearanceContent from "./AppreanceContent";
import { siteConfig } from "./StoreConfig";
import "./store.css";

const MyStore = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [currentTheme, setCurrentTheme] = useState(siteConfig.themes[3]); // Pastel-green default

  return (
    <div className="app-container">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <div className="content-area">
          {activeTab === "profile" ? (
            <ProfileContent />
          ) : activeTab === "appearance" ? (
            <AppearanceContent
              currentTheme={currentTheme}
              onThemeSelect={setCurrentTheme}
            />
          ) : (
            <div className="coming-soon">
              {activeTab} content coming soon...
            </div>
          )}
        </div>

        <MobilePreview theme={currentTheme} profile={siteConfig.profile} />
      </main>

      <button className="checklist-button">Your checklist</button>
    </div>
  );
};

export default MyStore;
