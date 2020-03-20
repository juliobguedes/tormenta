import React, { useState, useEffect } from 'react';
import axios from '../../lib/axiosInstance';
import FeatCard from './featCard/FeatCard';

import './FeatList.css';

const FeatList = () => {
    const [feats, setFeats] = useState([]);
    useEffect(() => {
        axios.get('/feat').then(({ data }) => {
            setFeats(data);
        });
    }, []);
    return (
        <div className="screen">
            <div className="inner-screen">
                {feats.map((feat, i) =>
                    <FeatCard key={feat._id} colIndex={i} feat={feat} />
                )}
            </div>
        </div>
    );
};

export default FeatList;
