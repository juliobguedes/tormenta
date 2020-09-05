import React, { useState, useEffect } from 'react';
import axios from '../../lib/axiosInstance';
import FeatCard from './featCard/FeatCard';
import Sidebar from '../sidebar/Sidebar';

import './FeatList.css';

const featFilter = (filtersList, feats) => {
    const filtered = feats.filter(feat => {
        const keys = Object.keys(filtersList).filter(key => filtersList[key]);
        if (keys.length === 0) {
            return true;
        }

        // MOVE THIS TO BACKEND
        const lowerKeys = keys.map(key => key.toLowerCase());
        const tipo = feat.tipo.toLowerCase();
        const hasKeys = lowerKeys.map(key => tipo.includes(key));
        return hasKeys.reduce((a, b) => a || b, false);
    });
    return filtered;
};

const FeatList = ({ filters }) => {
    const [feats, setFeats] = useState([]);
    const [sidebarFeats, setSidebarFeats] = useState([]);
    useEffect(() => {
        axios.get('/feat').then(({ data }) => {
            setFeats(data);
        });
    }, []);

    const updateSidebar = (clickedFeat) => {
        const upd = sidebarFeats.filter(f => f._id !== clickedFeat._id);
        if (upd.length === sidebarFeats.length) {
            upd.push(clickedFeat);
        }
        setSidebarFeats(upd);
    };

    const shownFeats = featFilter(filters, feats);
    const classSidebar = `screen${sidebarFeats.length !== 0 ? ' sidebar' : ''}`;
    return (
        <div className={classSidebar}>
            <div className={`inner-${classSidebar}`}>
                {shownFeats.map((feat, i) =>
                    <FeatCard
                      key={feat._id}
                      feat={feat}
                      sidebarShown={sidebarFeats.length !== 0}
                      onClick={() => updateSidebar(feat)}
                    />
                )}
            </div>
            <Sidebar selectedFeats={sidebarFeats} />
        </div>
    );
};

export default FeatList;
