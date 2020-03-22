import React, { useState, useEffect } from 'react';
import axios from '../../lib/axiosInstance';
import FeatCard from './featCard/FeatCard';

import './FeatList.css';

const featFilter = (filtersList, feats) => {
    const filtered = feats.filter(feat => {
        const keys = Object.keys(filtersList).filter(key => filtersList[key]);
        if (keys.length === 0) {
            return true;
        }
        const lowerKeys = keys.map(key => key.toLowerCase());
        const tipo = feat.tipo.toLowerCase();
        const hasKeys = lowerKeys.map(key => tipo.includes(key));
        return hasKeys.reduce((a, b) => a || b, false);
    });
    return filtered;
};

const FeatList = ({ filters }) => {
    const [feats, setFeats] = useState([]);
    useEffect(() => {
        axios.get('/feat').then(({ data }) => {
            setFeats(data);
        });
    }, []);
    const shownFeats = featFilter(filters, feats);
    return (
        <div className="screen">
            <div className="inner-screen">
                {shownFeats.map((feat, i) =>
                    <FeatCard key={feat._id} colIndex={i} feat={feat} />
                )}
            </div>
        </div>
    );
};

export default FeatList;
