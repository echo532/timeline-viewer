import React from 'react';
import './MenuBar.css';

interface MenuBarProps {
  onAddEntry: () => void;
  onOtherAction?: () => void; // placeholder for future buttons
}

const MenuBar: React.FC<MenuBarProps> = ({ onAddEntry}) => {
  return (
    <div className="menu-bar">
      <button onClick={onAddEntry}>Add Entry</button>
    </div>
  );
};

export default MenuBar;
