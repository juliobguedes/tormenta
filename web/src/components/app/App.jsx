import React from 'react';

import Books from '../feat/book/Books';
import Menu from '../menu/Menu';

import './App.css';

const App = () => (
    <div className="app-screen">
        <Menu selectType={(featType) => console.log(featType)} />
        <Books />
    </div>
);

export default App;
