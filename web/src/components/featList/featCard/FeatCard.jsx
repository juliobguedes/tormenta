import React from 'react';
import { Link } from 'react-router-dom';

import './FeatCard.css';

const getWindow = () => {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width, height);
    return { width, height };
};

const getColIndex = (index) => {
    const { width, height } = getWindow();
    let colIndex;
    if (768 <= width && width < 1024) {
        colIndex = (index % 2) + 1;
    } else if (1024 <= width && width < 1440) {
        colIndex = (index % 3) + 1;
    } else if (1440 <= width && width < 2560) {
        colIndex = (index % 3) + 1;
    }
    return colIndex;
}

const FeatCard = ({ feat, colIndex }) => {
    const url = `/feat/${feat._id}`;
    const index = getColIndex(colIndex);
    const cardClass = `feat-card feat-col-${index}`;
    return (
        <div className={cardClass}>
            <Link to={url} className="regular-text feat-link">
                <p>{feat.nome}</p>
                <p className="feat-descricao">{feat.descricao}</p>
            </Link>
        </div>
    );
};

export default FeatCard;
