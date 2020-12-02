import React, { useEffect, useState } from 'react';
import {
    BrowserRouter, Switch, Route
} from 'react-router-dom';

import NewMainPage from '../pages/NewMainPage';
import AddedFeats from '../pages/AddedFeats';
import FeatPage from '../featPage/FeatPage';
import AppContext from './AppContext';

import './App.css';

const App = () => {
    localStorage.clear();
    const [currentChar, setCurrent] = useState({ talentosAdicionados: [] });
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const char = JSON.parse(localStorage.getItem('currentChar'));
        if (char) setCurrent(char);
        const chars = JSON.parse(localStorage.getItem('characters'));
        if (chars) setCharacters(chars);
    }, []);

    const addChar = (newChar) => {
        const charExists = characters.map(c => c._id).includes(newChar._id);
        if (charExists) return;
        const updated = [ ...characters, newChar];
        updateChars(updated);
        updateCurrent(newChar);
    };

    const updateCurrent = (updated) => {
        localStorage.setItem('currentChar', JSON.stringify(updated));
        setCurrent(updated);
    };

    const updateChars = (updated) => {
        localStorage.setItem('characters', JSON.stringify(updated));
        setCharacters(updated);
    };
    
    return (
        <AppContext.Provider value={{
            currentChar, updateCurrent, addChar, characters, updateChars,
        }}>
            <BrowserRouter>
                <Switch>
                    <Route path="/feat/:featId" children={<FeatPage />} />
                    <Route path="/added" children={<AddedFeats />} />
                    <Route path='/' children={<NewMainPage />} />
                </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default App;
