import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';

const HighlightsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="highlights-section">
      <button 
        className="highlights-header"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="highlights-title">
          <Star size={16} />
          <span>Highlights</span>
        </div>
        <ChevronDown 
          size={16} 
          className={`chevron ${isExpanded ? 'expanded' : ''}`}
        />
      </button>
      {isExpanded && (
        <div className="highlights-content">
          {/* Content will go here */}
        </div>
      )}
    </div>
  );
};

export default HighlightsSection;