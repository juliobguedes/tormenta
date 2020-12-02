import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../app/AppContext';
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
    const upd = currentChar.talentosAdicionados.filter(f => f._id !== feat._id);
    if (upd.length === currentChar.talentosAdicionados.length) {
        return false;
    }
    return true;
}

const getIcon = (feat, currentChar) => {
    if (isAdded(feat, currentChar)) {
        return '-';
    }
    return '+';
}

const expandedClick = (feat, updateFn, ev, currentChar, updateCurrent, add = false) => {
    if (add) {
        if (isAdded(feat, currentChar)) {
            currentChar.talentosAdicionados = currentChar.talentosAdicionados.filter(f => f._id !== feat._id);
        } else {
            currentChar.talentosAdicionados.push(feat);
        }
        updateCurrent(currentChar);
    }
    updateFn(feat);
    ev.stopPropagation();
};

const ExpandedCard = ({ classSidebar, feat, expand }) => {
    const appContext = useContext(AppContext);
    const { currentChar, updateCurrent } = appContext;
    return (
        <FeatContext.Consumer>
            {({ updateSidebar }) => (
                <div className={classSidebar} onClick={() => expand()}>
                    <span className="regular-text feat-link">
                        <span className="expanded-name">
                            <p>{feat.nome}</p>
                            <p
                              className="btn"
                              onClick={(ev) => expandedClick(feat, updateSidebar, ev, currentChar, updateCurrent)}
                            >
                                x
                            </p>
                            <p
                              className="btn bigger-plus"
                              onClick={(ev) => expandedClick(feat, updateSidebar, ev, currentChar, updateCurrent, true)}
                            >
                                {getIcon(feat, currentChar)}
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
};

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
