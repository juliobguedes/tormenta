import React, { useState } from 'react';
import MenuCard from './menuCard/MenuCard';

import './Menu.css';

const featTypes = [
    'Combate', 'Destino', 'Magia', 'Perícia',
    'Poder Concedido', 'Tormenta', 'Racial', 'Todos',
];

const Menu = ({ selectType }) => (
    <div className="menu-container">
        <div className="inner-menu center">
            {/* {featTypes.map(feat => (
                <MenuCard
                  menuName={feat}
                  onClick={(featType) => selectType(featType)}
                />
            ))}  */}
        </div>
    </div>
);

export default Menu;
