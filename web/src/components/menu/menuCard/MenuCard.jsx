import React, { useState, useEffect } from 'react';
import {
    GiSpellBook as MagicIcon,
    GiSwordsEmblem as CombatIcon,
    GiMinotaur as RacialIcon,
    GiDiceTwentyFacesTwenty as DestinyIcon,
    GiHandOfGod as WorshipIcon, 
    GiStoneCrafting as ExpertiseIcon,
    GiMonsterGrasp as TormentaIcon,
} from 'react-icons/gi';
import { IoIosUndo } from 'react-icons/io';

import './MenuCard.css';

const mapNameToIcon = {
    'Combate': CombatIcon,
    'Destino': DestinyIcon,
    'Magia': MagicIcon,
    'Perícia': ExpertiseIcon,
    'Poder Concedido': WorshipIcon,
    'Tormenta': TormentaIcon,
    'Racial': RacialIcon,
    'Todos': IoIosUndo,
};

const getColor = (selected) => ({
    color: selected ? 'white' : 'black',
});

const MenuCard = ({ menuName, onClick }) => {
    const [selected, setSelected] = useState(false);
    const click = () => { setSelected(!selected); onClick(menuName); };
    const Icon = mapNameToIcon[menuName];
    const color = getColor(selected);
    return (
        <div className="menu-card" onClick={() => click()}>
            <Icon size={128} className="center" style={color} />
            <p className="center">{menuName}</p>
        </div>
    );
};

export default MenuCard;
