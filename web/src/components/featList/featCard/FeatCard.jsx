import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FeatContext from '../FeatContext';

import './FeatCard.css';

const MinifiedCard = ({ classSidebar, feat, clickEvent }) => (
    <FeatContext.Consumer>
        {({ updateSidebar })=> (
            <div className={classSidebar} onClick={clickEvent ? () => clickEvent() : () => updateSidebar(feat)}>
                <span className="regular-text feat-link">
                    <p>{feat.nome}</p>
                    <p className="feat-descricao">{feat.descricao}</p>
                </span>
            </div>
        )}
    </FeatContext.Consumer>
);

const isAdded = (feat, currentChar) => {
    const upd = currentChar.feats.filter(f => f._id !== feat._id);
    if (upd.length === currentChar.feats.length) {
        return false;
    }
    return true;
}

const getIcon = (feat) => {
    const currentChar = JSON.parse(localStorage.getItem('currentChar'));
    if (isAdded(feat, currentChar)) {
        return '-';
    }
    return '+';
}

const expandedClick = (feat, updateFn, ev, add = false) => {
    if (add) {
        const currentChar = JSON.parse(localStorage.getItem('currentChar'));
        if (isAdded(feat, currentChar)) {
            currentChar.feats = currentChar.feats.filter(f => f._id !== feat._id);
        } else {
            currentChar.feats.push(feat);
        }
        localStorage.setItem('currentChar', JSON.stringify(currentChar));
    }
    updateFn(feat);
    ev.stopPropagation();
};

const ExpandedCard = ({ classSidebar, feat, expand }) => (
    <FeatContext.Consumer>
        {({ updateSidebar }) => (
            <div className={classSidebar} onClick={() => expand()}>
                <span className="regular-text feat-link">
                    <span className="expanded-name">
                        <p>{feat.nome}</p>
                        <p className="btn" onClick={(ev) => expandedClick(feat, updateSidebar, ev)}>x</p>
                        <p
                          className="btn bigger-plus"
                          onClick={(ev) => expandedClick(feat, updateSidebar, ev, true)}
                        >
                            {getIcon(feat)}
                        </p>
                    </span>
                    <p className="feat-descricao">Descrição: {feat.descricao}</p>
                    {feat.preRequisito ? <p className="feat-descricao">Pré-requisitos: {feat.preRequisito}</p> : null}
                    {feat.custo ? <p className="feat-descricao">Custo: {feat.custo}</p> : null}
                    <p className="feat-descricao">Benefício: {feat.beneficio}</p>
                    {feat.normal ? <p className="feat-descricao">Normal: {feat.normal}</p> : null}
                    {feat.especial ? <p className="feat-descricao">Especial: {feat.especial}</p> : null}
                </span>
            </div>
        )}
    </FeatContext.Consumer>
);

const ExpandableCard = ({ classSidebar, feat }) => {
    const [expanded, setExpanded] = useState(false);
    const expand = () => setExpanded(!expanded);

    const card = expanded
        ? <MinifiedCard classSidebar={classSidebar} feat={feat} clickEvent={expand} />
        : <ExpandedCard classSidebar={classSidebar} feat={feat} expand={expand} />;
    return card;
};

const FeatCard = ({ feat, hasSidebar, inSidebar }) => {
    const url = `/feat/${feat._id}`;
    const classSidebar = `feat-card${hasSidebar ? ' sidebar' : ''}`;
    
    const card = !inSidebar
        ? <MinifiedCard classSidebar={classSidebar} feat={feat}  />
        : <ExpandableCard classSidebar={classSidebar} feat={feat} />;
    return card;
};

export default FeatCard;
