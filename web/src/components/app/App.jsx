import React from 'react';
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import FeatPage from '../featPage/FeatPage';
import FeatList from '../featList/FeatList';
import Menu from '../menu/Menu';

import './App.css';

const MainPage = () => (
    <div className="app-screen">
        <Menu selectType={(featType) => console.log(featType)} />
        <FeatList />
    </div>
);

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/feat/:featId" children={<FeatPage />} />
            <Route path='/' children={<MainPage />} />
        </Switch>
    </BrowserRouter>
);

export default App;
