// AddProductModal.jsx
import React from "react";
import {
  X,
  Link,
  Box,
  Smartphone,
  Star,
  Zap,
  MessageCircle,
  Magnet,
} from "lucide-react";
import { productConfig } from "./ProductConfig";
import "./AddProduct.css";

const iconMap = {
  link: Link,
  box: Box,
  smartphone: Smartphone,
  star: Star,
  zap: Zap,
  whatsapp: MessageCircle,
  magnet: Magnet,
};

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const renderIcon = (option) => {
    const IconComponent = iconMap[option.icon];
    if (!IconComponent) return null;

    return (
      <div
        className="option-icon"
        style={{
          background: option.iconBg,
        }}
      >
        <IconComponent size={24} color={option.iconColor} />
      </div>
    );
  };

  return (
    <div className="modal-overlay">
      <div className="product-modal">
        <div className="product-modal-header">
          <h2>{productConfig.title}</h2>
          <button className="close-button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="product-modal-content">
          {Object.entries(productConfig.sections).map(
            ([sectionKey, section]) => (
              <div key={sectionKey} className="product-section">
                <h3 className="section-title">{section.title}</h3>

                <div className="options-grid">
                  {section.options.map((option) => (
                    <button key={option.id} className="option-card">
                      {renderIcon(option)}
                      <div className="option-content">
                        <h4>{option.title}</h4>
                        <p>{option.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProductModal;
