import React from 'react';

import './Sidebar.css';

const Sidebar = ({ className, sidebarVisible, children }) => (
    <div className={!sidebarVisible ? 'sidebar-container' : `sidebar-container show ${className}`}>
        <div className="feat-sidebar-container">
            {children}
        </div>
    </div>
);

export default Sidebar;
