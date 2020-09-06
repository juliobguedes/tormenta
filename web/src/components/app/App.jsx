import React from 'react';
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import AddedFeats from '../pages/AddedFeats';
import FeatPage from '../featPage/FeatPage';

import './App.css';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/feat/:featId" children={<FeatPage />} />
            <Route path="/added" children={<AddedFeats />} />
            <Route path='/' children={<MainPage />} />
        </Switch>
    </BrowserRouter>
);

export default App;
