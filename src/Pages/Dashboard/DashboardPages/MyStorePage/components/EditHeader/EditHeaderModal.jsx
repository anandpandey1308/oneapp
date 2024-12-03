import React, { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { Button, Switch } from '@mui/material';
import { useStore } from '../../context/StoreContext';
import { IMAGES } from '../../utils/helpers';

const NAV_ITEMS = [
  { id: 'profile', icon: '📄', label: 'Profile' },
  { id: 'follow', icon: '🔔', label: 'Follow' },
  { id: 'socials', icon: '❤️', label: 'Socials' },
  { id: 'buttons', icon: '≡', label: 'Buttons' }
];

const EditHeaderModal = ({ onClose }) => {
  const { state, dispatch } = useStore();
  const [activeTab, setActiveTab] = useState('profile');
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({
    name: state.profile.name || 'Anand1',
    bio: state.profile.bio || 'Anand is here',
    followSettings: {
      showFollowButton: true,
      email: true,
      phone: false,
      emailOtpVerification: true,
      phoneOtpVerification: false,
      thankYouTitle: 'Thank you for following me',
      thankYouDescription: 'I am super excited to send you exciting updates',
      giftAfterFollow: false
    }
  });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const renderFollowContent = () => (
    <div className="follow-content">
      {/* Let visitors follow you section */}
      <div className="follow-header">
        <span>Let visitors follow you</span>
        <Switch 
          checked={formData.followSettings.showFollowButton}
          onChange={(e) => setFormData({
            ...formData,
            followSettings: {
              ...formData.followSettings,
              showFollowButton: e.target.checked
            }
          })}
        />
      </div>
      <div className="follow-subheader">
        Show the follow me button on your SuperProfile
      </div>

      {/* Collect Email section */}
      <div className="accordion-section">
        <button 
          className="accordion-header" 
          onClick={() => toggleSection('email')}
        >
          <span>Collect their Email only</span>
          <ChevronDown 
            className={`accordion-icon ${expandedSection === 'email' ? 'expanded' : ''}`}
            size={20}
          />
        </button>
        {expandedSection === 'email' && (
          <div className="accordion-content">
            <div className="form-row">
              <div className="input-group">
                <span className="input-icon">📧</span>
                <input
                  type="text"
                  value="Email"
                  disabled
                  className="form-input disabled"
                />
              </div>
              <div className="verification-toggle">
                <span>OTP Verification</span>
                <Switch checked={formData.followSettings.emailOtpVerification} />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <span className="input-icon">📱</span>
                <input
                  type="text"
                  value="Phone"
                  disabled
                  className="form-input disabled"
                />
              </div>
              <div className="verification-toggle">
                <span>OTP Verification</span>
                <Switch checked={formData.followSettings.phoneOtpVerification} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Thank you message section */}
      <div className="accordion-section">
        <button 
          className="accordion-header" 
          onClick={() => toggleSection('thank-you')}
        >
          <span>Show a thank you message</span>
          <ChevronDown 
            className={`accordion-icon ${expandedSection === 'thank-you' ? 'expanded' : ''}`}
            size={20}
          />
        </button>
        {expandedSection === 'thank-you' && (
          <div className="accordion-content">
            <div className="form-field">
              <input
                type="text"
                value={formData.followSettings.thankYouTitle}
                onChange={(e) => setFormData({
                  ...formData,
                  followSettings: {
                    ...formData.followSettings,
                    thankYouTitle: e.target.value
                  }
                })}
                className="form-input"
                placeholder="Title"
              />
            </div>
            <div className="form-field">
              <textarea
                value={formData.followSettings.thankYouDescription}
                onChange={(e) => setFormData({
                  ...formData,
                  followSettings: {
                    ...formData.followSettings,
                    thankYouDescription: e.target.value
                  }
                })}
                className="form-input"
                placeholder="Description"
              />
            </div>
          </div>
        )}
      </div>

      {/* Gift section */}
      <div className="accordion-section">
        <button 
          className="accordion-header" 
          onClick={() => toggleSection('gift')}
        >
          <div className="gift-header">
            <span>They get a gift after successful follow</span>
            <Switch 
              checked={formData.followSettings.giftAfterFollow}
              onChange={(e) => setFormData({
                ...formData,
                followSettings: {
                  ...formData.followSettings,
                  giftAfterFollow: e.target.checked
                }
              })}
            />
          </div>
          <ChevronDown 
            className={`accordion-icon ${expandedSection === 'gift' ? 'expanded' : ''}`}
            size={20}
          />
        </button>
      </div>

      {/* Followers info */}
      <div className="followers-info">
        <p>You have 0 followers. Click here to view or manage them.</p>
      </div>
    </div>
  );

  const renderContent = () => {
    switch(activeTab) {
      case 'follow':
        return renderFollowContent();
      case 'profile':
        return (
          <>
            <div className="profile-image-section">
              <img 
                src={state?.profile?.image || IMAGES.DEFAULT_PROFILE}
                alt="Profile" 
                className="profile-image-preview"
              />
            </div>
            <div className="profile-form">
              <div className="form-field">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="Name"
                />
              </div>
              <div className="form-field">
                <textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  className="form-input"
                  placeholder="Bio"
                  maxLength="116"
                />
                <span className="character-count">{formData.bio.length}/116</span>
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="edit-header-modal">
        <div className="edit-header-nav">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="edit-header-content">
          <div className="edit-header-top">
            <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
            <button className="close-button" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="edit-header-body">
            {renderContent()}
          </div>

          <div className="edit-header-footer">
            <Button 
              variant="contained"
              onClick={() => {
                dispatch({ 
                  type: activeTab === 'profile' ? 'UPDATE_PROFILE' : 'UPDATE_FOLLOW_SETTINGS', 
                  payload: activeTab === 'profile' ? 
                    { name: formData.name, bio: formData.bio } : 
                    formData.followSettings 
                });
                onClose();
              }}
              sx={{
                backgroundColor: '#f5f5f5',
                color: '#333',
                borderRadius: '8px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#e0e0e0'
                }
              }}
            >
              Save changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHeaderModal;