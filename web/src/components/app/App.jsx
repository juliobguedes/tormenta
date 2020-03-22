import React, { useState } from 'react';
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import FeatPage from '../featPage/FeatPage';
import FeatList from '../featList/FeatList';
import Menu from '../menu/Menu';

import './App.css';

const MainPage = () => {
    const [selected, setSelected] = useState({});
    const menuClick = (featType) => {
        selected[featType] = !selected[featType];
        setSelected({ ...selected});
    };
    return (
        <div className="app-screen">
            <Menu selectType={(featType) => menuClick(featType)} />
            <FeatList filters={selected} />
        </div>
    );
};

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/feat/:featId" children={<FeatPage />} />
            <Route path='/' children={<MainPage />} />
        </Switch>
    </BrowserRouter>
);

export default App;
