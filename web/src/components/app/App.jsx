import React from 'react';

import Menu from '../menu/Menu';
import FeatList from '../featList/FeatList';

import './App.css';

const App = () => (
    <div className="app-screen">
        <Menu selectType={(featType) => console.log(featType)} />
        <FeatList />
    </div>
);

export default App;
