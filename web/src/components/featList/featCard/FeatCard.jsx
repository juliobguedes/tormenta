import React from 'react';

import './FeatCard.css';

const FeatCard = ({ feat }) => (
    <div className="feat-card">
        <p className="feat-title">
            {feat.nome}
        </p>
    </div>
);

export default FeatCard;
