import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './FeatCard.css';

const MinifiedCard = ({ classSidebar, feat, clickEvent }) => (
    <div className={classSidebar} onClick={() => clickEvent()}>
        <span className="regular-text feat-link">
            <p>{feat.nome}</p>
            <p className="feat-descricao">{feat.descricao}</p>
        </span>
    </div>
);

const ExpandedCard = ({ classSidebar, feat, clickEvent }) => (
    <div className={classSidebar} onClick={() => clickEvent()}>
        <span className="regular-text feat-link">
            <p>{feat.nome}</p>
            <p className="feat-descricao">Descrição: {feat.descricao}</p>
            {feat.preRequisito ? <p className="feat-descricao">Pré-requisitos: {feat.preRequisito}</p> : null}
            {feat.custo ? <p className="feat-descricao">Custo: {feat.custo}</p> : null}
            <p className="feat-descricao">Benefício: {feat.beneficio}</p>
            {feat.normal ? <p className="feat-descricao">Normal: {feat.normal}</p> : null}
            {feat.especial ? <p className="feat-descricao">Especial: {feat.especial}</p> : null}
        </span>
    </div>
);

const ExpandableCard = ({ classSidebar, feat }) => {
    const [expanded, setExpanded] = useState(false);
    const clickEvent = () => setExpanded(!expanded);

    const card = expanded
        ? <MinifiedCard classSidebar={classSidebar} feat={feat} clickEvent={clickEvent} />
        : <ExpandedCard classSidebar={classSidebar} feat={feat} clickEvent={clickEvent} />;
    return card;
};

const FeatCard = ({ feat, sidebarShown, onClick }) => {
    const url = `/feat/${feat._id}`;
    const classSidebar = `feat-card${sidebarShown ? ' sidebar' : ''}`;
    const clickEvent = onClick ? onClick : () => {};
    
    const card = onClick
        ? <MinifiedCard classSidebar={classSidebar} feat={feat} clickEvent={clickEvent} />
        : <ExpandableCard classSidebar={classSidebar} feat={feat} />;
    return card;
};

export default FeatCard;
