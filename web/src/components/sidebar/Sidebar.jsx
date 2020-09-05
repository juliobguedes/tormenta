import React from 'react';
import FeatCard from '../featList/featCard/FeatCard';

import './Sidebar.css';

const Sidebar = ({ selectedFeats }) => {
    const classShow = !selectedFeats.length === 0 ? 'sidebar-container' : 'sidebar-container show';
    return (
        <div className={classShow}>
            <div className="feat-sidebar-container">
                {selectedFeats.map(f => 
                    <FeatCard key={f._id} feat={f} />
                )}
            </div>
        </div>
    );
};

export default Sidebar;
