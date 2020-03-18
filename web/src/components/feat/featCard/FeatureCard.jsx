import React from 'react';

const FeatureCard = ({ feature }) => (
    <div>
        {Object.keys(feature).map(key => <p>{feature[key]}</p>)}
    </div>
);

export default FeatureCard;
