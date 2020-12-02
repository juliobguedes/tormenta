import React from 'react';

const AppContext = React.createContext({
    currentChar: {},
    updateCurrent: () => {},
    addChar: () => {},
    characters: [],
    updateChars: () => {},
});

export default AppContext;
