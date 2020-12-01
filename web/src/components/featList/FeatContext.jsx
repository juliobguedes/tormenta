import React from 'react';

const FeatContext = React.createContext({
    sidebarFeats: [],
    updateSidebar: () => {},
});

export default FeatContext;
