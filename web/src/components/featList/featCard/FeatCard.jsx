import React from 'react';
import { Link } from 'react-router-dom';

import './FeatCard.css';

const FeatCard = ({ feat }) => {
    const url = `/feat/${feat._id}`;
    return (
        <div className="feat-card">
            <p className="feat-title">
                <Link to={url}>
                    {feat.nome}
                </Link>
            </p>
        </div>
    );
};

export default FeatCard;
