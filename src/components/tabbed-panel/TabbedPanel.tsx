// The TabbedPanel component displays a set of tabs, each with an icon, label, and content.
// Users can switch between tabs by clicking the tab buttons, which updates the visible content below.
// It is styled using SCSS and is fully reusable for any tabbed content.
// The component receives an array of tab objects (with iconName, label, and content) via props and manages the active tab state internally.

import React, { useState } from "react";
import "./tabbedPanel.scss";

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
    <div className="tabbed-panel-container">
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
