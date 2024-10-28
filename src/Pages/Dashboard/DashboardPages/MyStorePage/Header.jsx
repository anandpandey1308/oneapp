// src/components/Header.jsx
import React from "react";
import { siteConfig } from "./StoreConfig";
import "./store.css";

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        {siteConfig.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;
