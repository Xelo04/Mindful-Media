import React, { useState } from "react";
import "./TabbedPanel.scss"; // Create this file for styles

interface TabInfo {
  iconName: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface TabbedPanelProps {
  tabs: TabInfo[];
}

const TabbedPanel = ({ tabs }: TabbedPanelProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabbed-panel">
      <div className="title">
        <span>REAL LIFE EXAMPLES</span>
      </div>
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`tab-btn${index === activeIndex ? " active" : ""}`}
          >
            <span className="material-icons">{tab.iconName}</span>
            <span className="label">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="tab-content">{tabs[activeIndex].content}</div>
    </div>
  );
};

export default TabbedPanel;
