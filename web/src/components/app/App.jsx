import React from 'react';
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import NewMainPage from '../pages/NewMainPage';
import AddedFeats from '../pages/AddedFeats';
import FeatPage from '../featPage/FeatPage';

import './App.css';

const App = () => {
    if (localStorage.length === 1) {
        localStorage.setItem('currentChar', JSON.stringify({ talentosAdicionados: [] }));
        localStorage.setItem('characters', JSON.stringify([]));
    }
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/feat/:featId" children={<FeatPage />} />
                <Route path="/added" children={<AddedFeats />} />
                <Route path='/' children={<NewMainPage />} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
